import operate from './operate';
import Symbols from '../symbols';

const calculate = (btnName, dataObj) => {
  let { total, next, operation } = dataObj;

  const ops = {
    AC: 0,
    '+/-': -1,
    '%': 0.01,
  };

  switch (btnName) {
    case Symbols.AC:
      total = '0';
      next = 0;
      operation = '';
      return { total, next, operation };
    case Symbols.sign:
      if (next) {
        next = operate(next, ops[btnName], Symbols.multiplication);
      } else if (total) {
        total = operate(total, ops[btnName], Symbols.multiplication);
      }
      return { total, next, operation };
    case Symbols.addition:
    case Symbols.subtraction:
    case Symbols.multiplication:
    case Symbols.division:
      operation = btnName;
      total = `${total} ${operation} `;
      return { total, next, operation };
    case Symbols.percentage:
      total *= ops[btnName];
      return { total, next };
    case '=': {
      const [num1, num2] = total.split(operation).map((num) => num.trim());
      total = operate(num1, num2, operation);
      operation = '';
      return { total, next, operation };
    }
    default: {
      if (total === '0') {
        total = btnName;
      } else {
        total = `${total}${btnName}`;
      }
      return { total, next, operation };
    }
  }
};

export default calculate;
