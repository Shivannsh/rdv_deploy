import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { clientID } from '../../../utils/api';
const GoogleLoginButton = () => {
//   const { signIn   , loading , error } :any = useGoogleLogin({
//     clientId: clientID,
//     redirectUri: 'http://localhost:3000/faq', // Change this to your app's URL
//   });

//   const handleSignInClick = () => {
//     signIn();
//   };

  return (
    <div>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={handleSignInClick}>Sign in with Google</button>
      )}
      {error && <p>Error: {error.message}</p>} */}
    </div>
  );
};

export default GoogleLoginButton;
