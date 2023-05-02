const buttons = document.querySelectorAll('.menu-btn');
const boxes = document.querySelectorAll('.box');

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


/*
  const visualisationDiv = document.getElementById('visualisation');
  const formatBtns = document.querySelectorAll('.format-btn');
  
  formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      visualisationDiv.innerHTML = `<img src="./img/Format 16_9.svg" alt="visualisation_format ${btn.dataset.format}" width="100%">`;
    });
  });

*/




  const exportBtn = document.querySelector('.export-btn');
  exportBtn.addEventListener('click', () => {
    // exporter l'image ici
  });



// Récupère la div format-choisi de la box container 2
const formatChoisi = document.querySelector('.box-container_2 .format-choisi');

// Récupère tous les boutons de format
const boutonsFormats = document.querySelectorAll('#formats .format');

// Parcours tous les boutons de format
boutonsFormats.forEach(boutonFormat => {
  // Ecoute l'événement de clic sur chaque bouton de format
  boutonFormat.addEventListener('click', () => {
    // Récupère la largeur et la hauteur du format sélectionné
    const width = boutonFormat.dataset.width;
    const height = boutonFormat.dataset.height;

    // Met à jour le contenu de la div format-choisi avec le format sélectionné
    formatChoisi.innerHTML = `
      <img src="./img/Format ${width}_${height}.svg" alt="" width="100%">
      <h4>${width}:${height}</h4>
    `;
  });
});




const colorPicker = document.querySelector('.color-picker');
const colorInput = colorPicker.querySelector('#color');
const colorOptions = colorPicker.querySelector('#color-options');

colorOptions.addEventListener('change', () => {
  colorInput.value = colorOptions.value;
});



