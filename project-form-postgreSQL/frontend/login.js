document.getElementById('loginForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('loginMsg');
  msg.textContent = '';
  try {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    msg.textContent = data.message;
    msg.style.color = res.ok ? 'green' : 'red';
    if (res.ok) {
      setTimeout(() => { window.location.href = 'welcome.html'; }, 1000);
    }
  } catch {
    msg.textContent = 'Network error.';
    msg.style.color = 'red';
  }
});
