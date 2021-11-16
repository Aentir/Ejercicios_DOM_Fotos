window.onload = function() {

    let imagen = document.getElementById("caja");
    let desaparecer = document.getElementById("desaparecer");
    let al20 = document.getElementById("oscureceral20");
    let original = document.getElementById("oscureceral100");

    desaparecer.addEventListener("click", () => {
        imagen.style.opacity = "0";
        imagen.style.transition = "opacity 2s";
    })

    al20.addEventListener("click", () => {
        imagen.style.opacity = "0.2";
        imagen.style.transition = "opacity 2s";
    })

    original.addEventListener("click", () => {
        imagen.style.opacity = "100";
        imagen.style.transition = "opacity 2s";
    })


}