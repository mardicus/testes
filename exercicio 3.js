const userInput = window.prompt("Insira uma string:");
let reversedString = "";

for (let i = userInput.length - 1; i >= 0; i--) {
  reversedString += userInput[i];
}

window.alert(`A string invertida é: ${reversedString}`);