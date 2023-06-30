// calculateTax.spec.ts

const assert = require('chai').assert;
const calculateTax = require('../calculateTax');

describe('Tax Calculation', () => {
  it('should return 0 tax for salary less than 12000', () => {
    assert.equal(calculateTax(10000), 0);
  });

  it('should calculate 20% tax for salary between 12000 and 36000', () => {
    assert.equal(calculateTax(14000), 400);
  });

  it('should calculate 40% tax for salary greater than 36000', () => {
    assert.equal(calculateTax(40000), 5600);
  });
});
