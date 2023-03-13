  function isFibonacci(num) {
    let a = 0;
    let b = 1;
  
    while (b < num) {
      let c = b;
      b = a + b;
      a = c;
    }
  
    return b === num;  
}
  
  const userInput = prompt("Insira um número para verificar se pertence à sequência de Fibonacci:");
  
  if (isFibonacci(parseInt(userInput))) {
    alert(`O número ${userInput} pertence à sequência de Fibonacci!`);
  } else {
    alert(`O número ${userInput} não pertence à sequência de Fibonacci.`);
  }
  
  
  
  