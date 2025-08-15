let mode = "addition";
let num1, num2, correctAnswer;
let score = 0;

function newProblem() {
    if (mode === "multiplication") {
        num1 = Math.floor(Math.random() * 12) + 1;
        num2 = Math.floor(Math.random() * 12) + 1;
        correctAnswer = num1 * num2;
    }
    else if (mode === "division") {
        num2 = Math.floor(Math.random() * 12) + 1;
        correctAnswer = Math.floor(Math.random() * 12) + 1;
        num1 = num2 * correctAnswer; // ensures clean division
    }
    else {
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        if (mode === "subtraction" && num2 > num1) {
            [num1, num2] = [num2, num1]; // avoid negative answers
        }
        correctAnswer = mode === "addition" ? num1 + num2 : num1 - num2;
    }

    let symbol = {
        addition: "+",
        subtraction: "-",
        multiplication: "×",
        division: "÷"
    }[mode];

    document.getElementById("problem").innerText = `${num1} ${symbol} ${num2} = ?`;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("answer").value);
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "✅ Correct!";
        document.getElementById("feedback").style.color = "green";
        score++;
    } else {
        document.getElementById("feedback").innerText = `❌ Oops! The answer was ${correctAnswer}`;
        document.getElementById("feedback").style.color = "red";
    }
    document.getElementById("score").innerText = score;
    setTimeout(newProblem, 1000);
}

function setMode(newMode) {
    mode = newMode;
    newProblem();
}

// Start with a problem
newProblem();
