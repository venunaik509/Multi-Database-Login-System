document.getElementById('signupForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const msg = document.getElementById('signupMsg');
  msg.textContent = '';
  try {
    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password })
    });
    const data = await res.json();
    msg.textContent = data.message;
    msg.style.color = res.ok ? 'green' : 'red';
    if (res.ok) {
      setTimeout(() => { window.location.href = 'login.html'; }, 1200);
    }
  } catch {
    msg.textContent = 'Network error.';
    msg.style.color = 'red';
  }
});
