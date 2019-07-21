let countProps = (obj) => {
let sum = Object.keys(obj);
return `Кількість властивостей в обєкті = ${sum.length}`;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3