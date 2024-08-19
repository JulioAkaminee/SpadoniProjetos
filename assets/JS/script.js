// Obter o corpo da página
var body = document.body;

// Obter o modal
var modal = document.getElementById("myModal");

// Obter o botão que abre o modal
var btn = document.getElementById("sunlight");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
}


// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}

// Parte de manipulação do modal
var image_modal = document.getElementById("image_modal");
var text_title_modal = document.getElementById("text_title_modal");
var description_modal = document.getElementById("description_modal");

var sunlight = document.getElementById("sunlight");
var view_residence = document.getElementById("view_residence");
var maisondor = document.getElementById("maisondor");
var serra_de_botucatu = document.getElementById("serra_de_botucatu");
var icon_golf_residence = document.getElementById("icon_golf_residence");
var arbore = document.getElementById("arbore");
var beach_class_meireles = document.getElementById("beach_class_meireles");
var casa_boris = document.getElementById("casa_boris");
var casa_moser = document.getElementById("casa_moser");
var concept_jatiuca = document.getElementById("concept_jatiuca");
var concept_pina = document.getElementById("concept_pina");
var les_amis = document.getElementById("les_amis");
var miraflor = document.getElementById("miraflor");
var mirante_ruy_carneiro = document.getElementById("mirante_ruy_carneiro");
var poeme = document.getElementById("poeme");



sunlight.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/SUNLIGHT.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "SUNLIGHT"; // Usa innerText para texto simples
    description_modal.innerHTML = ` CONSTRUTORA: MM CORTÊS <br>
    PROJETO: SUNLIGHT <br>
    LOCALIZAÇÃO: CARAGUATATUBA – SP. <br>
    DISPOSIÇÃO DAS PLANTAS ENTRE 88m² E 119m².
    ANO: 2023 `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}



