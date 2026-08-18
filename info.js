let widthP = document.getElementById("widthP");
let heightP = document.getElementById("heightP");
let colorDepth = document.getElementById("colorDepth");
let backBtn = document.getElementById("back");

backBtn.onclick = function () {
  window.location.href = "../index.html";
};
widthP.innerHTML = `Your device width : ${screen.width}`;
heightP.innerHTML = `Your device height : ${screen.height}`;
colorDepth.innerHTML = `Your device pixel depth And color depth : ${screen.pixelDepth}`;
