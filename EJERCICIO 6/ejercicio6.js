window.onload = function () {

    let anterior = document.getElementById("anterior");
    let siguiente = document.getElementById("siguiente");
    let imagen = document.getElementById("imagen");
    let parrafo = document.getElementById("parrafo");

    siguiente.addEventListener("click", () =>  {

        if (imagen.getAttribute("src") == "./images/imagen1.jpg"){
            imagen.setAttribute("src", "./images/imagen2.jpg");
            parrafo.innerHTML = "Segunda foto";
        } else if (imagen.getAttribute("src") == "./images/imagen2.jpg") {
            imagen.setAttribute("src", "./images/imagen3.jpg");
            parrafo.innerHTML = "Tercera foto";
        } else {
            imagen.setAttribute("src", "./images/imagen1.jpg");
            parrafo.innerHTML = "Primera foto";
        }
    })

    anterior.addEventListener("click", () => {

        if (imagen.getAttribute("src") == "./images/imagen1.jpg"){
            imagen.setAttribute("src", "./images/imagen3.jpg");
            parrafo.innerHTML = "Tercera foto";
        } else if (imagen.getAttribute("src") == "./images/imagen3.jpg") {
            imagen.setAttribute("src", "./images/imagen2.jpg");
            parrafo.innerHTML = "Segunda foto";
        } else {
            imagen.setAttribute("src", "./images/imagen1.jpg");
            parrafo.innerHTML = "Primera foto";
        }
    })
}