const fs = require('fs');

// 2 - What is the sum of the fuel requirements when also taking into account the mass of the added fuel
const getFuelRequirement = mass => {
  const fuelRequired = Math.floor(mass / 3) - 2;
  if (fuelRequired <= 0) {
    return 0;
  }
  return fuelRequired + getFuelRequirement(fuelRequired);
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
