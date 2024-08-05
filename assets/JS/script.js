// Obter o modal
var modal = document.getElementById("myModal");

// Obter o botão que abre o modal
var btn = document.getElementById("sunlight");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "flex";
    modal.style.justifyContent = "center"
    modal.style.alignItems = "center"
   
}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto"
}

// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto"
    }
}

var body = document.getElementsByTagName("body")[0];


//PARTE MANIPULAÇÃO DO MODAL


var image_modal = document.getElementById("image_modal");
var text_title_modal = document.getElementById("text_title_modal"); // Corrigido para text_title_modal
var description_modal = document.getElementById("description_modal"); // Corrigido para description_modal

var sunlight = document.getElementById("sunlight")
var view_residence = document.getElementById("view_residence")
var maisondor = document.getElementById("maisondor")
var serra_de_botucatu = document.getElementById("serra_de_botucatu")
var icon_golf_residence = document.getElementById("icon_golf_residence")
var arbore = document.getElementById("arbore")
var beach_class_meireles = document.getElementById("beach_class_meireles")
var casa_boris = document.getElementById("casa_boris")
var casa_moser = document.getElementById("casa_moser")
var concept_jatiuca = document.getElementById("concept_jatiuca")
var concept_pina = document.getElementById("concept_pina")
var les_amis = document.getElementById("les_amis")
var miraflor = document.getElementById("miraflor")
var mirante_ruy_carneiro = document.getElementById("mirante_ruy_carneiro")
var poeme = document.getElementById("poeme")


sunlight.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/SUNLIGHT.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "SUNLIGHT"; // Usa innerText para texto simples
    description_modal.innerHTML = ` CONSTRUTORA: MM CORTÊS 
    PROJETO: SUNLIGHT
    LOCALIZAÇÃO: CARAGUATATUBA – SP.
    DISPOSIÇÃO DAS PLANTAS ENTRE 88m² E 119m².
    ANO: 2023 `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}



view_residence.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/VIEW RESIDENCE .svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "VIEW RESIDENCE"; // Usa innerText para texto simples
    description_modal.innerHTML = `
        CONSTRUTORA: ALEAPAR
        PROJETO: VIEW RESIDENCE
        LOCALIZAÇÃO: PIRACICABA – SP.
        TOTAL DE 72 UNIDADES E 190 VAGAS DE GARAGEM.
        APARTAMENTOS: 140m²
        TERRENO: 2.654,40m²
        CONSTRUÇÃO: 18.264,97m²
        ANO: 2023
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

maisondor.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/MAISON'DOR.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "MAISON D'OR"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: AMISTÁ
    PROJETO: MAISON D’OR
    LOCALIZAÇÃO: PIRACICABA – SP.
    2 APARTAMENTOS POR ANDAR, COM 289,50m² E HALL PRIVATIVO
    24 ANDARES + ROOFTOP
    2 UNIDADES GARDEN COM 412m²
    4 OU 5 VAGAS + DEPÓSITO INDIVIDUAL, VAGAS EXTRAS DE GARAGEM E VAGAS DE MOTOS
    TERRENO: 3.294m²
    ANO: 2023
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}


serra_de_botucatu.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/SERRA DE BOTUCATU .svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "SERRA DE BOTUCATU"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: EZTEC
    PROJETO: SERRA DE BOTUCATU
    LOCALIZAÇÃO: TATUAPÉ – SP.
    101 UNIDADES RESIDENCIAIS + 22 UNIDADES NÃO RESIDENCIAIS + 8 LOJAS
    4 UNIDADES POR ANDAR DE 3 E 4 DORMITÓRIOS COM 105m² E 140m²
    2 VAGAS POR APARTAMENTO
    TERRENO: 4.611,16m²
    ANO: 2023

    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

icon_golf_residence.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/ICON GOLF RESIDENCE .svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "ICON GOLF RESIDENCE"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: PATRIMAR
    PROJETO: ICON GOLF RESIDENCE
    LOCALIZAÇÃO: BARRA DA TIJUCA – RJ.
    2 QUARTOS E 3 SUÍTES
    1 A 3 VAGAS 
    APARTAMENTOS: 78m² A 128m²
    TERRENO: 12.788,78m²
    ANO: 2023
    

    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

arbore.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/ARBORÊ 1.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "ARBORÊ"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: ARBORÊ
    LOCALIZAÇÃO: FORTALEZA - CE.
    APARTAMENTO DE 2 OU 3 QUARTOS COM OPÇÕES DE GARDEN
    APARTAMENTOS DE 53m² E 65m²
    ANO: 2022
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

beach_class_meireles.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/beach class.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "BEACH CLASS MEIRELES"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: BEACH CLASS MEIRELES
    LOCALIZAÇÃO: FORTALEZA - CE.
    UNIDADES DE 26m² A 65m²
    APARTAMENTOS DE 1 A 2 QUARTOS
    ANO: 2022
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}



casa_boris.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/casa boris.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "CASA BORIS"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: CASA BORIS
    LOCALIZAÇÃO: FORTALEZA - CE.
    CONJUNTO DE 2 TORRES, SENDO 2 APARTAMENTOS POR ANDAR
    APARTAMENTOS DE 160m² E 200m²
    ANO: 2023
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

casa_moser.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/casa moser.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "CASA MOSER"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: CASA MOSER
    LOCALIZAÇÃO: RECIFE - PE.
    UNIDADES DE 37m² A 65m²
    ANO: 2023
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

concept_jatiuca.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/concept jatiuca.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "CONCEPT JATIUCA"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: CONCEPT JATIUCA
    LOCALIZAÇÃO: MACEIÓ – AL.
    UNIDADES DE 25m² A 62m²
    ANO: 2023
    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

concept_pina.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/concept pina.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "CONCEPT PINA"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: CONCEPT PINA
    LOCALIZAÇÃO: RECIFE - PE.
    UNIDADES DE 29m² A 70m²
    ANO: 2023
    
    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

les_amis.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/les amis.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "LES AMIS"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: LES AMIS
    LOCALIZAÇÃO: NATAL - RN.
    UNIDADES DE 60m² A 99m²
    APARTAMENTOS DE 1 A 3 QUARTOS
    1 A 2 VAGAS
    ANO: 2022

    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

miraflor.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/miraflor.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "MIRAFLOR"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: MIRAFLOR
    LOCALIZAÇÃO: FORTALEZA - CE.
    UNIDADES DE 53m² A 65m²
    APARTAMENTOS DE 2 E 3 QUARTOS COM OPÇÕES DE VARANDA E GARDEN.
    ANO: 2024
  
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

mirante_ruy_carneiro.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/mirante ruy carneiro.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "MIRANTE RUY CARNEIRO"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: MIRANTE RUY CARNEIRO
    LOCALIZAÇÃO: JOÃO PESSOA - PB.
    UNIDADES DE 96m² A 122m²
    APARTAMENTOS DE 3 A 4 QUARTOS COM 2 VAGAS.
    ANO: 2023

    
    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}

poeme.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "../images/projetos/poeme.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "POÉME"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: POÉME
    LOCALIZAÇÃO: SALVADOR – BA.
    UNIDADES DE 173m² E 203m²
    72 APARTAMENTOS 
    2 UNIDADES POR ANDAR COM 4 SUÍTES E 4 VAGAS.
    ANO: 2023
    

    
    
    
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}



