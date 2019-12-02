const fs = require('fs');

// 1 - What value is left at position 0 after the program halts?
const runIntCode = () => {
  fs.readFile('./day2.txt', (err, data) => {
    if (err) throw err;

    const intCode = data
      .toString()
      .split(',')
      .map(Number);

    intCode[1] = 12;
    intCode[2] = 2;

    for (let i = 0; i < intCode.length; i += 4) {
      const first = intCode[i + 1];
      const second = intCode[i + 2];
      const third = intCode[i + 3];

      if (intCode[i] === 1) {
        intCode[third] = intCode[first] + intCode[second];
      } else if (intCode[i] === 2) {
        intCode[third] = intCode[first] * intCode[second];
      } else if (intCode[i] === 99) {
        break;
      }
    }
    console.log(intCode);
  });
};

runIntCode();
