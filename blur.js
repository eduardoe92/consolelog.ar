const elemento = document.getElementById("elementToBlur");
const boton = document.getElementById("boton")

boton.addEventListener("click", () => {
    if (elemento.classList.contains("blur")) {
        elemento.classList.remove("blur");     
        elemento.style.filter = "blur(0rem)"
    } else {
        elemento.classList.add("blur");
        elemento.style.filter = "blur(1.5rem)";
        elemento.style.transition = "2s";
    }
});
