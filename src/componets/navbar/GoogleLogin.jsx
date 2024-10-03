// src/components/GoogleLoginButton.js
import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { GoogleLoginButton, LogoutButton } from 'react-social-login-buttons';
// import jwt_decode from 'jwt-decode';

const GoogleLoginComponent = () => {
  const [user, setUser] = useState(null);

  const handleSuccess = (credentialResponse) => {
    // const decodedUser = jwt_decode(credentialResponse.credential);
    setUser(credentialResponse); // Save user info to state
    console.log('Login Success:', credentialResponse);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null); // Clear user state
    console.log('Logged out successfully');
  };

  return (
    <div>
      {!user ? (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          render={(renderProps) => (
            <GoogleLoginButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
              Sign in with Google
            </GoogleLoginButton>
          )}
        />
      ) : (
        <div>
          <h3>Welcome, {user.name}</h3>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </div>
      )}
    </div>
  );
};

export default GoogleLoginComponent;
