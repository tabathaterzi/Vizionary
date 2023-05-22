const images = [
        // Ajoutez les chemins vers les autres images ici
      ];
      
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      
      let imagesLoaded = 0;
      
      images.forEach((imagePath) => {
        const img = new Image();
        img.onload = function() {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            drawImages();
          }
        };
        img.src = imagePath;
      });
      
      function drawImages() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        images.forEach((img, index) => {
          ctx.drawImage(img, 0, 0);
        });
      }
      