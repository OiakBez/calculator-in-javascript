const botoes  = document.querySelectorAll("button");
const visor = document.querySelector(".visor");

let num1 = "";
let num2 = "";
let operacao = "";
let resultado = false;

const operadores = ["+", "-", "x", "/"];

function calcular(num1, num2, operacao) {

    switch(operacao)  {

        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "x":
            return Number(num1) * Number(num2);
        case "/":
            if (Number(num2) === 0) {
                return "Error";
            }
            return Number(num1) / Number(num2);
        default:
            return "Error";
    }
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {

        if (operadores.includes(botao.textContent)) {
            operacao = botao.textContent;

        } else if (botao.textContent === "=") {

            visor.textContent = calcular(num1, num2, operacao);

            resultado = true;
        } else {

            if (operacao === "") {
                num1 = num1 + botao.textContent;

            } else {
                num2 = num2 + botao.textContent;
            }
        }

        if (botao.textContent !== "=") {

            visor.textContent = num1 + operacao + num2;
            
        }
    });
});

console.log(botoes);