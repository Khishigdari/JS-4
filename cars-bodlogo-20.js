let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  let filtered = cars.filter((car) => {
    return car.isAvailable === true;
  });
  return filtered;
}
let filteredByAvailability = getAvailableCars(cars);
console.log("Available Cars:", filteredByAvailability);

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  let filtered = cars.filter((car) => {
    return car.year > 2018;
  });
  return filtered;
}
let filteredByRecentCars = getRecentCars(cars);
console.log("Recent Cars:", filteredByRecentCars);

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  let filtered = cars.filter((car) => {
    return car.price > 5000000;
  });
  return filtered;
}
let filteredByExpensiveCar = getExpensiveCars(cars);
console.log("Expensive Cars:", filteredByExpensiveCar);

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars) {
  let filtered = cars.filter((car) => {
    return car.type.toLowerCase() === "sedan";
  });
  return filtered;
}
const filteredByType = getSedans(cars);
console.log("Get Sedan Cars:", filteredByType);

// 5. Брэндээр шүүж буцаадаг функц бич. !!!!!!
function filterByBrand(cars, brandName) {
  let filtered = cars.filter((car) => {
    return car.brand === brandName;
  });
  return filtered;
}
let filteredByBrandName = filterByBrand(cars, "Tesla");
console.log("Filtered By Brand Name:", filteredByBrandName);

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let filtered = cars.filter((car) => {
    return car.mileage > 100000;
  });
  return filtered;
}
let filteredByHighMileage = getHighMileageCars(cars);
console.log("Filtered By High Mileage:", filteredByHighMileage);

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  cars.map((car) => {
    if (car.fuelEfficiency > 5) {
      car.efficient = false;
    } else {
      car.efficient = true;
    }
  });
  return cars;
}
const efficiencyFlagAdded = addEfficiencyFlag(cars);
console.log("Efficiency Flag Added:", efficiencyFlagAdded);

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  let filtered = cars.map((car) => {
    return {
      ...car,
      price: car.price + (car.price * 15) / 100,
    };
  });
  return filtered;
}
const priceIncreasedByFifteenPercent = increaseCarPrices(cars);
console.log(
  "Price Increased By Fifteen Percent:",
  priceIncreasedByFifteenPercent
);

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let filtered = cars.filter((car) => {
    return car.mileage < 50000;
  });
  return filtered;
}
const lowMileageCars = getLowMileageCars(cars);
console.log("Filtered By Low Mileage:", lowMileageCars);

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let mostEfficientCar = cars[0];
  cars.forEach((car) => {
    if (car.fuelEfficiency < mostEfficientCar.fuelEfficiency) {
      mostEfficientCar = car;
    }
  });
  return mostEfficientCar;
}
const mostEfficient = getMostEfficientCar(cars);
console.log("Get Most Efficient Car:", mostEfficient);

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let mostExpensiveCar = cars[0];
  cars.forEach((car) => {
    if (car.price > mostExpensiveCar.price) {
      mostExpensiveCar = car;
    }
  });
  return mostExpensiveCar;
}
const expensive = getMostExpensiveCar(cars);
console.log("Get Most Expensice Car:", expensive);

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let totalMileage = 0;
  cars.forEach((car) => {
    totalMileage += car.mileage;
  });
  return totalMileage;
}
const allMileage = getTotalMileage(cars);
console.log("Total Mileage:", allMileage);

// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  let filtered = cars.filter((car) => {
    return car.supplier.toLowerCase() === supplierName;
  });
  return filtered;
}
const bySupplier = filterBySupplier(cars, "autojapan");
console.log("Filter By Supplier:", bySupplier);

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let filtered = cars.map((car) => {
    return {
      model: car.model,
    };
  });
  return filtered;
}
const filteredByModel = getCarModels(cars);
console.log("Get Car Models:", filteredByModel);

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  let filtered = cars.sort((car2, car1) => {
    return car2.price - car1.price;
  });
  return filtered;
}
const priceAscending = sortByPriceAscending(cars);
console.log("Sorted By Ascending Price:", priceAscending);

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let filtered = cars.filter((car) => {
    return car.engineSize > 2.0;
  });
  return filtered;
}
const largeEngine = getLargeEngineCars(cars);
console.log("Get Large Engine Cars:", largeEngine);

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
// function getUniqueBrands(cars) {
let brand = cars.map((car) => {
  return car.brand;
});
const uniqueBrand = {};
brand.forEach((brand) => (uniqueBrand[brand] = true));
console.log("Get Unique Brand:", Object.keys(uniqueBrand));
// }

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let filtered = cars.map((car) => {
    return {
      model: car.model,
      year: car.year,
    };
  });
  return filtered;
}
const modelAndYear = getModelAndYearList(cars);
console.log("Get Model And Year List:", modelAndYear);

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  cars.map((car) => {
    if (car.fuelEfficiency < 4.0) {
      car.tag = "superEfficient";
      // return {
      //     ...car,
      //     tag: "superEfficient"
      // }

      //   car.superEfficient = true;
      // } else {
      //   car.superEfficient = false;
    }
  });
  return cars;
}
const superEfficientTag = tagSuperEfficientCars(cars);
console.log("Super Efficient Car Tag:", superEfficientTag);

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  let filtered = cars.map((car, i) => {
    return {
      ...car,
      i: i + 1,
    };
  });
  return filtered;
}
const idAdded = addIdToCars(cars);
console.log("ID Added to Cars:", idAdded);
