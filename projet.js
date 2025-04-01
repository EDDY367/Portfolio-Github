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
      
    ];
  
    for (let i = 0; i < projet.length; i++) { 
      let cadre = document.createElement("div");
      cadre.classList.add("cadre");
  
      let cadre1 = document.createElement("div");
      cadre1.classList.add("cadre1");
  
      let video = document.createElement("video");
      video.classList.add("video"); 
      video.src = projet[i].src;
      video.alt = projet[i].texte;
      video.style.height = "300px";
      video.autoplay = true;
      video.muted = true; 
      video.load();
      video.controls = true; 
  
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

  function toggleMenu() {
    var nav = document.querySelector(".nav-link");
    nav.classList.toggle("active");
}


function closeMenu() {
    document.querySelector(".nav-links").classList.remove("active");
}



  
 
  window.onload = afficherProjet;