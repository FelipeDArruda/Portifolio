document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header-scroll');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let lastScroll = 0;

    // Menu mobile toggle
    mobileBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Alterna entre ícone de menu e X
        if (navLinks.classList.contains('active')) {
            mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Esconder header no scroll
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            if (currentScroll > lastScroll) {
                // Scroll para baixo
                header.classList.add('hide');
            } else {
                // Scroll para cima
                header.classList.remove('hide');
            }
        } else {
            // Topo da página
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});