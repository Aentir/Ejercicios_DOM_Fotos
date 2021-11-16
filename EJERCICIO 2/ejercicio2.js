window.onload = function() {

    let imagen = document.getElementById("caja");
    let derecha = document.getElementById("derecha");
    let abajo = document.getElementById("abajo");
    let replegar = document.getElementById("replegar");


    derecha.addEventListener("click", () => {
        imagen.style.position = "absolute";
        imagen.style.width = "100%";
        imagen.style.transition = "2s width";
    })

    abajo.addEventListener("click", () => {
        imagen.style.height = "100%";
        imagen.style.transition = "2s height";
        caja.style.backgroundRepeat = "no-repeat";
    })

    replegar.addEventListener("click", () => {
        imagen.style.width = "";
        imagen.style.height = "";
        imagen.style.transition = "2s width, 2s height";
    })

}