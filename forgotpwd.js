const firebaseConfig = {
    apiKey: "AIzaSyDhk_8bhmMUo2pclKIksTpbVgftyB_IFRY",
    authDomain: "register1-45164.firebaseapp.com",
    databaseURL: "https://register1-45164-default-rtdb.firebaseio.com",
    projectId: "register1-45164",
    storageBucket: "register1-45164.appspot.com",
    messagingSenderId: "614555310804",
    appId: "1:614555310804:web:47e87fd212f77b6b0db941"
  };

  firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
const resetpass = document.getElementById("resetpass");
resetpass.addEventListener('click',resetPassword);
function resetPassword(event) {
  event.preventDefault();
  const email = document.getElementById('e-mail').value;
  auth.sendPasswordResetEmail(email)
      .then(function() {
          alert('Password reset email sent. Please check your inbox.');
          document.getElementById('e-mail').value = '';
      })
      .catch(function(error) {
          alert('Error sending password reset email.');
          console.error(error);
      });
}
