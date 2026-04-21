// Vercel Serverless Function: Community registration via SendGrid Legacy API
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'SendGrid API key not configured' });

  const listId = process.env.SENDGRID_LIST_ID || '30637750';
  const { name, org, email } = req.body;
  if (!email || !name) return res.status(400).json({ error: 'Name and email are required' });

  try {
    // Step 1: Add/update recipient via Legacy Contacts API
    const addRes = await fetch('https://api.sendgrid.com/v3/contactdb/recipients', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{
        email,
        first_name: name,
        last_name: org || '',
      }]),
    });

    if (!addRes.ok) {
      const err = await addRes.text();
      console.error('SendGrid add recipient error:', err);
      return res.status(addRes.status).json({ error: 'Failed to add contact' });
    }

    const addData = await addRes.json();
    const recipientId = addData.persisted_recipients?.[0];

    // Step 2: Add recipient to list
    if (recipientId && listId) {
      await fetch(`https://api.sendgrid.com/v3/contactdb/lists/${listId}/recipients/${recipientId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });
    }

    // Step 3: Send welcome email
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || 'info@emerging-future.org';
    const fromName = process.env.SENDGRID_FROM_NAME || 'Living Futures Network by ミラツク';
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email, name }] }],
        from: { email: fromEmail, name: fromName },
        subject: '【Living Futures Network】ご登録ありがとうございます',
        content: [{
          type: 'text/html',
          value: `
<div style="font-family:'Hiragino Kaku Gothic ProN',sans-serif;max-width:600px;margin:0 auto;color:#3D2E22;">
  <div style="padding:32px 24px;background:#FDFAF7;">
    <p style="font-size:11px;color:#7A4033;letter-spacing:.12em;font-weight:600;">LIVING FUTURES NETWORK by ミラツク</p>
    <h1 style="font-size:22px;font-weight:600;margin:12px 0 24px;line-height:1.5;">ご登録ありがとうございます</h1>
    <p style="font-size:15px;line-height:1.8;color:#6B5445;">
      ${name}さん${org ? '（' + org + '）' : ''}、ご登録ありがとうございます。
    </p>
    <p style="font-size:15px;line-height:1.8;color:#6B5445;">
      AIとの協働で「まだ形になっていない未来」を作る。その実践を学び合いながら進めるコミュニティにようこそ。
    </p>
    <div style="background:#FAE8DC;border-radius:8px;padding:16px 20px;margin:24px 0;font-style:italic;color:#5C2E24;font-size:15px;line-height:1.7;">
      「未来の理解はコモンズである」── 未来に対するアプローチや、そこで得られた情報は共通の財産です。
    </div>
    <p style="font-size:15px;line-height:1.8;color:#6B5445;">
      今後、以下のような情報をお届けします:
    </p>
    <ul style="font-size:14px;line-height:1.8;color:#6B5445;padding-left:20px;">
      <li>Claude Code活用マニュアルの更新情報</li>
      <li>実践者の事例と学びの共有</li>
      <li>AI協働の最新動向と活用法</li>
    </ul>
    <p style="font-size:15px;line-height:1.8;color:#6B5445;margin-top:24px;">
      最初のはずみ車を、一緒に回していきましょう。
    </p>
    <hr style="border:none;border-top:1px solid #E6D5C4;margin:32px 0;">
    <p style="font-size:12px;color:#7A7268;line-height:1.7;">
      Claude Code 活用マニュアル: <a href="https://claude-code-manual-app.vercel.app/" style="color:#7A4033;">https://claude-code-manual-app.vercel.app/</a><br>
      NPO法人ミラツク | Living Futures Network<br><br>
      <a href="https://claude-code-manual-app.vercel.app/" style="color:#7A7268;font-size:11px;">配信停止はこちら</a>
    </p>
  </div>
</div>`,
        }],
      }),
    }).catch(err => console.error('Welcome email error:', err));

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('Community registration error:', e);
    return res.status(500).json({ error: e.message });
  }
}
