
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD5LeAPaNsd87UjGMknU6x2FKuNZ-7f3qw",
      authDomain: "kwiiter-a2e56.firebaseapp.com",
      projectId: "kwiiter-a2e56",
      storageBucket: "kwiiter-a2e56.appspot.com",
      messagingSenderId: "238802958880",
      appId: "1:238802958880:web:c7e1e9617423e371799a45"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHtml += row;
      //End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebaseConfig.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name" , room_name);

    window.location ="kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location = "kwitter.html";
}

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        messahe:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

