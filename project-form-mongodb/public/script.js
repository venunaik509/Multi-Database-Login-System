const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const showLogin = document.getElementById('show-login');
const showSignup = document.getElementById('show-signup');
const messageDiv = document.getElementById('message');
const formTitle = document.getElementById('form-title');
const formContainer = document.getElementById('form-container');
const welcomeContainer = document.getElementById('welcome-container');
const welcomeMessage = document.getElementById('welcome-message');
const logoutBtn = document.getElementById('logout-btn');

showLogin.onclick = (e) => {
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
  formTitle.textContent = 'Login';
  messageDiv.textContent = '';
};
showSignup.onclick = (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
  formTitle.textContent = 'Signup';
  messageDiv.textContent = '';
};

signupForm.onsubmit = async (e) => {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  messageDiv.style.color = '#d8000c';
  messageDiv.textContent = '';
  try {
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password })
    });
    const data = await res.json();
    if (res.ok) {
      messageDiv.style.color = 'green';
      messageDiv.textContent = data.message;
      signupForm.reset();
    } else {
      messageDiv.textContent = data.message;
    }
  } catch {
    messageDiv.textContent = 'Network error.';
  }
};

loginForm.onsubmit = async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  messageDiv.style.color = '#d8000c';
  messageDiv.textContent = '';
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      formContainer.style.display = 'none';
      welcomeContainer.style.display = 'block';
      welcomeMessage.textContent = `Welcome, ${data.firstName}!`;
    } else {
      messageDiv.textContent = data.message;
    }
  } catch {
    messageDiv.textContent = 'Network error.';
  }
};

logoutBtn.onclick = () => {
  welcomeContainer.style.display = 'none';
  formContainer.style.display = 'block';
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
  formTitle.textContent = 'Login';
  messageDiv.textContent = '';
};
