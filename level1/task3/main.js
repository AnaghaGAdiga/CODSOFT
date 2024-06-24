document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';
    let resultDisplayed = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-key');
            handleInput(key);
        });
    });

    document.addEventListener('keydown', (event) => {
        const keyMap = {
            'Enter': '=',
            'Escape': 'C',
            'Backspace': '±',
            '/': '/',
            '*': '*',
            '-': '-',
            '+': '+'
        };
        const key = event.key in keyMap ? keyMap[event.key] : event.key;
        handleInput(key);
    });

    function handleInput(key) {
        if (key >= '0' && key <= '9' || key === '.') {
            if (resultDisplayed) {
                currentInput = key;
                resultDisplayed = false;
            } else {
                currentInput += key;
            }
            updateDisplay(currentInput);
        } else if (key === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            updateDisplay('0');
        } else if (key === '±') {
            currentInput = currentInput ? (currentInput * -1).toString() : '';
            updateDisplay(currentInput);
        } else if (key === '%' && currentInput) {
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateDisplay(currentInput);
        } else if (['+', '-', '*', '/'].includes(key)) {
            if (currentInput) {
                previousInput = currentInput;
                currentInput = '';
                operator = key;
                updateDisplay(operator);
            }
        } else if (key === '=' || key === 'Enter') {
            if (currentInput && previousInput) {
                const calculation = calculate(previousInput, currentInput, operator);
                updateDisplay(calculation);
                currentInput = calculation;
                resultDisplayed = true;
                previousInput = '';
                operator = '';
            }
        }
    }

    function updateDisplay(value) {
        display.textContent = value;
    }

    function calculate(a, b, operator) {
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        switch (operator) {
            case '+':
                return (numA + numB).toString();
            case '-':
                return (numA - numB).toString();
            case '*':
                return (numA * numB).toString();
            case '/':
                return (numA / numB).toString();
            default:
                return '';
        }
    }
});
