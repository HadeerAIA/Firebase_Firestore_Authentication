     window.Done = Done;
     function Done(ev){
         ev.preventDefault();
        //  debugger;
         var name = document.getElementById("FullName").value;
         var email = document.getElementById("Email").value;
         var password = document.getElementById("Password").value;
         try{
            Register(email,password,name);   
         }
         catch(e){
             alert(e);
         }
     }
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAuth ,onAuthStateChanged,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
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
  const auth=getAuth();

  function Register(email,password,name)
  {
    createUserWithEmailAndPassword(auth,email,password,name).then((userCreate)=>{
        console.log(userCreate.user.uid);
    }).catch((error)=>{
        console.log(error.message);
    })
  }

  onAuthStateChanged(auth,(user)=>{
      if(user)
      location.assign("../Auth/Home.html")
  })