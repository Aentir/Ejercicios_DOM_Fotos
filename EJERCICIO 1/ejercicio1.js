window.onload = function(){

    let boton = document.getElementById("escondercaja");
    let caja = document.getElementById("caja");

    boton.addEventListener("mouseover", () => {
        caja.style.position = "absolute"
        caja.style.width = "100%";
        caja.style.height = "100%";
        caja.style.backgroundRepeat = "no-repeat";
    })

    boton.addEventListener("mouseout", () => {
        caja.style.width = "";
        caja.style.height = "";
    })
}