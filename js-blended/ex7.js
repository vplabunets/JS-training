//2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль

// makeProduct("watermelon", 500, showProduct);

// function makeProduct(name, price, callback) {
//   const productObj = {
//     id: Math.random(),
//     name,
//     price,
//   };
//   callback(productObj);
// }

// function showProduct(productObj) {
//   console.log(productObj);
// }
