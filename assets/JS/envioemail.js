// Inicialize o EmailJS com seu User ID
emailjs.init("LmDZ7cT28-ulcH6dG"); // Substitua pelo seu User ID

document.querySelector('.contato_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Envia o formulário usando o EmailJS
    emailjs.sendForm('service_1qspg49', 'template_3plko7c', this)
        .then(function(response) {
            console.log('Sucesso:', response);
            Swal.fire({
                title: "Mensagem Enviada Com Sucesso",
                icon: "success"
              });
              document.querySelector('.contato_form').reset();
        }, function(error) {
            console.log('Erro:', error);
            Swal.fire({
                title: "Ocorreu um erro ao enviar a mensagem",
                icon: "error"
              });
        });
});
