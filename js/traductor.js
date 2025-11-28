function traducir(idioma) {
    const elementos = document.querySelectorAll("[data-es]");
    elementos.forEach(el => {
        const traduccion = el.getAttribute(`data-${idioma}`);
        if (traduccion) {
            el.textContent = traduccion;
        }
    });
}

document.getElementById("idioma").addEventListener("change", function () {
    traducir(this.value);
});

window.addEventListener("DOMContentLoaded", () => {
    traducir(document.getElementById("idioma").value);
});


// Evento para el selector de idioma
document.getElementById("idioma").addEventListener("change", function () {
    traducir(this.value);
});

// Traduce al cargar la página según la opción seleccionada
window.addEventListener("DOMContentLoaded", () => {
    const idiomaInicial = document.getElementById("idioma").value;
    traducir(idiomaInicial);
});