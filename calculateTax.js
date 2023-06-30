function calculateTax(salary) {
    if (salary < 12000) {
      return 0;

    } else if (12000 < salary < 36000) {
      return 0.2 * (salary - 12000);
    }

    return 0.4 * (salary - 36000);

  }
  


  module.exports = calculateTax;
  