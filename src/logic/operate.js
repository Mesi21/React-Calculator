import Big from 'big-js';
import Symbols from '../symbols';

const operate = (num1, num2, operation) => {
  let finalRes;
  const a = Big(num1);
  const b = Big(num2);

  switch (operation) {
    case Symbols.multiplication:
      finalRes = a.times(b);
      break;
    case Symbols.division:
      try {
        finalRes = a.div(b);
      } catch (error) {
        finalRes = 'Error';
      }
      break;
    case Symbols.subtraction:
      finalRes = a.minus(b);
      break;
    case Symbols.addition:
      finalRes = a.plus(b);
      break;
    default:
      break;
  }

  return finalRes.toString();
};


export default operate;
