document.getElementById('no-button').addEventListener('click', function() {
    var container = document.querySelector('.buttons');
    var noButton = document.getElementById('no-button');
    var yesButton = document.getElementById('yes-button');

    // Obtener el tamaño del contenedor y los botones
    var containerRect = container.getBoundingClientRect();
    var noButtonRect = noButton.getBoundingClientRect();
    var yesButtonRect = yesButton.getBoundingClientRect();

    var randomX, randomY;

    do {
        // Calcular posiciones aleatorias dentro del contenedor
        randomX = Math.random() * (containerRect.width - noButtonRect.width);
        randomY = Math.random() * (containerRect.height - noButtonRect.height);

        // Asegurarse de que el botón "No" no se superponga con el botón "Sí"
    } while (randomX < yesButtonRect.right - containerRect.left &&
             randomX + noButtonRect.width > yesButtonRect.left - containerRect.left &&
             randomY < yesButtonRect.bottom - containerRect.top &&
             randomY + noButtonRect.height > yesButtonRect.top - containerRect.top);

    // Aplicar las posiciones aleatorias
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

document.getElementById('yes-button').addEventListener('click', function() {
    window.location.href = 'second-page.html';
});
