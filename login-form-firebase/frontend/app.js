
const backendUrl = "http://localhost:5000"; // Change if backend runs elsewhere

const formContainer = document.getElementById('form-container');

function showMessage(msg, isSuccess = false) {
	return `<div class="message${isSuccess ? ' success' : ''}">${msg}</div>`;
}

function showSignup() {
	formContainer.innerHTML = `
		<h2>Sign Up</h2>
		<form id="signup-form">
			<input type="text" id="firstName" placeholder="First Name" required />
			<input type="text" id="lastName" placeholder="Last Name" required />
			<input type="email" id="email" placeholder="Email" required />
			<input type="password" id="password" placeholder="Password" required />
			<button type="submit">Sign Up</button>
		</form>
		<button class="link" id="to-login">Already have an account? Login</button>
		<div id="signup-message"></div>
	`;
	document.getElementById('signup-form').onsubmit = async (e) => {
		e.preventDefault();
		const firstName = document.getElementById('firstName').value.trim();
		const lastName = document.getElementById('lastName').value.trim();
		const email = document.getElementById('email').value.trim();
		const password = document.getElementById('password').value;
		const msgDiv = document.getElementById('signup-message');
		msgDiv.innerHTML = '';
		try {
			const res = await fetch(`${backendUrl}/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ firstName, lastName, email, password }),
			});
			const data = await res.json();
			if (res.ok) {
				msgDiv.innerHTML = showMessage(data.message, true);
				setTimeout(showLogin, 1500);
			} else {
				msgDiv.innerHTML = showMessage(data.message);
			}
		} catch (err) {
			msgDiv.innerHTML = showMessage('Signup failed');
		}
	};
	document.getElementById('to-login').onclick = showLogin;
}

function showLogin() {
	formContainer.innerHTML = `
		<h2>Login</h2>
		<form id="login-form">
			<input type="email" id="login-email" placeholder="Email" required />
			<input type="password" id="login-password" placeholder="Password" required />
			<button type="submit">Login</button>
		</form>
		<button class="link" id="to-signup">Don't have an account? Sign Up</button>
		<div id="login-message"></div>
	`;
	document.getElementById('login-form').onsubmit = async (e) => {
		e.preventDefault();
		const email = document.getElementById('login-email').value.trim();
		const password = document.getElementById('login-password').value;
		const msgDiv = document.getElementById('login-message');
		msgDiv.innerHTML = '';
		try {
			const res = await fetch(`${backendUrl}/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();
			if (res.ok) {
				showWelcome(data.firstName, data.lastName);
			} else {
				msgDiv.innerHTML = showMessage(data.message);
			}
		} catch (err) {
			msgDiv.innerHTML = showMessage('Login failed');
		}
	};
	document.getElementById('to-signup').onclick = showSignup;
}

function showWelcome(firstName, lastName) {
	formContainer.innerHTML = `
		<div class="welcome">
			<h2>Welcome, ${firstName} ${lastName}!</h2>
			<button onclick="location.reload()">Logout</button>
		</div>
	`;
}

// Start with login page
showLogin();
