import Big from 'big-js';

const operate = (num1, num2, operation) => {
  let finalRes = Big(0);
  const a = Big(num1);
  const b = Big(num2);

  switch (operation) {
    case 'x':
      finalRes = a.times(b);
      break;
    case '÷':
      try {
        finalRes = a.div(b);
      } catch (error) {
        finalRes = 'Error';
      }
      break;
    case '-':
      finalRes = a.minus(b);
      break;
    case '+':
      finalRes = a.plus(b);
      break;
    default:
      break;
  }

  return finalRes.toString();
};


export default operate;
