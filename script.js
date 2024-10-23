document.addEventListener('DOMContentLoaded', () => {
  const calculator = document.querySelector('.calculator');
  const keys = calculator.querySelector('.calculator__keys');
  const display = document.querySelector('.calculator__display');
  let previousResult = 0; 
  let operator = '';

  keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (e.target.matches('button')) {
      if (!action) {
        if (display.textContent === '0' || previousKeyType === 'operator') {
          display.textContent = key.textContent;
        } else {
          display.textContent += key.textContent;
        }
        calculator.dataset.previousKeyType = 'number';
      } else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        Array.from(keys.children).forEach(k => k.classList.remove('is-depressed')); // Remove 'is-depressed' class from all keys
        key.classList.add('is-depressed'); // Add 'is-depressed' class to the current key
        operator = action;
        previousResult = parseFloat(display.textContent);
        calculator.dataset.previousKeyType = 'operator';
      } else if (action === 'decimal') {
        if (!display.textContent.includes('.')) {
          display.textContent += '.';
        }
      } else if (action === 'clear') {
        display.textContent = '0';
        previousResult = 0;
        operator = '';
      } else if (action === 'calculate') {
        const currentNum = parseFloat(display.textContent);
        let result;
        switch (operator) {
          case 'add':
            result = previousResult + currentNum;
            break;
          case 'subtract':
            result = previousResult - currentNum;
            break;
          case 'multiply':
            result = previousResult * currentNum;
            break;
          case 'divide':
            result = previousResult / currentNum;
            break;
          default:
            result = currentNum;
        }
        display.textContent = result;
        previousResult = result;
        operator = '';
        Array.from(keys.children).forEach(k => k.classList.remove('is-depressed')); // Remove 'is-depressed' class from all keys
      }
    }
  });
});