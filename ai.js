async function askAI() {
  const question = document.getElementById('question').value;
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_OPENAI_API_KEY"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: question }]
    })
  });

  const data = await res.json();
  document.getElementById("ai-response").innerText = data.choices[0].message.content;
}