let numberItems;
let message;

function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    numberItems = i + 1;
    message = `${numberItems} - ${array[i]}`;
    console.log('message:', message);
  }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);