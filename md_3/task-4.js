const countTotalSalary = (employees) => {
  let total = 0;
  let values = Object.values(employees);
  for (let value of values) {
    total += value;
  };
  return `Загальна сума зарплати робітника = ${total}`
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400