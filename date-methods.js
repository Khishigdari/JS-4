// const birthday = new Date("August 01, 2025, 10:33");
// const date = birthday.getDate();
// const month = birthday.getMonth();
// const year = birthday.getFullYear();
// const hour = birthday.getHours();
// const minute = birthday.getMinutes();
// const second = birthday.getSeconds();

// console.log(date);
// console.log(month);
// console.log(year);
// console.log(hour);
// console.log(minute);
// console.log(second);

const myDate1 = new Date();
console.log(myDate1);

const startedDate1 = new Date("2025-06-09");
console.log(startedDate1.toDateString());

// =======================
const myDate = new Date();

class Student {
  static balance = 0;
  name;
  age;
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  addBalance(b) {
    this.balance = Number(b);
  }
}

let boldo = new Student("bolod");
let dorjo = new Student("dorjo", 21);
boldo.addBalance(200);
console.log(boldo);
console.log(dorjo);

console.log(myDate);

const startedDate = new Date("2025-06-09");

function calculateEndDate(date) {
  const startYear = date.getFullYear();
  let startMonth = date.getMonth();
  const startDay = date.getDate();
  const holidays = ["2025-7-9", "2025-7-10", "2025-7-11", "2026-1-1"];
  let endDay = startDay + holidays.length;
  if (endDay > 30) {
    endDay = 30 - endDay;
    startMonth++;
  }
  let endMonth = startMonth + 8;
  let endYear;
  if (endMonth > 11) {
    endMonth = endMonth - 11;
    endYear = startYear + 1;
  } else {
    endYear = startYear;
  }
  return new Date(endYear, endMonth, endDay);
}
const endDate = calculateEndDate(startedDate);
console.log("endDate=", endDate);

let name = "andy";
let b = "asd";
let d = `a ${name} sd`;
let helloText = "Hello " + name + ", how are you";
let templateLiteral = `Hello ${name} how are you`;

let imgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/960px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg";

let img = `<img
      src="${imgUrl}"
      alt=""
    />`;

//ternary operator

let age = 17;

if (age > 18) {
  console.log("adult");
} else {
  console.log("teenage");
}
//age > 18 ? "adult" : "teenage"
console.log(age > 18 ? "adult" : "teenage");

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц
function getMostEfficientCar(cars) {
  let result = null;
  cars.forEach(function (car) {
    if (result === null) {
      result = car;
    } else {
      if (car.fuelEfficiency < result.fuelEfficiency) {
        result = car;
      }
    }
  });
  return result;
}

// function getOutOfStockProducts(products) {
//   return products.filter(function (product) {
//     if (product.stock === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

const myFunc = (product) => {
  return product.stock === 0 ? true : false;
};
function getOutOfStockProducts(products) {
  return products.filter(myFunc);
}

//callback function
function calculator(arg1, arg2, operationFunction) {
  return operationFunction(arg1, arg2);
}
function addFunction(arg1, arg2) {
  return arg1 + arg2;
}

const result = calculator(10, 20, addFunction);
console.log(result);

let student = {
  name: "boldo",
  age: 10,
  shineSarEhleh: () => {
    console.log("Oyutnii 70");
  },
};

student.shineSarEhleh();
