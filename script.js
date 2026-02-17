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
for (const key of keys) {
  console.log(key, user[key]);
}
console.log(user);
console.log(keys);

// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
function countProps(user) {
  return Object.keys(user).length;
}
console.log(countProps(user));

// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const employees = {
  Oleg: 15,
  Maryna: 17,
  Petro: 23,
  Alice: 13,
};
function findBestEmployee(employees) {
  let maxNumber = 0;
  let newName = "";
  // for (const key in peoples) {
  //   const values = peoples[key];
  //   if (maxNumber < values) {
  //     maxNumber = values;
  //   }
  // }

  const keyOfPeoples = Object.keys(employees);
  for (const key of keyOfPeoples) {
    console.log(employees[key]);
    if (maxNumber < employees[key]) {
      maxNumber = employees[key];
      newName = key;
      console.log(employees[key]);
    }
  }
  return newName;
}
console.log(findBestEmployee(employees));

// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
function countTotalSalary(employees) {
  const rozrahunok = Object.values(employees);
  console.log(rozrahunok);
  let suma = 0;
  for (const zarplata of rozrahunok) {
    suma += zarplata;
  }
  return suma;
}

const zarplata = {
  buhalter: 27500,
  derector: 65000,
  robitniki: 32500,
  arhitector: 37500,
};

console.log(countTotalSalary(zarplata));
