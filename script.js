// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
  name: "Yehor",
  age: 14,
  hobby: "fishing",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
console.log(user);
console.log(keys);

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
function countProps(user) {
  return Object.values(user).length;
}
console.log(countProps(user));

// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const peoples = {
  Oleg: 15,
  Maryna: 17,
  Petro: 23,
  Alice: 13,
};
function findBestEmployee(employees) {}

// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const zarplata = {
  buhalter: 27500,
  derector: 65000,
  robitniki: 32500,
  arhitector: 37500,
};
const rozrahunok = Object.values(zarplata);
console.log(rozrahunok);
let suma = 0;
for (const zarplata of rozrahunok) {
  suma += zarplata;
}
console.log(suma);
