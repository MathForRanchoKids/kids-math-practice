let mode = "addition";
let num1, num2, correctAnswer;
let score = 0;

function newProblem() {
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;

    if (mode === "subtraction" && num2 > num1) {
        [num1, num2] = [num2, num1]; // swap to avoid negative results
    }

    correctAnswer = mode === "addition" ? num1 + num2 : num1 - num2;
    document.getElementById("problem").innerText = `${num1} ${mode === "addition" ? "+" : "-"} ${num2} = ?`;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
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
