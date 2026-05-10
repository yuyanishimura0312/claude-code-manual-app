// Vercel Serverless Function: journal.emerging-future.org のメルマガ登録
// 連載ページ（kurashi-no-katachi / henka-no-katachi 他）から SendGrid に登録
//
// POST /api/journal-subscribe
// body: { name, org?, email, source }
//   source: "kurashi-no-katachi/index" | "henka-no-katachi/index" | etc
//
// SendGrid:
//   - Marketing Contacts に追加（list_id = miratuku list 17519665）
//   - source ごとに固有 welcome email を送信
//
// 環境変数:
//   SENDGRID_API_KEY (必須)
//   SENDGRID_LIST_ID_MIRATUKU (任意・既定 17519665)
//   SENDGRID_FROM_EMAIL (任意・既定 info@emerging-future.org)
//   SENDGRID_FROM_NAME (任意・既定 NPO法人ミラツク)

const MIRATUKU_LIST_ID = '17519665';
const DEFAULT_FROM_EMAIL = 'info@emerging-future.org';
const DEFAULT_FROM_NAME = 'NPO法人ミラツク';

const SOURCES = {
  'kurashi-no-katachi/index': {
    name: '暮らしのかたち',
    en: 'KURASHI NO KATACHI',
    href: 'https://journal.emerging-future.org/kurashi/',
    intro:
      '学術領域の歴史と最先端を、毎日の食卓・関係・身体・場へと翻訳する全100回連載に、ようこそ。',
  },
  'henka-no-katachi/index': {
    name: '変化のかたち',
    en: 'HENKA NO KATACHI',
    href: 'https://journal.emerging-future.org/henka/',
    intro:
      'ソーシャルイノベーションの新しい読み方。5メタ型×15サブ型×3底流の100の型をめぐる連載に、ようこそ。',
  },
  '8-questions-lp-miratuku': {
    name: '2100年に何を残したいか',
    en: 'EIGHT QUESTIONS FOR 2100',
    href: 'https://journal.emerging-future.org/8-questions/',
    intro:
      'NPO法人ミラツクが、約1年の調査の末にたどり着いた、未来に向けた8つの問いをめぐる場へ、ようこそ。',
  },
  'deep-knowledge-book': {
    name: '深い知が拓く2100年',
    en: 'DEEP KNOWLEDGE',
    href: 'https://journal.emerging-future.org/deep-knowledge/',
    intro: '26のデータベースを横断する書籍『深い知が拓く2100年』の更新通知に、ようこそ。',
  },
};

const FALLBACK_SOURCE = {
  name: 'Emerging Future Journal',
  en: 'JOURNAL',
  href: 'https://journal.emerging-future.org/',
  intro:
    'NPO法人ミラツクが運営する journal.emerging-future.org の更新通知に、ようこそ。',
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST のみ受け付けます' });

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'SendGrid API key が設定されていません' });
  }

  const listId = process.env.SENDGRID_LIST_ID_MIRATUKU || MIRATUKU_LIST_ID;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const fromName = process.env.SENDGRID_FROM_NAME || DEFAULT_FROM_NAME;

  const { name, org, email, source } = req.body || {};
  if (!email || !name) {
    return res.status(400).json({ error: '名前とメールアドレスは必須です' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'メールアドレスの形式が正しくありません' });
  }

  const ctx = SOURCES[source] || FALLBACK_SOURCE;

  try {
    // 1. Marketing Contacts に追加（PUT は冪等で list 追加もできる）
    const upsertRes = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list_ids: [listId],
        contacts: [
          {
            email,
            first_name: name,
            last_name: org || '',
            custom_fields: source ? { source } : undefined,
          },
        ],
      }),
    });

    if (!upsertRes.ok) {
      const err = await upsertRes.text();
      console.error('SendGrid contact upsert failed:', err);
      return res.status(502).json({ error: '配信リストへの登録に失敗しました' });
    }

    // 2. ようこそメール（source ごとの本文）
    const html = buildWelcomeHtml({ name, org, ctx });
    const text = buildWelcomeText({ name, org, ctx });

    const mailRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email, name }] }],
        from: { email: fromEmail, name: fromName },
        reply_to: { email: fromEmail, name: fromName },
        subject: `【ミラツク】${ctx.name} へのご登録ありがとうございます`,
        content: [
          { type: 'text/plain', value: text },
          { type: 'text/html', value: html },
        ],
      }),
    });
    if (!mailRes.ok) {
      const err = await mailRes.text();
      console.error('SendGrid welcome mail failed:', err);
      // 登録自体は成功しているのでメール失敗でもユーザーには成功を返す
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('journal-subscribe error:', e);
    return res.status(500).json({ error: e.message || '登録処理に失敗しました' });
  }
}

