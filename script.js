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
  
        if (!action) {
          if (displayedNum === '0') {
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
        }
  
        if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide'
        ) {
          console.log('operator key!');
        }
      } 
      keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
          // ...
      
          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            key.classList.add('is-depressed')
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
          }
        }
      })
      const previousKeyType = calculator.dataset.previousKeyType

      if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
      }

      if (action === 'calculate') {
        const secondValue = displayedNum
        // ...
      }
    });
  });