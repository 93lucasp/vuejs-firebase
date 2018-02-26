<template>
  <div class="row">
      <form>
            <div class="form-group">
                <label>name</label>
                <input type="email" class="form-control" id="email" placeholder="enter email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>
            <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign out</button>
        
      </form>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  methods: {
      signIn() {
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            });
        },
      signOut() {
          Firebase.auth().signOut().then(function() {
              alert('logged out')
          }).catch(function(error){
              
                alert(error);
              
          });
      }
  }
}
</script>
