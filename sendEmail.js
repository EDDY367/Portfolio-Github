function envoyerMail() {

    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var typeMessage = document.getElementById("type-message").value;
    var message = document.getElementById("message").value;
    
  
    if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    var sujet = encodeURIComponent("Nouveau message : " + typeMessage);
    var corpsMessage = encodeURIComponent(
        "Nom: " + nom + "\n" +
        "Email: " + email + "\n" +
        "Type de message: " + typeMessage + "\n\n" +
        "Message:\n" + message
    );

    var mailtoLink = "mailto:chriskellydoffou@gmail.com?subject=" + sujet + "&body=" + corpsMessage;
    window.location.href = mailtoLink;
}