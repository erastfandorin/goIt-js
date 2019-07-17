let input;
const numbers = [];
let total = 0;
let sum = 0;

do {
  input = prompt('Введіть чило');
  numbers.unshift(input);
} while (input !== null);

for (sum of numbers) {
  total += Number(sum);
}

console.log(`Загальга сума чисел дорівнює ${total} `);