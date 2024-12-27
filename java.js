function changeColors() {
    const colorsArray = [
     "#FF5733" , "#FFC300 " , "#DAF7A6" , "#C70039","#900C3F ",
     "#581845", "#28B463 ","#2E86C1 ", "#F39C12", "#8E44AD",
      "#1ABC9C", "#2ECC71 ", "#E74C3C ", "#3498DB", "#F1C40F"
    ];
    const randomColors = colorsArray[Math.floor(Math.random()*colorsArray.length)];
    document.body.style.backgroundColor = randomColors;
}