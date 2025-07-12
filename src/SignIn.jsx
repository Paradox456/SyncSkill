import React, { useState } from 'react';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Here, you would typically send the email and password to a backend API for authentication.
    console.log('Attempting to sign in with:', { email, password });
    // Handle successful login (e.g., redirect to dashboard)
    // Handle login errors (e.g., display error message)
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
