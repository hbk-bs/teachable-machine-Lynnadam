// Smooth scrolling für alle Anker-Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        });
    });


// Intersection Observer für Scroll-Animationen
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Alle fade-in Elemente beobachten
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Comic-Soundeffekte beim Klicken
const comicSounds = ['POW!', 'BAM!', 'KAPOW!', 'WHOOSH!', 'ZAP!', 'BOOM!'];

document.addEventListener('click', function(e) {
    if (e.target.closest('.cta-button, .nav-links a, .social-links a')) {
        const sound = comicSounds[Math.floor(Math.random() * comicSounds.length)];
        const soundEffect = document.createElement('div');
        soundEffect.textContent = sound;
        soundEffect.style.position = 'fixed';
        soundEffect.style.left = e.clientX + 'px';
        soundEffect.style.top = e.clientY + 'px';
        soundEffect.style.color = '#FF6B35';
        soundEffect.style.fontFamily = 'Bangers, cursive';
        soundEffect.style.fontSize = '2rem';
        soundEffect.style.fontWeight = 'bold';
        soundEffect.style.textShadow = '2px 2px 0px #000000';
        soundEffect.style.pointerEvents = 'none';
        soundEffect.style.zIndex = '9999';
        soundEffect.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(soundEffect);
        
        soundEffect.animate([
            { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
            { transform: 'translate(-50%, -100px) scale(1.5)', opacity: 0 }
        ], {
            duration: 800,
            easing: 'ease-out'
        }).onfinish = () => soundEffect.remove();
    }
});

// Zufällige Comic-Effekte
function addRandomComicEffect() {
    const effects = ['ZOOM!', 'FLASH!', 'SPARK!'];
    const colors = ['#FF6B35', '#F7931E', '#06FFA5', '#FFD23F'];
    
    const effect = document.createElement('div');
    effect.textContent = effects[Math.floor(Math.random() * effects.length)];
    effect.style.position = 'fixed';
    effect.style.left = Math.random() * window.innerWidth + 'px';
    effect.style.top = Math.random() * window.innerHeight + 'px';
    effect.style.color = colors[Math.floor(Math.random() * colors.length)];
    effect.style.fontFamily = 'Bangers, cursive';
    effect.style.fontSize = '1.5rem';
    effect.style.fontWeight = 'bold';
    effect.style.textShadow = '2px 2px 0px #000000';
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '1';
    effect.style.opacity = '0.6';
    
    document.body.appendChild(effect);
    
    effect.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 0.6 },
        { transform: 'scale(1) rotate(360deg)', opacity: 0 }
    ], {
        duration: 2000,
        easing: 'ease-out'
    }).onfinish = () => effect.remove();
}

// Zufällige Effekte alle 5 Sekunden
setInterval(addRandomComicEffect, 5000);

// Zusätzliche interaktive Funktionen
document.addEventListener('DOMContentLoaded', function() {
    
    // Hover-Effekte für Karten verstärken
    document.querySelectorAll('.gallery-item, .character-card').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('gallery-item') ? 
                'rotate(0deg) scale(1.05)' : 'rotate(0deg) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            // Zurück zur ursprünglichen Rotation
            const isEven = Array.from(item.parentNode.children).indexOf(item) % 2 === 1;
            if (this.classList.contains('gallery-item')) {
                this.style.transform = isEven ? 'rotate(-1deg)' : 'rotate(1deg)';
            } else {
                this.style.transform = isEven ? 'rotate(-2deg)' : 'rotate(2deg)';
            }
        });
    });

}); 