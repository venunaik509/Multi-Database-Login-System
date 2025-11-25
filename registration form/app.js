// Handle switching between forms
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const showLogin = document.getElementById('show-login');
const showSignup = document.getElementById('show-signup');
const authContainer = document.getElementById('auth-container');
const welcomeContainer = document.getElementById('welcome-container');
const welcomeMessage = document.getElementById('welcome-message');
const logoutBtn = document.getElementById('logout-btn');

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'flex';
});
showSignup.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'flex';
});

// Signup
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fullName = document.getElementById('signup-fullname').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;
  const phone = document.getElementById('signup-phone').value.trim();
  const errorDiv = document.getElementById('signup-error');
  errorDiv.textContent = '';
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    await db.collection('users').doc(user.uid).set({
      fullName,
      phone
    });
    signupForm.reset();
    showWelcome(user.uid);
  } catch (error) {
    errorDiv.textContent = error.message;
  }
});

// Login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const errorDiv = document.getElementById('login-error');
  errorDiv.textContent = '';
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    loginForm.reset();
    showWelcome(user.uid);
  } catch (error) {
    errorDiv.textContent = error.message;
  }
});

// Show welcome message
async function showWelcome(uid) {
  try {
    const doc = await db.collection('users').doc(uid).get();
    const data = doc.data();
    welcomeMessage.textContent = `Welcome, ${data && data.fullName ? data.fullName : 'User'}!`;
    authContainer.style.display = 'none';
    welcomeContainer.style.display = 'block';
  } catch (error) {
    welcomeMessage.textContent = 'Welcome!';
  }
}

// Logout
logoutBtn.addEventListener('click', async () => {
  await auth.signOut();
  welcomeContainer.style.display = 'none';
  authContainer.style.display = 'block';
  signupForm.style.display = 'flex';
  loginForm.style.display = 'none';
});

// Auto-login state
auth.onAuthStateChanged((user) => {
  if (user) {
    showWelcome(user.uid);
  } else {
    welcomeContainer.style.display = 'none';
    authContainer.style.display = 'block';
    signupForm.style.display = 'flex';
    loginForm.style.display = 'none';
  }
});
