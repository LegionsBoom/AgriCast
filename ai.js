async function askAI() {
  const question = document.getElementById('question').value;

  const res = await fetch('/api/ai-advice', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  });

  const data = await res.json();
  document.getElementById('ai-response').innerText = data.answer || data.error || 'No response';
}
