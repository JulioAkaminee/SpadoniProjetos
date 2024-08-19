function adjustLayout() {
    const width = window.innerWidth;
    const carrosselInner = document.querySelector('.carrossel-inner');
    const carrosselItems = Array.from(document.querySelectorAll('.carrossel-item'));

    if (width <= 1500) {
        // Verifica se o carrossel já foi configurado para evitar duplicações
        if (!carrosselInner.classList.contains('initialized')) {
            const totalItems = carrosselItems.length;

            // Duplicar os itens para criar um loop infinito
            carrosselItems.forEach(item => {
                carrosselInner.appendChild(item.cloneNode(true));
            });

            // Adicionar uma classe com animação contínua
            carrosselInner.classList.add('initialized');

            const speed = 0.050; // Velocidade de rotação (em px/ms)
            let startTime = null;
            let offset = 0;

            // Função para atualizar a posição do carrossel
            function updatePosition(timestamp) {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;

                offset = (elapsed * speed) % (carrosselInner.scrollWidth / 2);
                carrosselInner.style.transform = `translateX(-${offset}px)`;

                // Atualiza a posição a cada frame
                requestAnimationFrame(updatePosition);
            }

            // Iniciar a animação
            requestAnimationFrame(updatePosition);
        }
    } else if (width > 1500) {
        // Se a largura da tela for maior que 1500px, remova a configuração do carrossel
        if (carrosselInner.classList.contains('initialized')) {
            carrosselInner.classList.remove('initialized');
            carrosselInner.style.transform = 'translateX(0)';

            // Remover itens duplicados
            while (carrosselInner.children.length > carrosselItems.length) {
                carrosselInner.removeChild(carrosselInner.lastChild);
            }
        }
    }
}

// Adiciona o evento de resize e chama a função na carga inicial
window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);
