  // Seleciona todos os itens de menu com a classe 'menu-navegacao'
  const menuItems = document.querySelectorAll('.menu-navegacao');
  const overlay = document.getElementById('overlay');
  const menu = document.getElementById('menu');
  const body = document.getElementById("conteudo")

  // Adiciona um ouvinte de evento de clique a cada item do menu
  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          // Remove a classe 'active' do overlay para escondê-lo
          overlay.style.display = 'none';
          menu.style.display = "none"
          body.classList.remove('blur');
      });
  });


document.addEventListener('DOMContentLoaded', function() {
    const openMenuButton = document.getElementById('menu_burguer');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const body = document.getElementById("conteudo"); // Obtém o elemento <body>
    

    
    openMenuButton.addEventListener('click', function() {
        menu.style.display = "block"
        setTimeout(() => {
            
            menu.style.opacity = '1';
            overlay.style.display = 'block';
            body.classList.add('blur'); // Adiciona desfoque ao corpo
        }, 10);
    });

    overlay.addEventListener('click', function() {
        
        menu.style.opacity = '0';
        overlay.style.display = 'none';
        body.classList.remove('blur'); // Remove desfoque do corpo
        setTimeout(() => {
            menu.style.display = "none"
            
        }, 300);
    });
});
