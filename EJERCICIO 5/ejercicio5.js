window.onload = function () {

    let boton = document.getElementById("mover");
    let imagen1 = document.getElementById("caja1");
    let imagen2 = document.getElementById("caja2");
    let imagen3 = document.getElementById("caja3");

    boton.addEventListener("click" , () => {
        imagen1.style.transition = "2s";
        imagen1.style.marginLeft = "25%";

        imagen2.style.transition = "2s";
        imagen2.style.marginLeft = "40%";

        imagen3.style.transition = "2s";
        imagen3.style.marginLeft = "55%";


    })



}