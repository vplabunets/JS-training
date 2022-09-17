// Ex 25
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
//   Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
//     оскільки вони присутні в обох вихідних масивах.
// А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка
// отримує два масиви довільної довжини в параметри array1 і array2,
//   і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array3 = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i]);
//     }
//   }
//   console.log(array3);
//   return array3;

//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
