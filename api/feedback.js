// Vercel Serverless Function: Article feedback / suggested edits via SendGrid
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'SendGrid API key not configured' });

  const { source, episode, suggestion, name, email, target } = req.body || {};
  if (!suggestion || suggestion.trim().length < 5) {
    return res.status(400).json({ error: 'Suggestion is required (min 5 chars)' });
  }

  const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'info@emerging-future.org';
  const fromName = process.env.SENDGRID_FROM_NAME || 'Emerging Future by ミラツク';
  const toEmail = process.env.FEEDBACK_TO_EMAIL || 'dialoguebar@gmail.com';

  const safe = (s) => String(s || '').replace(/[<>&"']/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));

  const subject = `【記事コメント】${safe(source || 'henka-no-katachi')} ${safe(episode || '')} `.trim();

  const html = `
<div style="font-family:'Hiragino Kaku Gothic ProN',sans-serif;max-width:600px;margin:0 auto;color:#3D2E22;">
  <div style="padding:32px 24px;background:#FDFAF7;">
    <p style="font-size:11px;color:#7A4033;letter-spacing:.12em;font-weight:600;">READER COMMENT</p>
    <h1 style="font-size:18px;font-weight:600;margin:12px 0 24px;line-height:1.5;">記事へのコメントが届きました</h1>
    <table style="width:100%;font-size:13px;line-height:1.8;border-collapse:collapse;margin-bottom:18px;">
      <tr><td style="padding:6px 0;color:#7A4033;width:80px;">連載</td><td style="padding:6px 0;">${safe(source || '-')}</td></tr>
      <tr><td style="padding:6px 0;color:#7A4033;">話数</td><td style="padding:6px 0;">${safe(episode || '-')}</td></tr>
      <tr><td style="padding:6px 0;color:#7A4033;">対象</td><td style="padding:6px 0;">${safe(target || '-')}</td></tr>
      <tr><td style="padding:6px 0;color:#7A4033;">送信者</td><td style="padding:6px 0;">${safe(name || '匿名')}</td></tr>
      <tr><td style="padding:6px 0;color:#7A4033;">メール</td><td style="padding:6px 0;">${safe(email || '-')}</td></tr>
    </table>
    <div style="background:#FAE8DC;border-radius:6px;padding:18px 22px;margin:18px 0;color:#3D2E22;font-size:14px;line-height:1.85;white-space:pre-wrap;">${safe(suggestion)}</div>
    <p style="font-size:11px;color:#7A7268;margin-top:24px;">このメールは emerging-future の記事ページから送信されました。</p>
  </div>
</div>`;

  try {
    const r = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: fromEmail, name: fromName },
        reply_to: email ? { email, name: name || '' } : undefined,
        subject,
        content: [{ type: 'text/html', value: html }],
      }),
    });
    if (!r.ok) {
      const t = await r.text();
      console.error('feedback send error:', t);
      return res.status(500).json({ error: 'Failed to send' });
    }
    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('feedback handler error:', e);
    return res.status(500).json({ error: e.message });
  }
}
