let texto;
 function sendMessage() {
    let texto = document.getElementById("chatbot-input");
    let contenido = texto.value;
    let chatMensaje = document.getElementById("chatbot-messages");
    chatMensaje.innerHTML = `<h2>${contenido} </h2>`;
 }
