import operate from './operate';

const calculate = (btnName, dataObj) => {
  let { total, next, operation } = dataObj;

  const ops = {
    AC: 0,
    '+/-': -1,
    '%': 0.01,
  }

  switch(btnName) {
    case 'AC':
      total = null;
      next = null;
      operation = null;
      return { total, next, operation };
    case '+/-':
      if(next) {
        next = operate(next, ops[btnName], 'X');
      } else if(total) {
        total = operate(total, ops[btnName], 'X');
      };
      return {total, next, operation}
    case '+':
    case '-':
    case 'X':
    case '÷':
      next = null;
      operation = btnName;
      total = operate(total, next, operation);
      return {total, next, operation};
    case '%':
      if(!next) {
        total = operate(total, next = null, btnName);
        return {total, next, btnName};
      } else {
        total = next;
        next = null;
        next = operate(total, next, btnName)
        return {total, next, btnName};
      }
    case '=':
      next = null;
      total = operate(total, next, operation);
      return {total, next, operation}
  }
};

export default calculate;
