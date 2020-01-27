const BigNum = require('big.js');

const operate = (num1, num2, operation) => {
  let finalRes = new BigNum(0);
  const a = new BigNum(num1);
  const b = new BigNum(num2);

  switch (operation) {
    case '÷':
      try {
        finalRes = a / b;
      } catch (error) {
        finalRes = 'Er';
      }
      break;
    case 'x':
      finalRes = a * b;
      break;
    case '-':
      finalRes = a - b;
      break;
    case '+':
      finalRes = a + b;
      break;
    default:
      break;
  }

  return finalRes.toString();
};


export default operate;
