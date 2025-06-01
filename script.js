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

function launchConfetti() {
    confetti({
      particleCount: 600,
      spread: 1000,
      origin: { y: 0.6 }
    });
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
    setInterval(launchConfetti, 3000);

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
    const images = ["img/kitty.png", "img/lazo.png", "img/lazo2.png", "img/fiesta.png", "img/enojon.png", "img/oso.png", "img/corazon.png", "img/rojo.png", "img/azul.png"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    img.src = randomImage; // Ajusta según la ubicación real
    img.classList.add("floating-image");

    // Posición aleatoria
    img.style.left = Math.random() * 100 + "vw";

    container.appendChild(img);

    // Eliminar imagen después de la animación
    setTimeout(() => {
        img.remove();
    }, 6000);
}

function toggleCard() {
    const card = document.getElementById("card-inner");
    const popup = document.getElementById("card-popup");

    // Gira la carta
    card.classList.add("card-open");

    // Agrega el contenido largo a la carta
    const cardContent = document.getElementById("card-popup-content");
    cardContent.innerHTML = `
    <span class="close" onclick="closeCardPopup()">×</span>
    <h2 class="quicksand">¡Felices 21 Andreitaa! 🐒🎉</h2>
    
    <div class="popup-scroll-text">
    <p class="quicksand">
        <br>
        Quiero empezar esta cartita agradeciéndole a Dios quien sé que después de habérselo pedido tanto me permite hoy estar presente este día tan especial para ti y eso me hace aún más feliz, creo que también estaba ansioso porque llegue este día.
        <br><br>
        Pero bueno, esta cartita es especialmente para celebrar tu día, un año más de vida, un año más en el que el mundo puede disfrutar de Andreita. Es un honor muy grande haberte conocido y que sigas formando parte de mi vida.
        <br><br>
        Te admiro muchísimo, pero un montón realmente. Aunque no lo creas he aprendido y sigo aprendiendo muchas cosas lindas y buenas de ti. Para mí eres una personita de luz que va iluminando todo a su paso. Admiro el gran corazón que tienes con todo el mundo, admiro el cariño que le tienes a tu familia, admiro el esfuerzo que le pones a lo que haces. A pesar de que casi siempre tienes sueñito, lo sabes hacer a un lado y haces lo que te toca hacer, y lo mejor de todo es que todo lo que haces lo haces muy bien.
        <br><br>
        Y eso lo he pensado desde siempre, desde cuando recién te conocía unos meses y a las justas sabía tu nombre jajaja, pero aún así podía ver que eras una crack. Admiro tu forma de ver las cosas y la cercanía que tienes con Dios. Sinceramente me gusta mucho eso porque siento que me haces acercarme a Dios de nuevo, otra vez, como cuando era pequeño.
        <br><br>
        Realmente eres una chica increíble y para mí la mejor del mundo, siempre te lo he dicho creo jijiji. De corazón deseo y le pido a Dios siempre todo lo bueno del mundo para ti porque realmente lo mereces. Hoy es un año más y sé que vendrán un montón de cositas buenas, lindasss.
        <br><br>
        En fin, te admiro muchísimo y gracias por ser la persona que eres. Gracias por haberme permitido entrar en tu vida. Siempre será mi mejor momento porque me motivas a ser el mejor chico del mundo para la mejor chica del mundo. Gracias por las alegrías, gracias por la paz que me das, gracias por tus enojos, gracias por haber sacado una versión mía que personalmente me encanta. Gracias por tantooo en realidad.
        <br><br>
        Así que feliz cumpleaños mi Andreitaaa. Deseo que logres toditossss tus sueños y que estés en un mundo donde todo sea de Kitty jijiji 🩷🎀.
    </p>
    </div>
`;


    // Muestra el popup
    popup.style.display = "flex";

    // Confetti 🎉
    confetti({
        particleCount: 600,
        spread: 2000,
        origin: { y: 0.6 }
    });
}


function closeCardPopup() {
    // Oculta el popup
    document.getElementById("card-popup").style.display = "none";

    // Regresa la carta a su posición original
    const card = document.getElementById("card-inner");
    card.classList.remove("card-open");
}



