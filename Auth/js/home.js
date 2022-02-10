  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAuth ,onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyD6llsNS4h3UfAD-8CNqDmqmbSl1Qw9GsI",
    authDomain: "lab2-8aacc.firebaseapp.com",
    projectId: "lab2-8aacc",
    storageBucket: "lab2-8aacc.appspot.com",
    messagingSenderId: "933618285889",
    appId: "1:933618285889:web:31a55deeeb329dc9d5f5c0",
    measurementId: "G-XCQQNWRK22"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

 onAuthStateChanged(auth,(user)=>{
     if(user)
     {
         document.getElementById("para").innerText=user.email;
     }
     else{
         location.assign("../Auth/signup.html");
     }
 })

 window.Logout=Logout;
 function Logout()
 {
    signOut(auth);
 }