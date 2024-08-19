document.addEventListener('DOMContentLoaded', function() {
    const openMenuButton = document.getElementById('menu_burguer');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const body = document.getElementsByTagName('body')[0];

    // Abre o menu e o overlay
    openMenuButton.addEventListener('click', function() {
        menu.style.display = "block";
        body.style.overflow = "hidden";
        setTimeout(() => {
            menu.style.opacity = '1';
            overlay.style.display = 'block';
        }, 10);
    });

    // Fecha o menu e o overlay ao clicar no overlay
    overlay.addEventListener('click', function() {
        menu.style.opacity = '0';
        overlay.style.display = 'none';
        body.style.overflow = "auto";
        setTimeout(() => {
            menu.style.display = "none";
        }, 300);
    });

    // Seleciona todos os itens de menu com a classe 'menu-navegacao'
    const menuItems = document.querySelectorAll('.menu-navegacao');

    // Adiciona um ouvinte de evento de clique a cada item do menu
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.style.opacity = '0';
            overlay.style.display = 'none';
            body.style.overflow = "auto";
            setTimeout(() => {
                menu.style.display = "none";
            }, 300);
        });
    });
});
