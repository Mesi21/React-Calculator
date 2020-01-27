import operate from './operate';

const calculate = (btnName, dataObj) => {
  let { total } = dataObj;
  const { next, operation } = dataObj;
  const ops = {
    AC: 0,
    '+/-': -1,
    '%': 0.01,
  };
  if (btnName === '=' || btnName === '-' || btnName === 'X'
    || btnName === '÷') {
    total = operate(total, next, btnName);
  }
  if (btnName === 'AC' || btnName === '+/-' || btnName === '%') {
    total = total * next * ops[btnName];
  }
  return { total, next, operation };
};

export default calculate;
