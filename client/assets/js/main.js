var calculationArray = [];
var displayArray = [];
var stringNumberToPush = '';
var diplayInputs = '';
var calculationResults = null;

$(document).ready( initializeApp );

function initializeApp() {
    applyClickHandlers();
}

function applyClickHandlers() {
    
    $('#number-block').on('click', '.number', numberButtonHandler);
    $('#operator-column').on('click', '.operator', operatorButtonHandler);
    $('#equals').click(equalsButtonHandler);
}

function numberButtonHandler(event) {
    console.log("calculationArray number", calculationArray);
    // console.log(event);
    var inputtedNumber = '';
    inputtedNumber = event.currentTarget;
    inputtedNumber = $(inputtedNumber).find('p').text();

    stringNumberToPush = stringNumberToPush.concat(inputtedNumber);
    displayArray.push(inputtedNumber);
    updateDisplay();
}


function operatorButtonHandler(event) {
    console.log("calculationArray operator", calculationArray);

    var inputtedOperator = '';
    inputtedOperator = $(event.currentTarget).find('p').text();
    displayArray.push(inputtedOperator);
    updateDisplay();

    calculationArray.push(stringNumberToPush);
    calculationArray.push(inputtedOperator);
    stringNumberToPush = '';
}

function equalsButtonHandler(event) {
    console.log("calculationArray equal", calculationArray);

    calculationArray.push(stringNumberToPush);
    stringNumberToPush = '';
    displayArray = [];

    console.log("calculation array:", calculationArray);
    var answer = calculate(calculationArray[0], calculationArray[2], calculationArray[1]);
    calculationArray = [];
    stringNumberToPush = answer.toString();
    console.log(answer);

    displayArray.push(answer);
    updateDisplay();
}

function updateDisplay() {
    var displayText = displayArray.join("")
    // var displayText = Number(displayText).toFixed(10);
    // console.log(displayText);
    $('#display-text').text(displayText);
}

function calculate(num1, num2, operator) {
    var number1 = parseFloat(num1);
    var number2 = parseFloat(num2);
    console.log(number1, number2);
    var result = null;

    switch(operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        default:
            break;
    }
    return result;
    
}

console.log(1.0, 2, '*');
