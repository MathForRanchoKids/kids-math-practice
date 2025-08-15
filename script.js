let currentAnswer = 0;
let currentOperation = '+';

function newProblem(operation) {
    currentOperation = operation;

    let num1 = Math.floor(Math.random() * 90) + 10; // 2-digit numbers
    let num2 = Math.floor(Math.random() * 90) + 10;

    let symbol;
    switch (operation) {
        case 'add':
            symbol = '+';
            currentAnswer = num1 + num2;
            break;
        case 'subtract':
            symbol = '−';
            if (num2 > num1) [num1, num2] = [num2, num1];
            currentAnswer = num1 - num2;
            break;
        case 'multiply':
            symbol = '×';
            num1 = Math.floor(Math.random() * 12) + 1; // smaller numbers
            num2 = Math.floor(Math.random() * 12) + 1;
            currentAnswer = num1 * num2;
            break;
        case 'divide':
            symbol = '÷';
            num2 = Math.floor(Math.random() * 12) + 1;
            num1 = num2 * (Math.floor(Math.random() * 12) + 1);
            currentAnswer = num1 / num2;
            break;
    }

    document.getElementById("problem").innerHTML = `
        <div class="problem-vertical">
            ${num1}<br>
            ${symbol} ${num2}
            <hr>
        </div>
    `;

    document.getElementById("answer").value = '';
    document.getElementById("feedback").textContent = '';
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById("answer").value);
    if (isNaN(userAnswer)) {
        document.getElementById("feedback").textContent = "Please enter a number!";
        document.getElementById("feedback").style.color = "red";
        return;
    }
    if (userAnswer === currentAnswer) {
        document.getElementById("feedback").textContent = "✅ Correct!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = `❌ Try again. Answer is ${currentAnswer}`;
        document.getElementById("feedback").style.color = "red";
    }
}
