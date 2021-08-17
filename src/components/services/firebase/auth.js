import firebase from "config/firebase-config";

export const auth = firebase.auth();
export const socialMediaAuth = (provider) => {
  auth
    .signInWithPopup(provider)
    .then((res) => {
      console.log("logged in");
      console.log(res.user);
      return res.user;
    })
    .catch((er) => {
      return er;
    });
};

export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
