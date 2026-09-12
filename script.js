const botoes  = document.querySelectorAll("button");
const visor = document.querySelector(".visor");

let num1 = "";
let num2 = "";
let operacao = "";

const operadores = ["+", "-", "x", "/", "="];


botoes.forEach((botao) => {
    botao.addEventListener("click", () => {

        if (operadores.includes(botao.textContent)) {
            operacao = botao.textContent;

        } else {
            if (operacao === "") {
                num1 = num1 + botao.textContent;

            } else {
                num2 = num2 + botao.textContent;
            }
        }

        visor.textContent = num1 + operacao + num2;
    });
});

console.log(botoes);