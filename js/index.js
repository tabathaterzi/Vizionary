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



  const formats = document.querySelectorAll('.format');
  const formatChoisi = document.querySelector('.format-choisi');
  
  formats.forEach(format => {
    format.addEventListener('click', () => {
      const width = format.getAttribute('data-width');
      const height = format.getAttribute('data-height');
      formatChoisi.textContent = `${width}:${height}`;
    });
  });
  