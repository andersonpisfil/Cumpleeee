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
    setTimeout(function() {
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
}

// Función para cerrar el popup de la carta
function closeCardPopup() {
    document.getElementById("card-popup").style.display = "none";
}

