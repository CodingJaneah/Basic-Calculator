
function adjustFontSize() {
  const inputNum = document.getElementById('inputNum');
  const length = inputNum.value.length;
  if (length > 20) {
    inputNum.style.fontSize = '25px';
  } else {
    inputNum.style.fontSize = '40px';
  }
  // Always scroll to the end
  inputNum.scrollLeft = inputNum.scrollWidth;
  inputNum.setSelectionRange(inputNum.value.length, inputNum.value.length);
}

function addNumber(num) {
  document.getElementById("inputNum").value += num;
  adjustFontSize();
}

function addOperator(op) {
  const input = document.getElementById("inputNum");
  if (input.value !== "" && !isNaN(input.value.slice(-1))) {
    input.value += op;
    adjustFontSize();
  }
}


function clearInput() {
  document.getElementById("inputNum").value = "";
  adjustFontSize();
}


function backspace() {
  const input = document.getElementById("inputNum");
  input.value = input.value.slice(0, -1);
  adjustFontSize();
}


function calculate() {
  const input = document.getElementById("inputNum");
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
  adjustFontSize();
}

// Also adjust font size when user types directly
const inputNum = document.getElementById('inputNum');
inputNum.addEventListener('input', adjustFontSize);
