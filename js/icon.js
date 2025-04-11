// Object containing the summaries and links for each technology
const techData = {
    html5: {
        title: "HTML5",
        summary: "HTML5: Estrutura e semântica para páginas web modernas.",
        link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
    },
    css3: {
        title: "CSS3",
        summary: "CSS3: Estilização e design responsivo para interfaces.",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    javascript: {
        title: "JavaScript",
        summary: "JavaScript: Interatividade e dinamismo em aplicações web.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    sass: {
        title: "Sass",
        summary: "Sass: Pré-processador CSS para estilização mais eficiente.",
        link: "https://sass-lang.com/"
    },
    react: {
        title: "React",
        summary: "React: Biblioteca para construção de interfaces de usuário.",
        link: "https://reactjs.org/"
    },
    nextjs: {
        title: "Next.js",
        summary: "Next.js: Framework React para SSR e SSG.",
        link: "https://nextjs.org/"
    },
    nodejs: {
        title: "Node.js",
        summary: "Node.js: Ambiente para executar JavaScript no servidor.",
        link: "https://nodejs.org/"
    },
    tailwindcss: {
        title: "Tailwind CSS",
        summary: "Tailwind CSS: Framework utilitário para design rápido.",
        link: "https://tailwindcss.com/"
    },
    prisma: {
        title: "Prisma",
        summary: "Prisma: ORM para bancos de dados modernos.",
        link: "https://www.prisma.io/"
    },
    typescript: {
        title: "TypeScript",
        summary: "TypeScript: JavaScript com tipagem estática.",
        link: "https://www.typescriptlang.org/"
    },
    styledcomponents: {
        title: "Styled Components",
        summary: "Styled Components: Estilização com CSS-in-JS.",
        link: "https://styled-components.com/"
    },
    cypress: {
        title: "Cypress",
        summary: "Cypress: Ferramenta para testes end-to-end.",
        link: "https://www.cypress.io/"
    }
};

// Get DOM elements
const iconsGrid = document.getElementById('iconsGrid');
const summaryContent = document.getElementById('summaryContent');
const cards = iconsGrid.querySelectorAll('.icon-card');

// Add click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove active class from all cards
        cards.forEach(c => c.classList.remove('active'));
        // Add active class to the clicked card
        card.classList.add('active');

        // Get the tech key from the data-tech attribute
        const tech = card.getAttribute('data-tech');
        const data = techData[tech];

        // Update the summary content on the left
        summaryContent.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.summary}</p>
            <a href="${data.link}" target="_blank">Saiba mais</a>
        `;
    });
});