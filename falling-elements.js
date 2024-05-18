document.addEventListener('DOMContentLoaded', () => {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');

        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Duración aleatoria entre 2 y 5 segundos
        heart.style.opacity = `${Math.random() + 0.5}`; // Opacidad aleatoria entre 0.5 y 1

        document.getElementById('falling-container').appendChild(heart);

        // Remover el corazón después de que termine la animación
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    function createText() {
        const text = document.createElement('div');
        text.classList.add('falling-text');
        text.textContent = 'Te amo Emily';

        text.style.left = `${Math.random() * 100}vw`;
        text.style.animationDuration = `${2 + Math.random() * 3}s`; // Duración aleatoria entre 2 y 5 segundos
        text.style.opacity = `${Math.random() + 0.5}`; // Opacidad aleatoria entre 0.5 y 1

        document.getElementById('falling-container').appendChild(text);

        // Remover el texto después de que termine la animación
        text.addEventListener('animationend', () => {
            text.remove();
        });
    }

    setInterval(createHeart, 300); // Crear un nuevo corazón cada 300ms
    setInterval(createText, 1000); // Crear un nuevo texto cada 1000ms
});
