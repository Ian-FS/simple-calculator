const keys = document.querySelectorAll("button");
const input = document.querySelector("input");
let operatorKey = "";

let resultado = 0;
let typeOperator = "";
let amountValue;

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    const element = event.target.innerHTML;

    switch (element) {
      case "1":
        input.value += 1;
        break;
      case "2":
        input.value += 2;
        break;
      case "3":
        input.value += 3;
        break;
      case "4":
        input.value += 4;
        break;
      case "5":
        input.value += 5;
        break;
      case "6":
        input.value += 6;
        break;
      case "7":
        input.value += 7;
        break;
      case "8":
        input.value += 8;
        break;
      case "9":
        input.value += 9;
        break;
      case "0":
        input.value += 0;
        break;
      case ".":
        input.value += element;
        break;
      case "+":
        if (typeOperator != "" || input.value == "") {
          break;
        }
        if (resultado === 0) {
          resultado = parseFloat(input.value);
        } else {
          resultado -= parseFloat(input.value);
        }
        event.target.style.backgroundColor = "#73FA69";
        input.value = "";
        typeOperator = "increase";
        console.log(resultado);
        break;
      case "-":
        if (typeOperator != "" || input.value == "") {
          break;
        }
        if (resultado === 0) {
          resultado = parseFloat(input.value);
        } else {
          resultado -= parseFloat(input.value);
        }
        event.target.style.backgroundColor = "#73FA69";
        input.value = "";
        typeOperator = "decrease";
        break;
      case "*":
        if (typeOperator != "" || input.value == "") {
          break;
        }
        if (resultado === 0) {
          resultado = parseFloat(input.value);
        } else {
          resultado *= parseFloat(input.value);
        }
        event.target.style.backgroundColor = "#73FA69";
        input.value = "";
        typeOperator = "multiply";
        break;
      case "/":
        if (typeOperator != "" || input.value == "") {
          break;
        }
        if (resultado === 0) {
          resultado = parseFloat(input.value);
        } else {
          resultado /= parseFloat(input.value);
        }
        event.target.style.backgroundColor = "#73FA69";
        input.value = "";
        typeOperator = "divide";
        console.log(resultado);
        break;
      case "C":
        input.value = "";
        resultado = 0;
        if (typeOperator != "") {
          document.getElementById(`${typeOperator}`).style.backgroundColor = "";
        }
        typeOperator = "";
        break;
      case "=":
        switch (typeOperator) {
          case "increase":
            resultado += parseFloat(input.value);
            input.value = resultado;
            resultado = 0;
            document.getElementById(`${typeOperator}`).style.backgroundColor =
              "";
            typeOperator = "";
            break;
          case "decrease":
            resultado -= parseFloat(input.value);
            input.value = resultado;
            resultado = 0;
            document.getElementById(`${typeOperator}`).style.backgroundColor =
              "";
            typeOperator = "";
            break;
          case "multiply":
            resultado *= parseFloat(input.value);
            input.value = resultado;
            resultado = 0;
            document.getElementById(`${typeOperator}`).style.backgroundColor =
              "";
            typeOperator = "";
            break;
          case "divide":
            resultado /= parseFloat(input.value);
            input.value = resultado;
            resultado = 0;
            document.getElementById(`${typeOperator}`).style.backgroundColor =
              "";
            typeOperator = "";
            break;
          default:
            break;
        }
        break;

      default:
        break;
    }
  });
});
