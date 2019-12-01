const fs = require('fs');

// 1 - What is the sum of fuel requirments
const getFuelRequirement = mass => {
  const fuelRequired = Math.floor(mass / 3) - 2;
  return fuelRequired;
};

const getFuelCounterUpper = () => {
  fs.readFile('./day1.txt', (err, data) => {
    if (err) {
      throw err;
    }

    const masses = data.toString('utf-8').split('\r\n');

    const fuelCounterUpper = masses.reduce((total, mass) => {
      const fuelRequired = getFuelRequirement(parseInt(mass));
      return total + fuelRequired;
    }, 0);
    console.log(fuelCounterUpper);
  });
};

getFuelCounterUpper();
