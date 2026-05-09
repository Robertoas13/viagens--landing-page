function capturarContato() {
    // Primeiro aviso
    alert("Prepare-se para viver momentos inesquecíveis!");
    
    // Pede o dado ao usuário
    let contato = prompt("Para que nossos consultores entrem em contato, por favor digite seu E-mail ou Celular:");

    // Verifica se o usuário digitou algo
    if (contato !== null && contato !== "") {
        alert("Obrigado! Recebemos seu contato: " + contato + ". Em breve falaremos com você.");
        console.log("Lead capturado: " + contato);
    } else {
        alert("Não se preocupe, você pode nos enviar seus dados quando estiver pronto!");
    }
}

// Efeito na Navbar ao rolar
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.style.background = '#000';
    } else {
        nav.style.background = '#1a1a1a';
    }
});