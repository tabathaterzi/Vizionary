

let GlobalModelId = ""
// Obtén referencias a los elementos del DOM
const buttons = document.querySelectorAll('.menu-btn');
const boxes = document.querySelectorAll('.box');
const formatoElegidoContainer = document.getElementById("visualisation-container");
const fileInput = document.querySelector(".file-input");
const chooseImgBtn = document.querySelector(".choose-img");

// Agrega los event listeners a los botones del menú
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;
    boxes.forEach((box) => {
      if (box.getAttribute('id') === target) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
    });
    buttons.forEach((btn) => {
      if (btn === button) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  });
});








// Función para mostrar un modelo seleccionado
function showModel(modelId) {

  let modele = GlobalModelId 
  
  if(modelId){
    modele = modelId
    GlobalModelId = modelId
  }
  console.log(modelId,GlobalModelId,modele)
  // Obtén una referencia al modelo seleccionado
  var modeloSeleccionado = document.getElementById(modele);

  // Elimina cualquier modelo clonado previo en el contenedor del formato elegido
  while (formatoElegidoContainer.firstChild) {
    formatoElegidoContainer.firstChild.remove();
  }

  // Clona el modelo seleccionado y agrega la clase "modelo-clonado" para estilizarlo
  var modeloClonado = modeloSeleccionado.cloneNode(true);
  modeloClonado.classList.add("modelo-clonado");

  // Agrega el modelo clonado al contenedor del formato elegido
  formatoElegidoContainer.appendChild(modeloClonado);
}


function showFormat(formatId) {
  // Obtén una referencia al formato seleccionado
  var formatoSeleccionado = document.getElementById(formatId);

  // Elimina cualquier formato clonado previo en el contenedor del formato elegido
  while (formatoElegidoContainer.firstChild) {
    formatoElegidoContainer.firstChild.remove();
  }

  // Clona el formato seleccionado y agrega la clase "formato-clonado" para estilizarlo
  var formatoClonado = formatoSeleccionado.cloneNode(true);
  formatoClonado.classList.add("formato-clonado");

  // Agrega el formato clonado al contenedor del formato elegido
  formatoElegidoContainer.appendChild(formatoClonado);
}



function afficher () {
  var titre = document.getElementById("input_titre").value;
  console.log("Le titre est : " + titre);
}


// Récupérer l'élément input_titre
const inputTitre = document.getElementById('input_titre');

// Ajouter un écouteur d'événements onchange
inputTitre.addEventListener('keyup', function(event) {
  // Récupérer la valeur du titre saisi par l'utilisateur
  const nouveauTitre = event.target.value;

  // Mettre à jour le titre dans la visualisation
  const titreModele = document.querySelector('.titre_modèle1');
  titreModele.textContent = nouveauTitre;

  showModel()
});





// Récupérer l'élément input_image
const inputImage = document.getElementById('input_image');

// Ajouter un écouteur d'événements change
inputImage.addEventListener('change', function(event) {
  // Vérifier si un fichier a été sélectionné
  if (event.target.files && event.target.files[0]) {
    const fichier = event.target.files[0];
    
    // Créer un objet URL pour le fichier sélectionné
    const urlImage = URL.createObjectURL(fichier);

    // Mettre à jour la source de l'image dans la visualisation
    const imageModele = document.getElementById('image_modele');
    imageModele.src = urlImage;
  }

  showModel()

});


// Récupérer l'élément input_texte
const inputTexte = document.getElementById('input_texte');

// Ajouter un écouteur d'événements keyup à l'élément input_texte
inputTexte.addEventListener('keyup', function(event) {
  // Récupérer la valeur du texte saisi par l'utilisateur
  const nouveauTexte = event.target.value;

  // Mettre à jour le texte dans la visualisation
  const texteModele = document.querySelector('.text_modèle1');
  texteModele.textContent = nouveauTexte;

  showModel();
});




// Récupérer l'élément input_couleur_titre
const inputCouleurTitre = document.getElementById('input_couleur_titre');

// Ajouter un écouteur d'événements change à l'élément input_couleur_titre
inputCouleurTitre.addEventListener('change', function(event) {
  // Récupérer la valeur de la couleur sélectionnée
  const nouvelleCouleurTitre = event.target.value;

  // Mettre à jour la couleur des titres dans la visualisation
  const titresModele = document.querySelectorAll('.titre_modèle1');
  titresModele.forEach(function(titre) {
    titre.style.color = nouvelleCouleurTitre;
  });

  showModel();
});

// Récupérer l'élément input_couleur_texte
const inputCouleurTexte = document.getElementById('input_couleur_texte');

// Ajouter un écouteur d'événements change à l'élément input_couleur_texte
inputCouleurTexte.addEventListener('change', function(event) {
  // Récupérer la valeur de la couleur sélectionnée
  const nouvelleCouleurTexte = event.target.value;

  // Mettre à jour la couleur des textes dans la visualisation
  const textesModele = document.querySelectorAll('.text_modèle1');
  textesModele.forEach(function(texte) {
    texte.style.color = nouvelleCouleurTexte;
  });

  showModel();
});

// Récupérer l'élément input_couleur_fond
const inputCouleurFond = document.getElementById('input_couleur_fond');

// Ajouter un écouteur d'événements onchange
inputCouleurFond.addEventListener('change', function(event) {
  // Récupérer la valeur de la couleur de fond sélectionnée par l'utilisateur
  const nouvelleCouleurFond = event.target.value;

  // Mettre à jour la couleur de fond dans la visualisation
  const modele = document.querySelector('.colonne-contenu');
  modele.style.backgroundColor = nouvelleCouleurFond;

  showModel();
});




document.getElementById('btn_importer_police_titres').addEventListener('click', function() {
  importerPolice('input_police_titres', 'PolicesTitres', '.titre_modèle1');
});

document.getElementById('btn_importer_police_textes').addEventListener('click', function() {
  importerPolice('input_police_textes', 'PolicesTextes', '.text_modèle1');
});

function importerPolice(inputId, policeFamily, classeCSS) {
  const inputPolice = document.getElementById(inputId);
  
  // Vérifier si un fichier de police est sélectionné
  if (inputPolice.files.length > 0) {
    const fichierPolice = inputPolice.files[0];
    const reader = new FileReader();
    
    // Lorsque le fichier de police est chargé
    reader.onload = function() {
      const stylePolice = document.createElement('style');
      stylePolice.textContent = `
        @font-face {
          font-family: '${policeFamily}';
          src: url(${reader.result}) format('woff2');
        }
      `;
      
      // Ajouter le style de police au document
      document.head.appendChild(stylePolice);
      
      // Charger la police avec Web Font Loader
      const wf = document.createElement('script');
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
      wf.onload = function() {
        WebFont.load({
          custom: {
            families: [policeFamily]
          },
          active: function() {
            // La police est chargée avec succès
            // Mettre à jour les styles des éléments correspondants
            const elements = document.querySelectorAll(classeCSS);
            for (const element of elements) {
              element.style.fontFamily = `${policeFamily}, sans-serif`;
            }
          }
        });
      };
      
      // Ajouter le script Web Font Loader au document
      document.head.appendChild(wf);
    };
    
    // Lire le fichier de police en tant que Data URL
    reader.readAsDataURL(fichierPolice);

    showModel();

  }
}
