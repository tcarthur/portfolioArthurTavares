function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}

document.getElementsByClassName("tab")[0].click();

document.getElementById('enviar').addEventListener('click', function() {
    // Captura dos dados do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;

    // Mas para este exemplo, vamos apenas mostrar os dados no console
    console.log("Nome: " + nome);
    console.log("Telefone: " + telefone);
    console.log("Mensagem: " + mensagem);

    // Exemplo de mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpando o formulário após o envio
    document.getElementById('meuFormulario').reset();
});