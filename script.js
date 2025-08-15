<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Math Practice</h1>

    <div id="mode-buttons">
        <button onclick="setMode('addition')">Addition</button>
        <button onclick="setMode('subtraction')">Subtraction</button>
        <button onclick="setMode('multiplication')">Multiplication</button>
        <button onclick="setMode('division')">Division</button>
    </div>

    <div id="problem-container">
        <p id="problem"></p>
        <input type="number" id="answer" placeholder="Your answer" onkeydown="if(event.key==='Enter') checkAnswer()">
        <button onclick="checkAnswer()">Submit</button>
        <p id="feedback"></p>
    </div>

    <p>Score: <span id="score">0</span></p>

    <script src="script.js"></script>
</body>
</html>
