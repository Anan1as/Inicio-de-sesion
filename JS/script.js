let usuarios = {
    Nombre: "Ananias",
    Apellido: "Oropeza",
    Email: "amychelleoropezaortiz@gmail.com",
    contraseña: "nani190905"
}

let email = document.getElementById("verificacionEmail");
let contraseña = document.getElementById("contraseña");

let btnIngreso = document.getElementById("btnIngreso");

let formulario = document.getElementById("formulario");

btnIngreso.addEventListener("click", () => {
    if (email.value == usuarios.Email && contraseña.value == usuarios.contraseña){
        localStorage.setItem('email', email.value);
        localStorage.setItem('contraseña', contraseña.value);

        location.href = "ingresado.html"
    } else {
        let aviso = document.createElement("p");
        aviso.innerHTML = "Información incorrecta."

        formulario.appendChild(aviso);
    };
});