// Obter o modal
var modal = document.getElementById("myModal");

// Obter o botão que abre o modal
var btn = document.getElementById("sunlight");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
   
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


var image_modal = document.getElementById("image_modal");
var text_title_modal = document.getElementById("text_title_modal"); // Corrigido para text_title_modal
var description_modal = document.getElementById("description_modal");


var sunlight = document.getElementById("sunlight")
var view_residence = document.getElementById("view_residence")
var maisondor = document.getElementById("maisondor")
var serra_de_botucatu = document.getElementById("serra_de_botucatu")
var icon_golf_residence = document.getElementById("icon_golf_residence")
var arbore = document.getElementById("arbore")

sunlight.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "assets/images/projetos/SUNLIGHT.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "SUNLIGHT"; // Usa innerText para texto simples
    description_modal.innerHTML = ` CONSTRUTORA: MM CORTÊS 
    PROJETO: SUNLIGHT
    LOCALIZAÇÃO: CARAGUATATUBA – SP.
    DISPOSIÇÃO DAS PLANTAS ENTRE 88m² E 119m².
    ANO: 2023 `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "block"; // Exibe o modal
}



view_residence.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "assets/images/projetos/VIEW RESIDENCE .svg"; // Define a URL da imagem
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

    modal.style.display = "block"; // Exibe o modal
}

maisondor.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "assets/images/projetos/MAISON'DOR.svg"; // Define a URL da imagem
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

    modal.style.display = "block"; // Exibe o modal
}


serra_de_botucatu.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "assets/images/projetos/SERRA DE BOTUCATU .svg"; // Define a URL da imagem
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

    modal.style.display = "block"; // Exibe o modal
}

icon_golf_residence.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "assets/images/projetos/ICON GOLF RESIDENCE .svg"; // Define a URL da imagem
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

    modal.style.display = "block"; // Exibe o modal
}

arbore.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "assets/images/projetos/ARBORÊ 1.svg"; // Define a URL da imagem
    text_title_modal.innerHTML = "ARBORÊ"; // Usa innerText para texto simples
    description_modal.innerHTML = `
    CONSTRUTORA: MOURA DUBEUX
    PROJETO: ARBORÊ
    LOCALIZAÇÃO: FORTALEZA - CE.
    APARTAMENTO DE 2 OU 3 QUARTOS COM OPÇÕES DE GARDEN
    APARTAMENTOS DE 53m² E 65m²
    ANO: 2022
    
    
    `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "block"; // Exibe o modal
}

