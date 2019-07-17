'use strict';

function formatString(string) {
  let array;
  let editArray;

  if (40 < string.length) {
      array = string.split('');
      editArray = array.splice(39);
      editArray = array.join('');
      return 'Рядок до 40 символів :', editArray + '...';
  }
  return 'Рядок до 40 символів :', string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка