$(document).ready(function() {
    let headerTexts = ["Te enviamos café recién tostado a cualquier lugar de la Península en 24h 🚜","Envío gratis por compra superior a 35€ (solo península) - CUPÓN ENVIOGRATIS "]; 
    let currentIndex = 0;
    let header = $("#header");
  
    setInterval(function() {
      header.text(headerTexts[currentIndex]);
      currentIndex = (currentIndex + 1) % headerTexts.length;
    }, 5000); 
  });