function afficherProjet() {
    const accueilProjet = document.querySelector(".accueil-projet");
    const projet = [
      {
        src: "video/2.mp4",
        texte: "Vidéo 1",
        paragraphe: "Description de la vidéo 1.",
      },
      {
        src: "video/abc.mp4",
        texte: "Vidéo 2",
        paragraphe: "Description de la vidéo 2.",
      },
      // Ajoutez d'autres projets ici
    ];
  
    for (let i = 0; i < projet.length; i++) { // Correction de la boucle
      let cadre = document.createElement("div");
      cadre.classList.add("cadre");
  
      let cadre1 = document.createElement("div");
      cadre1.classList.add("cadre1");
  
      let video = document.createElement("video");
      video.classList.add("video"); // Correction de la classe
      video.src = projet[i].src;
      video.alt = projet[i].texte;
      video.style.height = "300px";
      video.autoplay = true;
      video.muted = true; 
      video.load();
      video.controls = true; // Ajout des contrôles de la vidéo
  
      let cadre2 = document.createElement("div");
      cadre2.classList.add("cadre2");
  
      let paragraphe = document.createElement("p");
      paragraphe.classList.add("paragraphe");
      paragraphe.innerText = projet[i].paragraphe;
  
      cadre1.appendChild(video);
      cadre2.appendChild(paragraphe);
  
      cadre.appendChild(cadre1);
      cadre.appendChild(cadre2);
      accueilProjet.appendChild(cadre);

    
  
    
    }
  }
  
 
  window.onload = afficherProjet;