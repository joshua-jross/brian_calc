var calculationArray = [];
var displayArray = [];
var stringNumberToPush = '';
var diplayInputs = '';
var calculationResults = null;
var storedNumber = null;

$(document).ready( initializeApp );

function initializeApp() {
    applyClickHandlers();
}

function applyClickHandlers() {

    $('#number-block').on('click', '.number', numberButtonHandler);
    $('#operator-column').on('click', '.operator', operatorButtonHandler);
    $('#equals').click(equalsButtonHandler);
    $('#c-button').on('click', cButtonHandler);
    $('#ac-button').on('click', acButtonHandler);
    $('#decimal').on('click', decimalButtonHandler);
    $('#decimal').on('click', decimalButtonHandler);
    $('#mplus').on('click', memoryStore);
    $('#mr').on('click', memoryReturn);
    $('#mc').on('click', memoryClear);

}

function memoryStore() {
    console.log('memoryStore');
    storedNumber = calculationArray.slice(-1);
}
function memoryReturn() {
    console.log('memoryReturn');
}
function memoryClear() {
    console.log('memoryClear');
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
    // var answer = parse(calculationArray);
    calculationArray = [];
    stringNumberToPush = answer.toString();
    console.log(answer);

    displayArray.push(answer);
    updateDisplay();
}

function cButtonHandler(event) {
    displayArray = [];
    updateDisplay();
}

function acButtonHandler(event) {
    calculationArray = [];
    stringNumberToPush = '';
    displayArray = [];
    updateDisplay();
}

function decimalButtonHandler(event) {
    stringNumberToPush += '.';
    displayArray.push('.')
    updateDisplay();
}

function updateDisplay() {
    var displayText = displayArray.join("")
    // var displayText = Number(displayText).toFixed(10);
    // console.log(displayText);
    $('#display-text').text(displayText);
}

function parse(tolkenarray) {
    //PEMDAS
    var temparray = tolkenarray;
    while(tolkenarray.length !== 1) {
        reduceexpression(temparray)
    }
}

function reduceexpression(tolkenarray) {
    parseParen(tolkenarray)
}


function parseParen(tolkenarray) {

}
function calculate(num1, num2, operator) {
    var number1 = parseFloat(num1);
    var number2 = parseFloat(num2);
    console.log(number1, number2);

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
        case 'TAN':
            result = Math.tan(number1 * Math.PI / 180);
            break;
        default:
            return null;
    }
    return result;

}

console.log(1.0, 2, '*');
