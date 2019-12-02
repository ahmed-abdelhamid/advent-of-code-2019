const fs = require('fs');

// 2 - Find the input noun and verb that cause the program to produce the output 19690720
const findOutput = (noun, verb, input) => {
  const intCode = [...input];
  intCode[1] = noun;
  intCode[2] = verb;

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
  return intCode;
};

const runIntCode = () => {
  fs.readFile('./day2.txt', (err, data) => {
    if (err) throw err;

    const originalIntCode = data
      .toString()
      .split(',')
      .map(Number);

    for (let noun = 0; noun < 100; noun++) {
      for (let verb = 0; verb < 100; verb++) {
        const output = findOutput(noun, verb, originalIntCode);

        if (output[0] === 19690720) {
          console.log(100 * noun + verb);
        }
      }
    }
  });
};

runIntCode();
