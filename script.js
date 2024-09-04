// all the info is here but its messy asf nor do i plan to fix it!

// Handle the tilt effect for the download button
document.querySelector('.download-button').addEventListener('mousemove', function(e) {
    const button = e.target;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 2;
    const rotateY = (x - centerX) / 4;

    button.style.transition = 'transform 0.2s ease-out';
    button.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.querySelector('.download-button').addEventListener('mouseleave', function(e) {
    e.target.style.transition = 'transform 0.4s ease-out';
    e.target.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
});

// Create particles around the text
function createTextParticles() {
    const text = document.querySelector('.sparkling-text');
    const rect = text.getBoundingClientRect();
    const particles = 30; // Number of particles to create

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.getElementById('particles').appendChild(particle);

        const x = Math.random() * rect.width + rect.left;
        const y = Math.random() * rect.height + rect.top;
        const duration = Math.random() * 3 + 2;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animationDuration = `${duration}s`;

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}

// Call createTextParticles to initialize particles around the text
createTextParticles();

// Handle the click event for the arrow
document.getElementById('arrow').addEventListener('click', function() {
    // Fade out content
    document.querySelector('.content').style.opacity = 0;
    document.getElementById('particles').style.opacity = 0;

    // Show overlay with fade-in effect
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
    setTimeout(() => {
        overlay.style.opacity = 1;
    }, 500000); // Small delay to ensure display is set before fading in
});

window.onload = function() {
    const textElement = document.querySelector('.typewriter');

    function resetTypewriter() {
        textElement.style.animation = 'none'; // Reset the animation
        void textElement.offsetWidth; // Trigger a reflow, flushing the CSS changes
        textElement.style.animation = 'typing 7s steps(18, end) infinite, blink-caret 0.75s step-end infinite'; // Reapply the animation
    }

    resetTypewriter(); // Initialize the animation
};

document.getElementById('download-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default action

    // Hide the initial content and particles
    document.querySelector('.content').style.opacity = 0;
    document.getElementById('particles').style.opacity = 0;

    // Show the app overlay
    const appOverlay = document.getElementById('app-overlay');
    appOverlay.style.display = 'flex';
    setTimeout(() => {
        appOverlay.style.opacity = 1;
    }, 100); // Delay to ensure display is set before fading in
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('arrow').addEventListener('click', function() {
        // Your click handler logic here
        document.querySelector('.content').style.opacity = 0;
        document.getElementById('particles').style.opacity = 0;

        const overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.style.opacity = 1;
        }, 100); // Adjust delay if necessary
    });
});

const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slider.children.length;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); // Change every 3 seconds
});