function buildWelcomeText({ name, org, ctx }) {
  return `${name}${org ? '（' + org + '）' : ''} 様

ご登録ありがとうございます。
${ctx.intro}

連載ページ:
${ctx.href}

これからメールで更新情報をお届けします。
配信停止はメール末尾のリンクからいつでも行えます。

NPO法人ミラツク
${process.env.SENDGRID_FROM_EMAIL || 'info@emerging-future.org'}
`;
}

function buildWelcomeHtml({ name, org, ctx }) {
  const safeName = escapeHtml(name);
  const safeOrg = org ? escapeHtml(org) : '';
  return `<!doctype html>
<html lang="ja"><body style="margin:0;padding:0;background:#FAF6F0;">
<div style="font-family:'Hiragino Sans','Noto Sans JP',sans-serif;max-width:600px;margin:0 auto;background:#FFFFFF;color:#2A1F18;">
  <div style="padding:36px 28px 28px;border-top:4px solid #D5202C;">
    <p style="font-size:11px;color:#D5202C;letter-spacing:0.24em;font-weight:700;margin:0 0 14px;">${ctx.en}</p>
    <h1 style="font-family:'Noto Serif JP',serif;font-size:22px;font-weight:700;margin:0 0 22px;line-height:1.5;color:#2A1F18;">
      「${escapeHtml(ctx.name)}」へのご登録<br>ありがとうございます
    </h1>
    <p style="font-size:14.5px;line-height:1.95;color:#5A4838;margin:0 0 14px;">
      ${safeName}${safeOrg ? '（' + safeOrg + '）' : ''} 様
    </p>
    <p style="font-size:14.5px;line-height:1.95;color:#5A4838;margin:0 0 22px;">
      ${escapeHtml(ctx.intro)}
    </p>
    <div style="background:#FFF6E8;border-left:3px solid #D5202C;padding:14px 18px;margin:0 0 24px;">
      <p style="font-size:13px;color:#7A4033;margin:0 0 8px;letter-spacing:0.06em;font-weight:600;">連載ページ</p>
      <p style="font-size:14px;line-height:1.8;margin:0;">
        <a href="${ctx.href}" style="color:#D5202C;text-decoration:none;font-weight:500;">${ctx.href}</a>
      </p>
    </div>
    <p style="font-size:13.5px;line-height:1.95;color:#5A4838;margin:0 0 14px;">
      これから新しい記事の公開や、関連するレポート・対談のお知らせをメールでお届けします。
    </p>
    <p style="font-size:13.5px;line-height:1.95;color:#5A4838;margin:0 0 22px;">
      配信停止はメール末尾のリンクからいつでも行っていただけます。
    </p>
    <hr style="border:none;border-top:1px solid #EAE0CD;margin:28px 0 18px;">
    <p style="font-size:11.5px;color:#8B7A66;line-height:1.85;margin:0;">
      <strong style="color:#7A4033;">NPO法人ミラツク</strong><br>
      Journal: <a href="https://journal.emerging-future.org/" style="color:#7A4033;">journal.emerging-future.org</a><br>
      お問合せ: <a href="mailto:info@emerging-future.org" style="color:#7A4033;">info@emerging-future.org</a>
    </p>
  </div>
</div>
</body></html>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
