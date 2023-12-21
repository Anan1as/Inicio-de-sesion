let btnSalir = document.getElementById("btnSalir");
let personita = document.getElementById("personita");

let nombre = localStorage.getItem("Nombre");

if (nombre == null){
    location.href = "index.html";
} else {
    personita.innerHTML = nombre;
}

btnSalir.addEventListener("click", () => {
    localStorage.clear()
    location.href = "index.html"
});