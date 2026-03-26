let display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace mathematical constants
        let expression = display.value
            .replace(/π/g, Math.PI)
            .replace(/e/g, Math.E);

        // Evaluate the expression safely
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

// Scientific Functions
function calculateSin() {
    try {
        let value = parseFloat(display.value);
        display.value = Math.sin(value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateCos() {
    try {
        let value = parseFloat(display.value);
        display.value = Math.cos(value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateTan() {
    try {
        let value = parseFloat(display.value);
        display.value = Math.tan(value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateLog() {
    try {
        let value = parseFloat(display.value);
        display.value = Math.log10(value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateLn() {
    try {
        let value = parseFloat(display.value);
        display.value = Math.log(value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSqrt() {
    try {
        let value = parseFloat(display.value);
        display.value = Math.sqrt(value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePower() {
    display.value += "**";
}

function calculateFactorial() {
    try {
        let n = parseInt(display.value);
        if (n < 0) {
            display.value = "Error";
        } else if (n === 0 || n === 1) {
            display.value = 1;
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePi() {
    display.value += Math.PI;
}

function calculateE() {
    display.value += Math.E;
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === '(' || key === ')') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    }
});
