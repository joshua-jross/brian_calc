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
    // console.log(event);
    var inputtedNumber = '';
    inputtedNumber = event.currentTarget;
    inputtedNumber = $(inputtedNumber).find('p').text();

    stringNumberToPush = stringNumberToPush.concat(inputtedNumber);
    displayArray.push(inputtedNumber);
    // console.log(displayArray);
    updateDisplay();
}


function operatorButtonHandler(event) {
    // console.log(event);
    var inputtedOperator = '';
    inputtedOperator = $(event.currentTarget).find('p').text();
    displayArray.push(inputtedOperator);
    updateDisplay();

    calculationArray.push(stringNumberToPush);
    console.log(calculationArray);
    stringNumberToPush = '';
}

function equalsButtonHandler(event) {
    // console.log(event);
    calculationArray.push(stringNumberToPush);
    stringNumberToPush = '';
    displayArray = [];

    console.log(calculationArray);
}

function updateDisplay() {
    var displayText = displayArray.join("");
    // console.log(displayText);
    $('#display-text').text(displayText);
}