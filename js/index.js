


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

// Event listener para seleccionar una imagen
const chooseImage = () => {
  fileInput.click();
};

fileInput.addEventListener("change", () => {
  const selectedFile = fileInput.files[0];
  // Aquí puedes realizar las acciones necesarias con el archivo seleccionado
});

chooseImgBtn.addEventListener("click", chooseImage);

// Función para mostrar un modelo seleccionado
function showModel(modelId) {
  // Obtén una referencia al modelo seleccionado
  var modeloSeleccionado = document.getElementById(modelId);

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

document.getElementById('format1').addEventListener('click', function() {
  var formatId = this.getAttribute('id');
  showFormat(formatId);
});

// Función para mostrar un modelo seleccionado
function showModel(modelId) {
  // Obtén una referencia al modelo seleccionado
  const modeloSeleccionado = document.getElementById(modelId);

  // Elimina cualquier modelo clonado previo en el contenedor del formato elegido
  while (formatoElegidoContainer.firstChild) {
    formatoElegidoContainer.firstChild.remove();
  }

  // Clona el modelo seleccionado y agrega la clase "modelo-clonado" para estilizarlo
  const modeloClonado = modeloSeleccionado.cloneNode(true);
  modeloClonado.classList.add("modelo-clonado");

  // Agrega el modelo clonado al contenedor del formato elegido
  formatoElegidoContainer.appendChild(modeloClonado);
}



