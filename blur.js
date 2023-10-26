const elemento = document.getElementById("elementToBlur");
const boton = document.getElementById("boton");
const tarjetas = document.getElementById("tarjetas");
const cierraTarjetas = document.getElementById("cierraTarjetas");

document.addEventListener("DOMContentLoaded", () => {
    tarjetas.style.opacity = "100%";
    tarjetas.style.filter = "blur(0rem)";
})

document.addEventListener("keydown", () => {
    let escape = event.key;
    if (escape === "Escape") {
        tarjetas.classList.remove("blur");
        tarjetas.style.transition = "1s";
        tarjetas.style.opacity = "0%";
        tarjetas.style.visibility = "hidden";
        tarjetas.style.filter = "blur(1.5rem)";
        elemento.classList.remove("blur");
        elemento.style.filter = "blur(0rem)";
        elemento.style.transition = "1s";
    }
});

cierraTarjetas.addEventListener("click", () => {

    tarjetas.classList.remove("blur");
    tarjetas.style.transition = "1s";
    tarjetas.style.opacity = "0%";
    tarjetas.style.visibility = "hidden";
    tarjetas.style.filter = "blur(1.5rem)";
    elemento.classList.remove("blur");
    elemento.style.filter = "blur(0rem)";
    elemento.style.transition = "1s";

})

boton.addEventListener("click", () => {

    if (elemento.classList.contains("blur")) {
        tarjetas.classList.remove("blur");
        tarjetas.style.transition = "1s";
        tarjetas.style.opacity = "0%";
        tarjetas.style.visibility = "hidden";
        tarjetas.style.filter = "blur(1.5rem)";

        elemento.classList.remove("blur");
        elemento.style.filter = "blur(0rem)";
        elemento.style.transition = "1s";

    } else {

        elemento.classList.add("blur");
        elemento.style.filter = "blur(1.5rem)";
        elemento.style.transition = "1s";

        
        tarjetas.style.filter = "blur(0rem)";
        tarjetas.style.transition = "1s";
        tarjetas.style.visibility = "visible";
        tarjetas.style.opacity = 1;
        tarjetas.style.transition = "1s";
    }

});

