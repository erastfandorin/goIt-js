const findBestEmployee = (employees) => {
  let longKey = 0;
  let a;
  for (const key in employees) {

    if (Number(employees[key]) > longKey) {
      longKey = employees[key];
    };

    if (Number(employees[key]) === longKey) {
      a = key;
    };
  }
  return a;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux