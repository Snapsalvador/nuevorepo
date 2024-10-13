let texto;
 function sendMessage() {
    const texto = document.getElementById("chatbot-input");
    const contenido = texto.value;
    let chatMensaje = document.getElementById("chatbot-messages");
    chatMensaje.innerHTML = `<h2>${contenido} </h2>`;
 }
