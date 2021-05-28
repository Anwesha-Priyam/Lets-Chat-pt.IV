var username=localStorage.getItem("user_name");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVNGtcSzJnOAqykD07o0fCSsbJWsYsSEU",
  authDomain: "let-s-chat-c5590.firebaseapp.com",
  databaseURL: "https://let-s-chat-c5590-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-c5590",
  storageBucket: "let-s-chat-c5590.appspot.com",
  messagingSenderId: "898523002292",
  appId: "1:898523002292:web:9460d103f84a4a4e81aee1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom()
{
  roomName=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomName).update({
    purpose:"Adding room"
  });
  localStorage.setItem("room_name", roomName);
  window.location="Let'sChat_chat.html";
}
function getData() 
 {
  firebase.database().ref("/").on('value', 
  function(snapshot) 
  {
  document.getElementById("output").value = "";
  snapshot.forEach(function(childSnapshot) 
  {
    childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("Room" + room_names);
      row="<div class='room' id="+room_names+" onclick='showChat(this.id)'># + room_names + </div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });
    });
  }
getData();
function showChat(Name)
{
  console.log(Name);
  localStorage.setItem("room_name", Name);
  window.location="Let'sChat_chat.html";
}
function signOut()
{
  window.location="index.html";
  localStorage.removeItem("User Name");
  localStorage.removeItem("room_name");
}