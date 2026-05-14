export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { goal } = req.body;
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1000,
        messages: [
          {
            role: 'system',
            content: 'You are a career roadmap generator. Return ONLY valid JSON, no markdown, no backticks. Response must start with { and end with }.'
          },
          {
            role: 'user',
            content: `The user wants to become: ${goal}. Create a career roadmap in this exact JSON format: {"totalDays":180,"phases":[{"title":"Phase 1","duration":"Days 1-30","skills":["skill1","skill2","skill3"]}],"todayFocus":"First task","motivationalMessage":"Short message"}`
          }
        ]
      })
    });
    const data = await response.json();
    if (data.error) return res.status(400).json({ error: data.error.message });
    // Extract just the text content and return it
    const content = data.choices[0].message.content;
    return res.status(200).json({ content: content });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
