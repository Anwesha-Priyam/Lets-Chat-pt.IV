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
room_name=localStorage.getItem("room_name");
  userName=localStorage.getItem("User Name")
  function send()
  {
   msg=document.getElementById("msg").value;
   firebase.database().ref(room_name).push(
        {
         name:userName, message:msg, like:0
        });
        document.getElementById("msg").value="";
  }
function getData()
{
      firebase.database().ref("/").on('value', function(snapshot)
      {
       document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot)
       { childKey  = childSnapshot.key;
         childData = childSnapshot.val();
         if(childKey != "purpose") 
         {
         firebase_message_id = childKey;
         message_data = childData;
 //Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name=message_data['name'];
 message=message_data['message'];
 like=message_data['like'];
 nameWithTags="<h4>"+ name + "<img class='userTick' src='tick.png'></h4>";
 messageWithTags="<h4 class='message'>" + message +"</h4>";
 likeBtn="<button class='btn-info' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
 span="<span class='glyphicon glyphicon-thumds-up>Likes:"+like+"</span></button><hr>";
 row=nameWithTags+messageWithTags+likeBtn+span;
 document.getElementById("output").innerHTML+=row;
 //End code
      }
 });
  });
 }
getData();
function updateLike(message_id)
{
  console.log("User liked message" + message_id);
  btnID=message_id;
  likes=document.getElementById(btnID).value;
  updateLikes=Number(likes)+1;
  console.log(updateLikes);
   firebase.database().ref(roomName).child(message_id).update({
    likes:updateLikes
  }
  );
}
function logOut()
{
   window.location="index.html";
   localStorage.removeItem("Room Name");
   localStorage.removeItem("User name");
}