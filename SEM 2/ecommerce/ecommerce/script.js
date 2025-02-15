// Este script tiene el objetivo de activar el carrousel de productos de la empresa.


// Seleccion de activadores de carrusel 
document.addEventListener("DOMContentLoaded", function () {
    const grids = document.querySelectorAll("#grid-carousel");
    const prevButton = document.querySelector(".fa-chevron-left").parentElement;
    const nextButton = document.querySelector(".fa-chevron-right").parentElement;
    let currentIndex = 0;

    // Funcion para actualizacion de la data de estilo para cambio de estado del carrousel
    function updateCarousel(newIndex) {
        grids[currentIndex].style.opacity = "0";
        grids[currentIndex].style.transform = `translateX(${newIndex > currentIndex ? "-100%" : "100%"})`;
        setTimeout(() => {
            grids[currentIndex].style.display = "none";
            currentIndex = newIndex;
            grids[currentIndex].style.display = "grid";
            grids[currentIndex].style.opacity = "1";
            grids[currentIndex].style.transform = "translateX(0)";
        }, 300);
    }

    // Funcion de lectura de click para activar cambio de estado en flecha izquierda
    nextButton.addEventListener("click", function () {
        const nextIndex = (currentIndex + 1) % grids.length;
        if (nextIndex !== currentIndex) {
            updateCarousel(nextIndex);
        }
    });

    // Funcion de lectura de click para activar cambio de estado en flecha derecha
    prevButton.addEventListener("click", function () {
        const prevIndex = (currentIndex - 1 + grids.length) % grids.length;
        if (prevIndex !== currentIndex) {
            updateCarousel(prevIndex);
        }
    });

    // Efecto de transicion de cambios
    grids.forEach(grid => {
        grid.style.transition = "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
        grid.style.overflow = "hidden";
    });
    grids.forEach((grid, index) => {
        grid.style.display = index === currentIndex ? "grid" : "none";
    });
});