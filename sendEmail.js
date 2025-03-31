function envoyerMail() {
    // Récupérer les valeurs du formulaire
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var typeMessage = document.getElementById("type-message").value;
    var message = document.getElementById("message").value;
    
    // Vérifier que tous les champs sont remplis
    if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Construire le sujet et le corps du mail
    var sujet = encodeURIComponent("Nouveau message : " + typeMessage);
    var corpsMessage = encodeURIComponent(
        "Nom: " + nom + "\n" +
        "Email: " + email + "\n" +
        "Type de message: " + typeMessage + "\n\n" +
        "Message:\n" + message
    );

    // Ouvrir Gmail avec les champs remplis
    var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=chriskellydoffou@gmail.com&sujet=" + sujet + "&Message=" + corpsMessage;
    window.open(mailtoLink, "_blank");
}