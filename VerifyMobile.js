// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDhk_8bhmMUo2pclKIksTpbVgftyB_IFRY",
    projectId: "register1-45164",
    storageBucket: "register1-45164.appspot.com",
    messagingSenderId: "614555310804",
    appId: "1:614555310804:web:47e87fd212f77b6b0db941"
  };
  firebase.initializeApp(firebaseConfig);
  document.addEventListener('DOMContentLoaded', function () {
  const verifyCodeButton = document.getElementById('verify');
  verifyCodeButton.addEventListener('click', (e) => {
    e.preventDefault();
  
    var phoneNumber = prompt('Please enter your phone number:');
    if (phoneNumber) {
      //window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      firebase.auth().verifyPhoneNumber(phoneNumberr)
        .then(function () {
          console.log('Verification code sent to:', phoneNumber);
          var verificationCode = prompt('Please enter the verification code:');
          if (verificationCode) {
            alert("Verified");
          }
        })
        .catch(function (error) {
          console.error('Verification request failed:', error);
          alert("Verification request failed. Please try again.");
        });
    }
  });
})