function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    var auth2 = gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.Ab === true){
      window.location.href = "https://lucia160292.github.io/e-commerce../login.html";
    }
  
    let usuario = profile.getEmail();
      sessionStorage.setItem('usuario', usuario);
      signOut();
  
  }
    function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
  
  
      
  
  
  
    