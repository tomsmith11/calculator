function calculate(firstValue, operator, secondValue) {
  // Add your calculation logic here
  // Replace this with your actual calculation code
  return eval(`${firstValue} ${operator} ${secondValue}`);
}

document.addEventListener('DOMContentLoaded', () => {
  const calculator = document.querySelector('.calculator');
  const keys = calculator.querySelector('.calculator__keys');
  const display = document.querySelector('.calculator__display');

  keys.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;
      const displayedNum = display.textContent;

      const previousKeyType = calculator.dataset.previousKeyType;

      if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedNum + keyContent;
        }
      }

      if (action === 'decimal') {
        display.textContent = displayedNum + '.';
      }

      if (action === 'clear') {
        display.textContent = '0';
      }

      if (action === 'calculate') {
        console.log('equal key!');
        const secondValue = displayedNum;

        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;

        display.textContent = calculate(firstValue, operator, secondValue);
      }

      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        // Remove the 'is-depressed' class from all operator keys
        key.classList.add('is-depressed');
        // add custom attribute
        calculator.dataset.previousKeyType = 'operator';

        // for equals button
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
      }
    }

    keys.addEventListener('click', (e) => {
      if (e.target.matches('button')) {
        const key = e.target;
        // ...

        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach((k) =>
          k.classList.remove('is-depressed')
        );
      }
    });
    
  });
});