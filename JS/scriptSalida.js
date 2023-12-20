let btnSalir = document.getElementById("btnSalir");

let email = localStorage.getItem("email");

if (email == null){
    location.href = "index.html"
};

btnSalir.addEventListener("click", () => {
    localStorage.clear()
    location.href = "index.html"
});