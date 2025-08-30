// Generar partículas
const particlesContainer = document.getElementById('particles');
const PARTICLE_COUNT = 40;

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const size = Math.random() * 8 + 4; // Tamaño entre 4 y 12 px
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particle.style.left = Math.random() * window.innerWidth + 'px';

    // Tiempo animación entre 6s y 15s
    const duration = Math.random() * 9 + 6;
    particle.style.animationDuration = duration + 's';

    particle.style.animationDelay = '-' + Math.random() * duration + 's';

    particlesContainer.appendChild(particle);

    // Eliminar partícula después de animación para evitar overflow
    setTimeout(() => {
        particlesContainer.removeChild(particle);
        createParticle();
    }, duration * 1000);
}

for(let i = 0; i < PARTICLE_COUNT; i++) {
    createParticle();
}

// Modal open & close
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openLetter');
    const modal = document.getElementById('letterModal');
    const closeBtn = document.getElementById('closeBtn');

    openBtn.addEventListener('click', () => {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Evitar scroll del body
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Cerrar modal si se hace click fuera del contenido
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});
