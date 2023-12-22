let usuarios = [
    {
        Nombre: "Ananias",
        Apellido: "Oropeza",
        Genero:"Masculino",
        Email: "amychelleoropezaortiz@gmail.com",
        Password: "nani190905"
    },
    {
        Nombre: "Jeremy",
        Apellido: "Soto",
        Genero:"Masculino",
        Email: "soto.vega@gmail.com",
        Password: "umai!"
    },
    {
        Nombre: "Laura/Lucian",
        Apellido: "Restrepo",
        Genero:"Fluido",
        Email: "restrepoLauris@gmail.com",
        Password: "lau12@"
    },
    {
        Nombre: "Adriana",
        Apellido: "Baez",
        Genero:"Femenino",
        Email:"lulubox@hotmail.com",
        Password: "kiguri229"
    },
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
            localStorage.setItem('Genero', usuario.Genero);
            location.href = "ingresado.html";
        };
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