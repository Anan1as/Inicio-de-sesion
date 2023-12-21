let usuarios = [
    {
        Nombre: "Ananias",
        Apellido: "Oropeza",
        Email: "amychelleoropezaortiz@gmail.com",
        Password: "nani190905"
    },
    {
        Nombre: "Jeremy",
        Apellido: "Soto",
        Email: "soto.vega@gmail.com",
        Password: "umai!"
    }
];

let btnIngreso = document.getElementById("btnIngreso");
let formulario = document.getElementById("formulario");

btnIngreso.addEventListener("click", () => {
    let email = document.getElementById("verificacionEmail").value;
    let password = document.getElementById("verificacionPassword").value;

    let usuarioEncontrado = false;

    usuarios.forEach((usuario) => {
        if (email === usuario.Email && password === usuario.Password) {
            usuarioEncontrado = true;
            localStorage.setItem('Nombre', usuario.Nombre);
            location.href = "ingresado.html";
        }else if(email == '' || password == ''){
        
        }
    });

    if (!usuarioEncontrado) {
        let avisoExistente = formulario.querySelector(".aviso");
        if (!avisoExistente) {
            let aviso = document.createElement("p");
            aviso.innerHTML = "Información incorrecta.";
            aviso.classList.add("aviso");
            formulario.appendChild(aviso);
        }
    }
});