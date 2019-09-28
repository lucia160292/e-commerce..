
var usuario = null;
let nombre = document.getElementById('Name').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
usuario = {
  "Name" : Name,
  "email" : email,
  "password" : password,
};

localStorage.setItem("usuario", JSON.stringify(usuario));
window.location.href = 'index.html';
console.log(usuario);

}
function getUsuario() {
let usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario);
document.getElementById("Name").innerText = usuario.nombre;
}
function getPerfil() {
let usuario = JSON.parse(localStorage.getItem("usuario"));
document.getElementById("Name").innerText = usuario.nombre;
document.getElementById("email").innerText = usuario.email;
}
function logout() {
localStorage.removeItem("usuario");
window.location.href = "login.html";
}


