//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC36uHu5sZ8dl1e3xJrjYn_vP1HLPzXCDY",
      authDomain: "nottwitter1-fb56c.firebaseapp.com",
      databaseURL: "https://nottwitter1-fb56c-default-rtdb.firebaseio.com",
      projectId: "nottwitter1-fb56c",
      storageBucket: "nottwitter1-fb56c.appspot.com",
      messagingSenderId: "849375034406",
      appId: "1:849375034406:web:d30779e988920e299b3ae7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function back()
{
      window.location = "kwitter_room.html";
}
