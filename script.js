// script.js

document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
    document.body.classList.toggle('menu-open');  // Bloqueia o scroll
});

// Fechar o menu ao clicar em qualquer item de navegação
document.querySelectorAll('#nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('hamburger').classList.remove('active');
        document.getElementById('nav-menu').classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Fechar o menu ao clicar fora do menu
document.addEventListener('click', function(event) {
    if (!document.getElementById('hamburger').contains(event.target) && !document.getElementById('nav-menu').contains(event.target)) {
        document.getElementById('hamburger').classList.remove('active');
        document.getElementById('nav-menu').classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});
