// Vercel Serverless Function: Claude API proxy for manual Q&A
export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  const { question, context, history } = req.body;
  if (!question) return res.status(400).json({ error: 'Question is required' });

  const systemPrompt = `あなたは「Claude Code 実務マニュアル」の質問応答アシスタントです。
このマニュアルは、プログラミング経験のない社員がClaude Code（AIコーディングツール）を使えるようになるための実務ガイドです。

回答のルール:
- 日本語で回答する
- 専門用語が出てきたら必ず平易な言葉で補足する
- 回答は簡潔にする（3-5文程度）。詳しく知りたい場合はマニュアルの該当章を案内する
- マニュアルに書かれていない内容について聞かれた場合は「このマニュアルには記載がありません」と正直に答える
- 絵文字は使わない
- 「〜だと思います」ではなく断定的に答える

以下はユーザーが現在読んでいるマニュアルの内容です:
${context || '(コンテキストなし)'}`;

  // Build messages from history
  const messages = [];
  if (history && Array.isArray(history)) {
    for (const msg of history.slice(-6)) { // Keep last 6 messages for context
      messages.push({ role: msg.role, content: msg.content });
    }
  }
  messages.push({ role: 'user', content: question });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: `API error: ${err}` });
    }

    const data = await response.json();
    const answer = data.content?.[0]?.text || 'No response';
    return res.status(200).json({ answer });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
