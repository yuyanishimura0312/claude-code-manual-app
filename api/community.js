// Vercel Serverless Function: Community registration via SendGrid
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'SendGrid API key not configured' });

  const { name, org, email } = req.body;
  if (!email || !name) return res.status(400).json({ error: 'Name and email are required' });

  try {
    // Add contact to SendGrid with custom fields
    const response = await fetch('https://api.sendgrid.com/v3/marketing/contacts', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list_ids: process.env.SENDGRID_LIST_ID ? [process.env.SENDGRID_LIST_ID] : [],
        contacts: [{
          email,
          first_name: name,
          company: org || '',
        }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('SendGrid error:', err);
      return res.status(response.status).json({ error: `SendGrid error: ${response.status}` });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('Community registration error:', e);
    return res.status(500).json({ error: e.message });
  }
}
