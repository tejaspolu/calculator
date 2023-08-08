function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate(operator, a, b){
    if(operator === '+') return add(a, b)
    if(operator === 'x') return multiply(a, b)
    if(operator === '÷') return divide(a, b)
    if(operator === '-') return subtract(a, b)
    return null;
}

function updateDisplay() {
    if(document.querySelector('.past-num').innerText.includes("=")){
        document.querySelector('.past-num').innerText = "Ans = " + document.querySelector('.current-num').innerText;
        displayVal = this.innerText;
        a = 0;
    }
    else if(displayVal === '0') {
        displayVal = this.innerText;
    }
    else {
        displayVal += this.innerText;
    }
    document.querySelector('.current-num').innerText = displayVal;
}

function goToNextNum() {
    if(document.querySelector('.past-num').innerText.includes("=") && !document.querySelector('.past-num').innerText.includes("Ans")){
        document.querySelector('.past-num').innerText = a + " " + this.innerText + " ";
        operator = this.innerText;
    } else if(document.querySelector('.past-num').innerText && operator !== ""){
        //console.log(operate(operator, a, parseInt(document.querySelector('.current-num').innerText)));
        a = operate(operator, a, parseFloat(document.querySelector('.current-num').innerText));
        document.querySelector('.past-num').innerText = a + " " + this.innerText + " ";
        operator = this.innerText;
    } else if(a > 0){
        operator = this.innerText;
        displayVal = a + " " + operator + " ";
        document.querySelector('.past-num').innerText = displayVal;
    } else {
        a = parseFloat(document.querySelector('.current-num').innerText);
        displayVal += " " + this.innerText + " ";
        operator = this.innerText;
        document.querySelector('.past-num').innerText = displayVal;
    }
    if(a !== 0){
        displayVal = '0';
    }
}

function finishOperation(){
    if(operator === "÷" && displayVal === '0'){
        alert("You can't divide by 0.")
        operator = "";
    }
    else if(document.querySelector('.past-num').innerText && displayVal !== '0' && operator !== ""){
        document.querySelector('.past-num').innerText = a + " " + operator + " " + document.querySelector('.current-num').innerText + " =";
        a = operate(operator, a, parseFloat(document.querySelector('.current-num').innerText));
        document.querySelector('.current-num').innerText = a;
        operator = "";
        displayVal = document.querySelector('.current-num').innerText;
    }
}

function clearDisplay(){
    a = 0;
    operator = "";
    displayVal = "0";
    document.querySelector('.past-num').innerText = '';
    document.querySelector('.current-num').innerText = displayVal;
}

function deleteDisplay(){

}

let displayVal = "0";
let a = 0;
let b = 0;
let operator = "";
const numButtons = document.querySelectorAll('.num');
numButtons.forEach(numButton => (numButton.addEventListener('click', updateDisplay)));

const oprButtons = document.querySelectorAll('.opr');
oprButtons.forEach(oprButton => (oprButton.addEventListener('click', goToNextNum)));

document.querySelector('.equal').addEventListener('click', finishOperation);
document.querySelector('.clear').addEventListener('click', clearDisplay);
document.querySelector('.delete').addEventListener('click', deleteDisplay);

