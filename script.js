// Función para mostrar el popup de cada letra
function showPopup(letter) {
    let popupMessage = "";

    switch (letter) {
        case 'A':
            popupMessage = "¡La letra A! Es la primera de todas.";
            break;
        case 'N':
            popupMessage = "¡La letra N! El sonido de 'naranja'.";
            break;
        case 'D':
            popupMessage = "¡La letra D! Como en 'Dulce'.";
            break;
        case 'R':
            popupMessage = "¡La letra R! Es la que da ritmo.";
            break;
        case 'E':
            popupMessage = "¡La letra E! El inicio de muchas palabras hermosas.";
            break;
        default:
            popupMessage = "¡Letra misteriosa!";
    }

    // Mostrar el mensaje en el popup
    document.getElementById("popup-message").textContent = popupMessage;

    // Mostrar el popup con retraso
    setTimeout(function () {
        document.getElementById("letter-popup").style.display = "flex";
    }, 300); // Retraso de 300ms para que el popup no se muestre de inmediato
}

// Función para cerrar el popup de letras
function closePopup() {
    document.getElementById("letter-popup").style.display = "none";
}

// Función para mostrar el popup de la carta
function showCardPopup() {
    document.getElementById("card-popup").style.display = "flex";

    confetti({
        particleCount: 600,
        spread: 2000,
        origin: { y: 0.6 }
    });
}


// Función para cerrar el popup de la carta
function closeCardPopup() {
    document.getElementById("card-popup").style.display = "none";
}

function startExperience() {
    // Oculta el popup de inicio
    document.getElementById("start-popup").style.display = "none";

    confetti({
        particleCount: 600,
        spread: 1000,
        origin: { y: 0.6 }
    });
    // Muestra el contenido principal (opcional, si lo tienes oculto al inicio)
    document.querySelector(".container").style.display = "block";

    // Reproduce la música
    const music = document.getElementById("bg-music");
    music.play().catch(err => {
        console.log("Error al reproducir música:", err);
    });
    startBalloons(); // <- inicia los globos 🎈

    // Lanza imágenes flotantes cada 2 segundos (ejemplo)
    let imageInterval = setInterval(() => {
        launchFloatingImage();
    }, 600);

    // Detener después de 10 segundos
    setTimeout(() => {
        clearInterval(imageInterval);
    }, 10000000);

}

function startBalloons() {
    const container = document.getElementById("balloons-container");

    // Colores festivos
    const colors = ["#ff4d4d", "#ffcc00", "#66ccff", "#99ff99", "#ff99cc", "#cc99ff", "#00cc99"];

    // Lanza globos cada 500 ms por 10 segundos
    const interval = setInterval(() => {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.textContent = "21";

        // Color aleatorio
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = randomColor;

        // Posición aleatoria
        balloon.style.left = Math.random() * 100 + "vw";

        container.appendChild(balloon);

        // Eliminar globo después de la animación
        setTimeout(() => {
            balloon.remove();
        }, 1);
    }, 500);

    // Detener después de 10 segundos
    setTimeout(() => {
        clearInterval(interval);
    }, 100000000);
}

function launchFloatingImage() {
    const container = document.getElementById("balloons-container");

    const img = document.createElement("img");
    const images = ["kitty.png", "lazo.png", "fiesta.png", "enojon.png", "oso.png", "corazon.png", "rojo.png", "azul.png", "naranja.png"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    img.src =randomImage; // Ajusta según la ubicación real
    img.classList.add("floating-image");

    // Posición aleatoria
    img.style.left = Math.random() * 100 + "vw";

    container.appendChild(img);

    // Eliminar imagen después de la animación
    setTimeout(() => {
        img.remove();
    }, 6000);
}
