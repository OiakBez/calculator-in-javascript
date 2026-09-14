const botoes  = document.querySelectorAll("button");
const visor = document.querySelector(".visor");

let num1 = "";
let num2 = "";
let operacao = "";
let resultado = false;

const operadores = ["+", "-", "x", "/"];

function reset() {
    num1 = "";
    num2 = "";
    operacao = "";
    resultado = false;
    visor.textContent = "0";
}

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

        if (botao.textContent === "C") {
            reset();
        
        } else if (botao.textContent === "+/-"){
            if (operacao === "") {

                if (num1.startsWith("-")) {
                    num1 = num1.slice(1);
                } else {
                    num1 = "-" + num1;
                }
            } else {
            
                if (num2.startsWith("-")) {
                    num2 = num2.slice(1);
                } else {
                    num2 = "-" + num2;
                }
            }

        } else if(botao.textContent === ".") {
            if (operacao === "") {

                if (!num1.includes(".")) {
                    num1 = num1 + ".";
                }
            } else {

                if (!num2.includes(".")) {
                    num2 = num2 + ".";
                }
            }
        } else if (operadores.includes(botao.textContent)) {

            if (resultado === true) {
                num1 = visor.textContent;
                num2 = "";
                operacao = botao.textContent;
                resultado = false
            } else {
                operacao = botao.textContent;
            }

        } else if (botao.textContent === "=") {

            if (num1 !== "" && num2 !== "" && operacao !== "") {
                visor.textContent = calcular(num1, num2, operacao);
                resultado = true;
            } 
    
        } else {

            if (resultado === true) {
                num1 = botao.textContent;
                num2 = "";
                operacao = "";
                resultado = false;

            } else if (operacao === "") {
                num1 = num1 + botao.textContent;

            } else {
                num2 = num2 + botao.textContent;
            }
        }

        if (botao.textContent !== "=" && botao.textContent !== "C") {

            visor.textContent = num1 + operacao + num2;

        }
    });
});

console.log(botoes);