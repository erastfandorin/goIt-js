const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'html';
user.premium = false;

let userKeys = Object.keys(user)
let i = 0;

for (const key of userKeys) {
  console.log(`${userKeys[i]} :`, user[key]);
  i += 1;
}