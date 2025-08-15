<script>
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

        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#f093fb', '#feca57', '#ff9ff3', '#54a0ff'];
            const confettiCount = 100;
            
            for (let i = 0; i < confettiCount; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDelay = Math.random() * 2 + 's';
                    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    
                    // Random shapes
                    if (Math.random() > 0.5) {
                        confetti.style.borderRadius = '50%';
                    }
                    
                    document.body.appendChild(confetti);
                    
                    // Remove confetti after animation
                    setTimeout(() => {
                        if (confetti.parentNode) {
                            confetti.parentNode.removeChild(confetti);
                        }
                    }, 4000);
                }, i * 20);
            }
        }

        function showMilestoneMessage(score) {
            const message = document.createElement('div');
            message.className = 'milestone-message';
            message.textContent = `🎉 Amazing! ${score} Points! 🎉`;
            document.body.appendChild(message);
            
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 2000);
        }

        function checkAnswer() {
            const userAnswer = parseFloat(document.getElementById("answer").value);
            if (userAnswer === correctAnswer) {
                document.getElementById("feedback").innerText = "✅ Correct!";
                document.getElementById("feedback").style.color = "green";
                score++;
                
                // Check if score is a multiple of 10
                if (score % 10 === 0 && score > 0) {
                    createConfetti();
                    showMilestoneMessage(score);
                }
                
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
    </script>
