// READ
// i am making this file to simplify the process of making the calculator with the html calculator. this is purely 
// a console-based calculator to help me understand how mine should actually work
// i heavily inspired script.js with this file however everything in script.js I now find quite confusing




// declare default number value 

let result_prev = 0;

// declare default operator value
let operator = '+';

// pre calculation
console.log(`result_prev: ${result_prev}`);

// enter first number
let firstNum = prompt('Enter your first number');
result_prev = parseInt(firstNum);
console.log(`result_prev: ${result_prev}`);

// enter operator and numbers
while (true) {
    let operatorInput = prompt('Enter an operator (+, -, *, /) or press "q" to quit');
    
    if (operatorInput === 'q') {
        break;
    }
    
    operator = operatorInput;
    
    let num = prompt('Enter a number');
    let currentNum = parseInt(num);
    
    // perform calculation based on operator
    switch (operator) {
        case '+':
            result_prev += currentNum;
            break;
        case '-':
            result_prev -= currentNum;
            break;
        case '*':
            result_prev *= currentNum;
            break;
        case '/':
            result_prev /= currentNum;
            break;
        default:
            console.log('Invalid operator');
            break;
    }
    
    console.log(`result_prev: ${result_prev}`);
}

console.log(`Final result: ${result_prev}`);
