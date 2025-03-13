/**
 * @jest-environment jsdom
 */

const { sum, sumFahrenheit, sumKelvin } = require('./script.js'); 

/* Test for Fahrenheit */
test('Fahrenheit = ((temperature in celcius) * (9/5)) +32 ', () => {
    expect(sumFahrenheit(10)).toBe(50);
  }); 

/* Test for Kelvin  */
  test('Kelvin = ((temperature in celcius) +273.15 ', () => {
    expect(sumKelvin(10)).toBe(283.15);
  }); 