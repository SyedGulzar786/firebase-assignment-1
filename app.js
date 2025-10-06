import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user", user);
    } else {
        console.log("no user");
    }
});


let signUp = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
            // Signed up 
            console.log("user", res.user);
        })
        .catch((error) => {
            console.log("error", error.code)
        });
}
let signUpBtn = document.getElementById("signUpBtn");
signUpBtn.addEventListener("click", signUp);

let signIn = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((res) => {
            // Signed IN
            console.log("user", res.user);
        })
        .catch((error) => {
            console.log("error", error.code)
        });
}
let signInBtn = document.getElementById("signInBtn");
signInBtn.addEventListener("click", signIn);

let logOut = () => {
    signOut(auth).then(() => {
        console.log("Sign-out successful.");
    }).catch((error) => {
        // An error happened.
    });
}
let logOutBtn = document.getElementById("logOutBtn");
logOutBtn.addEventListener("click", logOut);

let verifyBtn = document.getElementById("verifyBtn");
verifyBtn.addEventListener("click", () => {
    sendEmailVerification(auth.currentUser)
        .then(() => {
            console.log("Verification email sent.");
        });
});