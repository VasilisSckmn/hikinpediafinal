document.getElementById('submission-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const link = document.getElementById('link').value;

    const response = await fetch('/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, link })
    });

    const data = await response.json();
    document.getElementById('response-message').textContent = data.message;
  });


