//6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2

// const array = [3, 5, 6, 34, 8, 83, 12, 34];
// each(array, multiply);
// function each(array, callback) {
//   const array2 = [];
//   for (let i = 0; i < array.length; i += 1) {
//     array2.push(callback(array[i]));
//   }
//   console.log(array2);
//   return array2;
// }

// function multiply(element) {
//   return element * 2;
// }

// const scores = [61, 19, 74, 74, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);

// console.log(descendingScores);

// function formatMessage(message, maxLength) {
//   let result;
