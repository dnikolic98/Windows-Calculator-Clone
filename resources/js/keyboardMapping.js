document.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 96 || event.keyCode === 48) {
    document.getElementById("button0").click();
  }
  if (event.keyCode === 97 || event.keyCode === 49) {
    document.getElementById("button1").click();
  }
  if (event.keyCode === 98 || event.keyCode === 50) {
    document.getElementById("button2").click();
  }
  if (event.keyCode === 99 || event.keyCode === 51) {
    document.getElementById("button3").click();
  }
  if (event.keyCode === 100 || event.keyCode === 52) {
    document.getElementById("button4").click();
  }
  if (event.keyCode === 101 || event.keyCode === 53) {
    document.getElementById("button5").click();
  }
  if (event.keyCode === 102 || event.keyCode === 54) {
    document.getElementById("button6").click();
  }
  if (event.keyCode === 103 || event.keyCode === 55) {
    document.getElementById("button7").click();
  }
  if (event.keyCode === 104 || event.keyCode === 56) {
    document.getElementById("button8").click();
  }
  if (event.keyCode === 105 || event.keyCode === 57) {
    document.getElementById("button9").click();
  }
  if (event.keyCode === 8) {
    document.getElementById("buttonBks").click();
  }
  if (event.keyCode === 13) {
    document.getElementById("buttonEq").click();
  }
  if (event.keyCode === 107) {
    document.getElementById("button+").click();
  }
  if (event.keyCode === 106) {
    document.getElementById("button*").click();
  }
  if (event.keyCode === 110 || event.keyCode === 188 || event.keyCode === 190) {
    document.getElementById("buttonDec").click();
  }
  if (event.keyCode === 109) {
    document.getElementById("button-").click();
  }
  if (event.keyCode === 111) {
    document.getElementById("button/").click();
  }
});
