// ai.js
async function askAI() {
  const question = document.getElementById('question').value;

  if (!question.trim()) {
    document.getElementById('ai-response').innerText = 'Please enter a question.';
    return;
  }

  try {
    const res = await fetch('/api/ai-advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.statusText}`);
    }

    const data = await res.json();
    document.getElementById('ai-response').innerText = data.answer || 'No response from AI.';
  } catch (error) {
    document.getElementById('ai-response').innerText = 'Error: ' + error.message;
  }
}
