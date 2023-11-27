import { useState } from 'react';

const Test = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Update the API endpoint
      const loginUrl = `http://streamapi.com:3000/auth/login`;

      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        const accessToken = responseData.access_token;

        // Store token in localStorage
        localStorage.setItem('accessToken', accessToken);

        console.log('Access Token:', accessToken);

        // Redirect the user to another page after successful login
        // Replace '/home' with the desired path
        window.location.href = '/';
      } else {
        console.error('Login failed. Server response:', responseData);
        // You might want to display an error message to the user based on responseData
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Test;
