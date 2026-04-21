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

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('Community registration error:', e);
    return res.status(500).json({ error: e.message });
  }
}
