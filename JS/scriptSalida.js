let btnSalir = document.getElementById("btnSalir");
let personita = document.getElementById("personita");
let imagen = document.getElementById("imagen");

let nombre = localStorage.getItem("Nombre");
let genero = localStorage.getItem("Genero");

if (nombre == null){
    location.href = "index.html";
} else {
    personita.innerHTML = nombre;
}

let imageCaminito;

if (genero === "Masculino") {
    adentro.style.background = 'url("Img/Masculino.png")';
    imageCaminito = 'Img/dancing.jpg';
} else if (genero === "Femenino") {
    adentro.style.background = 'url("Img/Femenino.png")';
    imageCaminito = 'Img/wearefuck.jpg';
} else if (genero === "Fluido") {
    adentro.style.background = 'url("Img/Fluido.png")';
    imageCaminito = 'Img/Ups.jpg';
}

let img = document.createElement('img');
img.src = imageCaminito;
img.alt = 'Ayuda';
img.style.width = "300px";
img.style.height = "300px";
img.style.margin = "10px";
img.style.border = "solid";
adentro.appendChild(img);

btnSalir.addEventListener("click", () => {
    localStorage.clear()
    location.href = "index.html"
});
