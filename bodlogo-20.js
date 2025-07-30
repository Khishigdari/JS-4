// Нэг л products массив дээр ажиллана
let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];
// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getDiscountedProducts(products) {
  let filtered = products.filter((product) => {
    return product.discountPercent > 0;
  });
  return filtered;
}
let filteredByDiscount = getDiscountedProducts(data);
console.log("Discounted Products:", filteredByDiscount);

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  let filtered = products.filter((product) => {
    return product.stock === 0;
  });
  return filtered;
}
let filteredByStock = getOutOfStockProducts(data);
console.log("Out of Stock Products:", filteredByStock);

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  let filtered = products.filter((product) => {
    return product.price > 1000000;
  });
  return filtered;
}
let filteredByPrice = getExpensiveProducts(data);
console.log("Expensive Products:", filteredByPrice);

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products) {
  let filtered = products.filter((product) => {
    return product.category.toLowerCase() === "Computers";
  });
  return filtered;
}
let filteredByCategory = getComputers(data);
console.log("Computers Category:", filteredByCategory);

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brandName) {
  let filtered = products.filter((product) => {
    return product.brand.toLowerCase() === brandName;
  });
  return filtered;
}
let filteredByBrand = filterByBrand(data, "Samsung");
console.log("Filtered By Brand:", filteredByBrand);

// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
function addIsHeavyFlag(products) {
  products.map((product) => {
    if (product.weight > 1) {
      product.isHeavy = true;
    } else {
      product.isHeavy = false;
    }
  });
  return products;
}
const isHeavyAdded = addIsHeavyFlag(data);
console.log("isHeavy Added:", isHeavyAdded);

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products) {
  let filtered = products.map((product) => {
    //map zuvhun array butsaadag bolhoor return dre object {} haaltaar hiine
    return {
      ...product,
      price: product.price + (product.price * 10) / 100,
    };
  });
  return filtered;
}
let priceIncreasedByTenPercent = increasePriceByTenPercent(data);
console.log("Price Increased By Ten Percent:", priceIncreasedByTenPercent);

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
function addFinalPrice(products) {
  let filtered = products.map((product) => {
    product.finalPrice;
    return {
      ...product,
      finalPrice:
        product.price + (product.price * product.discountPercent) / 100,
    };
  });
  return filtered;
}
let finalPriceAdded = addFinalPrice(data);
console.log("Final Price Added:", finalPriceAdded);

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
  let topRatedProduct = products[0];
  products.forEach((product) => {
    if (product.rating > topRatedProduct.rating) {
      topRatedProduct = product;
    }
  });
  return topRatedProduct;
}
const topRated = getTopRatedProduct(data);
console.log("Top Rated Products:", topRated);

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {
  let cheapestProduct = products[0];
  products.forEach((product) => {
    if (product.price < cheapestProduct.price) {
      cheapestProduct = product;
    }
  });
  return cheapestProduct;
}
const cheapest = getCheapestProduct(data);
console.log("Cheapest Product:", cheapest);

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
  let totalStock = 0;
  products.forEach((product) => {
    totalStock += product.stock;
  });
  return totalStock;
}
const allstock = getTotalStock(data);
console.log("Total Stock:", allstock);

// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.price;
  });
  return totalPrice;
}
const allPrice = getTotalPrice(data);
console.log("Total Price:", allPrice);

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplierName) {
  let filtered = products.filter((product) => {
    return product.supplier.toLowerCase() === supplierName;
  });
  return filtered;
}
let bySupplier = filterBySupplier(data, "mobicom");
console.log("Filtered By Supplier:", bySupplier);

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  let filtered = products.map((product) => {
    return {
      name: product.name,
    };
  });
  return filtered;
}
const onlyName = getProductNames(data);
console.log("Product Names:", onlyName);

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  let filtered = products.sort((product2, product1) => {
    return product2.price - product1.price;
  });
  return filtered;
}
const priceAscending = sortByPriceAscending(data);
console.log("Sorted By Ascending Price:", priceAscending);

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  let filtered = products.filter((product) => {
    return product.stock <= 5;
  });
  return filtered;
}
const lowStockProducts = getLowStockProducts(data);
console.log("Low Stock Products:", lowStockProducts);

// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
// function getUniqueSuppliers(products) {
let supplier = data.map((product) => {
  return product.supplier;
  // if ((product.supplier = product.supplier)) {
  // } else {
  //   return {
  //     supplier: product.supplier,
  //   };
  // }
});
//   return filtered;
const uniqueSuppliers = {};
supplier.forEach((supplier) => (uniqueSuppliers[supplier] = true));
console.log("Get Unique Supplier:", Object.keys(uniqueSuppliers));
// }
// const supplierUnique = getUniqueSuppliers(Object.keys(uniqueSuppliers));
// console.log("Get Unique Supplier:", supplierUnique);

// const uniqueSupplier = getUniqueSuppliers(data);
// console.log("Get Unique Supplier:", uniqueSupplier);

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  let filtered = products.map((product) => {
    return {
      name: product.name,
      price: product.price,
    };
  });
  return filtered;
}
const onlyNameAndPrice = getNameAndPriceList(data);
console.log("Name And Price List:", onlyNameAndPrice);

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  let filtered = products.filter((product) => {
    return product.rating > 4.5;
  });
  return filtered;
}
const filteredByHighRating = getHighlyRatedProducts(data);
console.log("Highly Rated Products:", filteredByHighRating);

// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...). !!!!!!
function addIdToProducts(products) {
  let filtered = products.map((product, i) => {
    // product.id = i;
    return {
      ...product,
      id: i + 1,
    };
  });
  return filtered;
}
let idAdded = addIdToProducts(data);
console.log("ID Added To Products:", idAdded);
