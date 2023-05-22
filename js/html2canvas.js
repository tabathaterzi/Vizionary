// SCRIPT SCREENSHOT //
 function Screenx(){
   console.log("pokemon")
  var canvasPromise = html2canvas(document.querySelector("visualisation-container"), {
    useCORS: true
  });

canvasPromise.then((canvas)=>{
  console.log(canvas)
  document.body.appendChild(canvas)//Affichage du screenshot dans le body

  var dataURL = canvas.toDataURL("image/png");
  console.log(dataURL)

  var img = new Image();
  img.src = dataURL;
  img.download = dataURL;

// Create a link element
var a = document.createElement("a");
a.innerHTML = "DOWNLOAD ton image";
a.target = "_blank";
// Set the href of the link to the data URL of the image
a.href = img.src;
// Set the download attribute of the link
a.download = img.document;

document.body.appendChild(a)// Ajout d'un bouton download de l'image

a.click()

})


 };

 document.querySelector(".btn_telecharger").addEventListener("click",Screenx);