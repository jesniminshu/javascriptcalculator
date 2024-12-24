let currentInput = '';  // Stores the current input as a string
let currentResult = 0;  // Stores the result of calculations
let currentOperator = null;  // Stores the current operator

function buttonclick(val) {
    // Append the clicked number to the current input
    currentInput += val;
    // Display the current input on the screen
    document.getElementById("screen").value = currentInput;
}

function clearDisplay() {
    // Clear all variables and reset the screen
    currentInput = '';
    currentResult = 0;
    currentOperator = null;
    document.getElementById("screen").value = '';
}

function operate(operator) {
    if (currentInput !== '') {
        const num = parseFloat(currentInput);

        if (currentOperator) {
            // Calculate the result if there's already an operator set
            calculate(num);
        } else {
            // If no operator was set, initialize currentResult with the entered number
            currentResult = num;
        }

        // Display the result immediately after pressing an operator
        document.getElementById("screen").value = currentResult;

        // Set the new operator for the next operation
        currentOperator = operator;
        currentInput = '';  // Clear the input for the next number
    } else if (currentOperator) {
        // If an operator is clicked again without entering a new number, update the operator
        currentOperator = operator;
    }
}

function calculate(num) {
    // Perform the calculation based on the current operator
    switch (currentOperator) {
        case '+':
            currentResult += num;
            break;
        case '-':
            currentResult -= num;
            break;
        case '*':
            currentResult *= num;
            break;
        case '/':
            currentResult /= num;
            break;
    }
}

function equalClick() {
    if (currentInput !== '' && currentOperator) {
        // Parse the current input and perform the calculation
        calculate(parseFloat(currentInput));
        
        // Display the final result
        document.getElementById("screen").value = currentResult;

        // Reset the input and operator for a new calculation
        currentInput = '';
        currentOperator = null;
    }
}