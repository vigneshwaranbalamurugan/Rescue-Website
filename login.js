

    const auth = firebase.auth();
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Logged in successfully!');
          alert("Login Successfully");
        })
        .catch((error) => {
          alert(error.message);
          console.error('Login failed:', error);
        });
    });  