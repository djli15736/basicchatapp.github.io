  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import * as rtdb from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDkEl9D343l_5yTqqfbxh0h0h3pNQc4lTY",
      authDomain: "cpeg470inclass.firebaseapp.com",
      databaseURL: "https://cpeg470inclass-default-rtdb.firebaseio.com",
      projectId: "cpeg470inclass",
      storageBucket: "cpeg470inclass.appspot.com",
      messagingSenderId: "756440592219",
      appId: "1:756440592219:web:99c347e6696e3c580c747e",
      measurementId: "G-VDYC28B5MB"
    };
  
    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  let db = rtdb.getDatabase(app);
  let titleRef = rtdb.ref(db, "/");
  let childRef = rtdb.child(titleRef, "chatlog");
  rtdb.set(childRef, "Hello There.");
  let first_item = document.createElement("li");
  let list = document.getElementById("chathistory");
  first_item.innerHTML = "Hello There.";
  list.appendChild(first_item);
  
  var clickHandler = function(eventObject) {
    let boxValue = document.getElementById("chatbox").value;
    rtdb.push(childRef, boxValue);
    let list = document.getElementById("chathistory");
    let item = document.createElement("li");
    item.innerHTML = boxValue;
    list.appendChild(item);
  }
  
  document.querySelector("#chatbutton").addEventListener("click" , clickHandler);