function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Duración aleatoria entre 2 y 5 segundos
    heart.style.opacity = `${Math.random() + 0.5}`; // Opacidad aleatoria entre 0.5 y 1

    document.getElementById('hearts-container').appendChild(heart);

    // Remover el corazón después de que termine la animación
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

setInterval(createHeart, 300); // Crear un nuevo corazón cada 300ms

document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.createElement('div');
    heartsContainer.id = 'hearts-container';
    document.body.appendChild(heartsContainer);
});
