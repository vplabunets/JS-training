// Генерація випадкових цілих чисел в межах діапазону
// Замість генерації випадкового цілого числа між нулем і даним числом,
//     як ми робили це раніше, ми можемо утворити випадкове ціле число, що потрапляє в діапазон двох конкретних чисел.

// Для цього ми визначимо мінімальне число min і максимальне число max.

// Ми будемо використовувати наступну формулу. Зробіть паузу, щоб прочитати і зрозуміти, що робить цей код:

// Math.floor(Math.random() * (max - min + 1)) + min
// Створіть функцію під назвою randomRange, яка займає діапазон myMin і myMax і
// повертає випадкове ціле число, яке більше або дорівнює myMinі менше або дорівнює myMax, включно.

function randomRange(myMin, myMax) {
  // Змініть код лише під цим рядком
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Змініть код лише над цим рядком
}