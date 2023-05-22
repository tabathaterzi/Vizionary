

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

