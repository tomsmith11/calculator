document.addEventListener('DOMContentLoaded', () => {
  const calculator = document.querySelector('.calculator')
  const keys = calculator.querySelector('.calculator__keys')
  const display = document.querySelector('.calculator__display')

  keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action

    if (e.target.matches('button')) {
      if (!action) {
        console.log('number key!')
      } else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log(`operator key!`);
      } else if (action === `decimal`) {
        console.log(`decimal key!`);
      } else if (action === `clear`) {
        console.log(`clear key!`)
      } else if (action === 'calculate') {
        console.log(`equal key!`)
      }
    }
  })
})