/**
 * @jest-environment jsdom
 */

const { sum, sumFahrenheit, sumKelvin, sumKPH } = require('./script.js'); 

/* Test for Fahrenheit */
test('Fahrenheit = ((temperature in celcius) * (9/5)) +32 ', () => {
    expect(sumFahrenheit(10)).toBe(50);
  }); 

/* Test for Kelvin  */
  test('Kelvin = (temperature in celcius) +273.15 ', () => {
    expect(sumKelvin(10)).toBe(283.15);
  }); 

/* Test for KPH  */
test('wind speed in kilometers per hour = wind speed in miles per hour * 1.609 ', () => {
    expect(sumKPH(10)).toBe(16.09);
  }); 