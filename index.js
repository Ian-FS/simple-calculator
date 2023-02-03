const keys = document.querySelectorAll("button");
const input = document.querySelector("input");
let resultado = "";
let typeOperator = "";
keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    const element = event.target.innerHTML;
    console.log(element);

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
        resultado = parseFloat(input.value);
        input.value = "";
        typeOperator = "+";
        break;
      case "-":
        resultado = parseFloat(input.value);
        input.value = "";
        typeOperator = "-";
        break;
      case "*":
        resultado = parseFloat(input.value);
        input.value = "";
        typeOperator = "*";
        break;
      case "/":
        resultado = parseFloat(input.value);
        input.value = "";
        typeOperator = "/";
        break;
      case "C":
        input.value = "";
        resultado = "";
        typeOperator = "";
        break;
      case "=":
        switch (typeOperator) {
          case "+":
            input.value = resultado + parseFloat(input.value);
            break;
          case "-":
            input.value = resultado - parseFloat(input.value);
            break;
          case "*":
            input.value = resultado * parseFloat(input.value);
            break;
          case "/":
            input.value = resultado / parseFloat(input.value);
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
