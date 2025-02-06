// Initialize variables
let expression = "";
let lastResult = "";

// Function to append a character
function appendCharacter(char) {
    expression += char;
    updateDisplay(false);
}

// Function to handle percentage calculation
function appendValue(value) {
    if (expression !== "") {
        expression = String(eval(expression + "/100"));
        updateDisplay(true);
    }
}

// Function to clear the display
function clearDisplay() {
    expression = "";
    lastResult = "";
    updateDisplay(true);
}

// Function to delete the last character
function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay(false);
}

// Function to calculate result when ENTER is clicked
function calculateResult() {
    try {
        lastResult = eval(expression); // Evaluate the expression
        updateDisplay(true);
    } catch (error) {
        document.getElementById("display").innerHTML = `<span class="result-text">Error</span>`;
    }
}

// Function to update display
function updateDisplay(showResult) {
    let displayElement = document.getElementById("display");

    if (showResult) {
        displayElement.innerHTML = `<span class="calculation-text">${expression}</span> <br>
                                    <span class="result-text">${lastResult}</span>`;
    } else {
        displayElement.innerHTML = `<span class="calculation-text">${expression}</span>`;
    }
}
