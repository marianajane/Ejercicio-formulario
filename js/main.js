var email = "";
var password = "";

function translate(){

    var title = document.getElementById("form-signin-heading");
        email = document.getElementById("inputEmail");
        password = document.getElementById("inputPassword");
    var remember = document.getElementsByTagName("span")[0];
    var button = document.getElementsByClassName("btn")[0];

    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder = "Contraseña";
    remember.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesión";

    console.log (email.value);
    //mostrarDatos();
}

   translate();

function mostrarDatos(){
    document.getElementById("datosform").innerHTML= "Datos Formulario";
    document.getElementById("correo").innerHTML= "El correo electrónico ingresado es: " + email.value; 

}

    