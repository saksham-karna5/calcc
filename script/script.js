const display = document.getElementById("display");

function Doonclick(input) {
  display.value += input;
}

function cleardisp() {
  display.value = "";
}

function calculate() {
  try{
    display.value = eval(display.value);

  } catch(Error) {
    display.value = "ERROR";
  }
}