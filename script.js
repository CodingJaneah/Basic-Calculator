function addNumber(num) {
  document.getElementById("inputNum").value += num;
}

function addOperator(op) {
  const input = document.getElementById("inputNum");
  if (input.value !== "" && !isNaN(input.value.slice(-1))) {
    input.value += op;
  }
}

function clearInput() {
  document.getElementById("inputNum").value = "";
}

function backspace() {
  const input = document.getElementById("inputNum");
  input.value = input.value.slice(0, -1);
}

function calculate() {
  const input = document.getElementById("inputNum");
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
}
