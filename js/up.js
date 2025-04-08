// Loader Animation
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');
    const loaderProgress = document.querySelector('.loader__progress');
    const body = document.body;
    
    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        loaderProgress.style.width = `${Math.min(progress, 100)}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            loader.style.opacity = '0';
            loader.style.pointerEvents = 'none';
            body.classList.add('loaded');
            
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 200);
    
    // Smooth scroll for sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});