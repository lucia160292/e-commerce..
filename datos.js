
var usuario = null;
let nombre = document.getElementById('nombre').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
usuario = {
  "nombre" : nombre,
  "email" : email,
  "password" : password,
};

localStorage.setItem("usuario", JSON.stringify(usuario));
window.location.href = 'index.html';
console.log(usuario);


function getUsuario() {
let usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario);
document.getElementById("nombre").innerText = usuario.nombre;
}
function getPerfil() {
let usuario = JSON.parse(localStorage.getItem("usuario"));
document.getElementById("nombre").innerText = usuario.nombre;
document.getElementById("email").innerText = usuario.email;
}
function logout() {
localStorage.removeItem("usuario");
window.location.href = "login.html";
}

    
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  var auth2 = gapi.auth2.getAuthInstance();
  if (auth2.isSignedIn.Ab === true){
    window.location.href = "https://lucia160292.github.io/e-commerce../";
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


  