function findLongestWord(string) {
  let longWord = 'a';
  let stringArray = string.split(' ');
  console.log(' stringArray :',  stringArray);
  for (let i = 0; i <  stringArray.length; i += 1) {
    if ( stringArray[i].length > longWord.length) {
      longWord = stringArray[i];
    }
  }
  return `Найдовше слово ${longWord}`
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
