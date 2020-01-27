import operate from './operate';

const calculate = (btnName, dataObj) => {
  const { total, next, operation } = dataObj;

  let res = total;
  let nextOp = next;
  let newOp = operation;

  const ops = {
    AC: 0,
    '+/-': -1,
    '%': 0.01,
  };

  if (btnName === 'AC') {
    res = null;
    nextOp = null;
    newOp = null;
  } else if (btnName === '-' || btnName === 'X'
    || btnName === '÷' || btnName === '%') {
    nextOp = null;
    newOp = btnName;
    if (total && next && operation) {
      res = operate(total, next, operation);
    } else if (next) {
      nextOp = next;
    }
  } else if (btnName === '+/-') {
    if (next) {
      nextOp = operate(next, ops[btnName], 'X');
    } else if (total) {
      res = operate(total, ops[btnName], 'X');
    }
  } else if (btnName === '=') {
    nextOp = null;
    res = operate(total, next, operation);
    newOp = null;
  } else if (next) {
    nextOp = next + btnName;
  } else {
    newOp = btnName;
  }
  return { total: res, next: nextOp, operation: newOp };
};

export default calculate;
