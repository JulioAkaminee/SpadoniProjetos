
var modal = document.getElementById("myModal");

// Obter o botão que abre o modal
var btn = document.getElementById("sunlight");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

var body = document.body;


// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "flex";

}



// Quando o usuário clica fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto"
    }
}



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
    description_modal.innerHTML = ` CONSTRUTORA: MM CORTÊS <br>
    PROJETO: SUNLIGHT <br>
    LOCALIZAÇÃO: CARAGUATATUBA – SP. <br>
    DISPOSIÇÃO DAS PLANTAS ENTRE 88m² E 119m².
    ANO: 2023 `; // Usa <br> para quebras de linha no HTML

    modal.style.display = "flex"; // Exibe o modal
}



view_residence.onclick = function() {
    body.style.overflow = "hidden"
    image_modal.src = "assets/images/projetos/VIEW RESIDENCE .svg"; // Define a URL da imagem
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
    image_modal.src = "assets/images/projetos/MAISON'DOR.svg"; // Define a URL da imagem
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
    image_modal.src = "assets/images/projetos/SERRA DE BOTUCATU .svg"; // Define a URL da imagem
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
    image_modal.src = "assets/images/projetos/ICON GOLF RESIDENCE .svg"; // Define a URL da imagem
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
    image_modal.src = "assets/images/projetos/ARBORÊ 1.svg"; // Define a URL da imagem
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
