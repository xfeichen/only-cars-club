// script.js - Only Cars Club

document.addEventListener('DOMContentLoaded', () => {
    console.log('Only Cars Club: Scripts carregados!');

    // --- Animação de elementos ao rolar (Scroll Reveal) ---
    const faders = document.querySelectorAll('.fade-in, .scale-in');

    const appearOptions = {
        threshold: 0.2, 
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // --- Controle de Som do Vídeo de Fundo (Home) ---
    const video = document.getElementById('heroVideo');
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    const soundIcon = document.getElementById('soundIcon');

    if (video && soundToggleBtn && soundIcon) {
        video.muted = true;
        soundIcon.classList.add('fa-volume-mute');

        soundToggleBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            if (video.muted) {
                soundIcon.classList.remove('fa-volume-up');
                soundIcon.classList.add('fa-volume-mute');
            } else {
                soundIcon.classList.remove('fa-volume-mute');
                soundIcon.classList.add('fa-volume-up');
            }
        });
    }

    // --- Contador Regressivo (Home) ---
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        const nextEventDate = new Date('September 25, 2025 20:00:00').getTime();

        const updateCountdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = nextEventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(updateCountdown);
                countdownElement.innerHTML = "O EVENTO COMEÇOU!";
                countdownElement.classList.add('text-red-500');
            } else {
                countdownElement.innerHTML = `Faltam: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }, 1000);
    }
});