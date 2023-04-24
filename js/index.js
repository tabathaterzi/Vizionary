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


const colorPicker = document.querySelector('#color-picker');
const colorBoxes = document.querySelectorAll('.color-box');

colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;

  // Afficher les boîtes de couleur correspondantes
  colorBoxes.forEach(box => {
    if (box.dataset.color === selectedColor) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
});
