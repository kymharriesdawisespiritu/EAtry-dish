import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const [username, setUsername] = useState(''); // state to store username
  const [password, setPassword] = useState(''); // state to store password
  const navigate = useNavigate(); // get the navigate function

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      // todo: implement sign-in logic here
      // for now, just log the username and password
      console.log(username, password);
      // navigate back to the meal list page
      navigate('/'); // navigate to the root route
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-orange-500 py-4">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;