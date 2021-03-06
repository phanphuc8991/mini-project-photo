import React from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "redirect",
  // We will display Google and Facebook as auth providers.
  signInSuccessUrl: "/photos",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
};
function SignIn() {
  return (
    <div>
      <div className="text-center">
        <h2>Login Form</h2>
        <p>or login with social accounts</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    </div>
  );
}

export default SignIn;
