let currentOperation = '+';
let num1, num2;

function setOperation(op) {
  currentOperation = op;
  generateProblem();
}

function generateProblem() {
  num1 = Math.floor(Math.random() * 50) + 1;
  num2 = Math.floor(Math.random() * 50) + 1;

  if (currentOperation === '-' && num2 > num1) {
    [num1, num2] = [num2, num1];
  }

  if (currentOperation === '/') {
    num2 = Math.floor(Math.random() * 12) + 1;
    num1 = num2 * (Math.floor(Math.random() * 12) + 1);
  }

  document.getElementById('num1').textContent = num1;
  document.getElementById('num2').textContent = num2;
  document.getElementById('operation').textContent = currentOperation;
  document.getElementById('answer').value = '';
  document.getElementById('result').textContent = '';
}

function checkAnswer() {
  let userAnswer = Number(document.getElementById('answer').value);
  let correctAnswer;

  switch (currentOperation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    case '/':
      correctAnswer = num1 / num2;
      break;
  }

  if (userAnswer === correctAnswer) {
    document.getElementById('result').textContent = '✅ Correct!';
  } else {
    document.getElementById('result').textContent = `❌ Wrong! The answer is ${correctAnswer}`;
  }

  generateProblem();
}

generateProblem();