view_residence.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/VIEW RESIDENCE .svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "VIEW RESIDENCE"; // Usa innerText para texto simples
    description_modal.innerHTML = `
        CONSTRUTORA: ALEAPAR <br>
        PROJETO: VIEW RESIDENCE <br>
        LOCALIZAÇÃO: PIRACICABA – SP. <br>
        TOTAL DE 72 UNIDADES E 190 VAGAS DE GARAGEM. <br>
        APARTAMENTOS: 140m² <br>
        TERRENO: 2.654,40m² <br>
        CONSTRUÇÃO: 18.264,97m² <br>
        ANO: 2023 <br>
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

maisondor.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/MAISON'DOR.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "MAISON D'OR"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: AMISTÁ <br>
    PROJETO: MAISON D’OR <br>
    LOCALIZAÇÃO: PIRACICABA – SP. <br>
    2 APARTAMENTOS POR ANDAR, COM 289,50m² E HALL PRIVATIVO <br>
    24 ANDARES + ROOFTOP <br>
    2 UNIDADES GARDEN COM 412m² <br>
    4 OU 5 VAGAS + DEPÓSITO INDIVIDUAL, VAGAS EXTRAS DE GARAGEM E VAGAS DE MOTOS <br>
    TERRENO: 3.294m² <br>
    ANO: 2023
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}


serra_de_botucatu.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/SERRA DE BOTUCATU .svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "SERRA DE BOTUCATU"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: EZTEC <br>
    PROJETO: SERRA DE BOTUCATU <br>
    LOCALIZAÇÃO: TATUAPÉ – SP. <br>
    101 UNIDADES RESIDENCIAIS + 22 UNIDADES NÃO RESIDENCIAIS + 8 LOJAS <br>
    4 UNIDADES POR ANDAR DE 3 E 4 DORMITÓRIOS COM 105m² E 140m² <br>
    2 VAGAS POR APARTAMENTO <br>
    TERRENO: 4.611,16m² <br>
    ANO: 2023 

    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

icon_golf_residence.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/ICON GOLF RESIDENCE .svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "ICON GOLF RESIDENCE"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: PATRIMAR <br>
    PROJETO: ICON GOLF RESIDENCE <br>
    LOCALIZAÇÃO: BARRA DA TIJUCA – RJ. <br>
    2 QUARTOS E 3 SUÍTES <br>
    1 A 3 VAGAS  <br>
    APARTAMENTOS: 78m² A 128m² <br>
    TERRENO: 12.788,78m² <br>
    ANO: 2023
    

    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

arbore.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/ARBORÊ 1.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "ARBORÊ"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: ARBORÊ <br>
    LOCALIZAÇÃO: FORTALEZA - CE. <br>
    APARTAMENTO DE 2 OU 3 QUARTOS COM OPÇÕES DE GARDEN <br>
    APARTAMENTOS DE 53m² E 65m² <br>
    ANO: 2022
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

beach_class_meireles.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/beach class.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "BEACH CLASS MEIRELES"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: BEACH CLASS MEIRELES <br>
    LOCALIZAÇÃO: FORTALEZA - CE. <br>
    UNIDADES DE 26m² A 65m² <br>
    APARTAMENTOS DE 1 A 2 QUARTOS <br>
    ANO: 2022
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}



casa_boris.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/casa boris.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "CASA BORIS"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: CASA BORIS <br>
    LOCALIZAÇÃO: FORTALEZA - CE. <br>
    CONJUNTO DE 2 TORRES, SENDO 2 APARTAMENTOS POR ANDAR <br>
    APARTAMENTOS DE 160m² E 200m² <br>
    ANO: 2023
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

casa_moser.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/casa moser.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "CASA MOSER"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: CASA MOSER <br>
    LOCALIZAÇÃO: RECIFE - PE. <br>
    UNIDADES DE 37m² A 65m² <br>
    ANO: 2023
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

concept_jatiuca.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/concept jatiuca.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "CONCEPT JATIUCA"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: CONCEPT JATIUCA <br>
    LOCALIZAÇÃO: MACEIÓ – AL. <br>
    UNIDADES DE 25m² A 62m² <br>
    ANO: 2023
    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

concept_pina.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/concept pina.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "CONCEPT PINA"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: CONCEPT PINA <br>
    LOCALIZAÇÃO: RECIFE - PE. <br>
    UNIDADES DE 29m² A 70m² <br>
    ANO: 2023
    
    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

les_amis.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/les amis.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "LES AMIS"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: LES AMIS <br>
    LOCALIZAÇÃO: NATAL - RN. <br>
    UNIDADES DE 60m² A 99m² <br>
    APARTAMENTOS DE 1 A 3 QUARTOS <br>
    1 A 2 VAGAS <br>
    ANO: 2022

    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

miraflor.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/miraflor.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "MIRAFLOR"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: MIRAFLOR <br>
    LOCALIZAÇÃO: FORTALEZA - CE. <br>
    UNIDADES DE 53m² A 65m² <br>
    APARTAMENTOS DE 2 E 3 QUARTOS COM OPÇÕES DE VARANDA E GARDEN. <br>
    ANO: 2024
  
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

mirante_ruy_carneiro.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/mirante ruy carneiro.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "MIRANTE RUY CARNEIRO"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: MIRANTE RUY CARNEIRO <br>
    LOCALIZAÇÃO: JOÃO PESSOA - PB. <br>
    UNIDADES DE 96m² A 122m² <br>
    APARTAMENTOS DE 3 A 4 QUARTOS COM 2 VAGAS. <br>
    ANO: 2023

    
    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

poeme.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/poeme.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "POÉME"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX <br>
    PROJETO: POÉME <br>
    LOCALIZAÇÃO: SALVADOR – BA. <br>
    UNIDADES DE 173m² E 203m² <br>
    72 APARTAMENTOS  <br>
    2 UNIDADES POR ANDAR COM 4 SUÍTES E 4 VAGAS. <br>
    ANO: 2023
    

    
    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}




 // Seleciona todos os itens de menu com a classe 'menu-navegacao'
 const menuItems = document.querySelectorAll('.menu-navegacao');
 const overlay = document.getElementById('overlay');
 const menu = document.getElementById('menu');


 // Adiciona um ouvinte de evento de clique a cada item do menu
 menuItems.forEach(item => {
     item.addEventListener('click', () => {
         // Remove a classe 'active' do overlay para escondê-lo
         overlay.style.display = 'none';
         menu.style.display = "none"
       
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
           body.style.overflow = "hidden"
           
       }, 10);
   });

   overlay.addEventListener('click', function() {
       
       menu.style.opacity = '0';
       overlay.style.display = 'none';
     
       body.style.overflow = "auto"
       setTimeout(() => {
           menu.style.display = "none"
           
       }, 300);
   });
});

