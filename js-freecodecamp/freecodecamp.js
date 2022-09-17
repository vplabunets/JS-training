// // Налаштування
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// Ваша функція повинна завжди повертати весь об'єкт збірки записів.
// Якщо prop це не tracks і value не є пустим рядком, то оновіть або встановіть prop альбому до value.
// Якщо prop є tracks але альбом немає властивості tracks, створіть пустий масив та додайте value до нього.
// Якщо prop є tracks та value не є пустим рядком, додайте value до кінця наявного масиву tracks у альбомі.
// Якщо value є пустим рядком, видаліть дану властивість prop з альбому.

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   }
//   if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
//     records[id][prop] = value;
//     console.log(records[id][prop]);
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
// console.log(
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// );

// console.log(updateRecords(recordCollection, 2548, "artist", ""));
// console.log(
//   updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
// );
// console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
// console.log(updateRecords(recordCollection, 2548, "tracks", ""));

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// Викликаємо у глобальному контексті
// showThis();
// this in showThis: Window

// function sum(arr, n) {
//   // Змініть код лише під цим рядком
//   if (n <= 0) {
//     return n;
//   } else {
//     console.log(n);
//     // return n;
//     return sum(arr, n - 1) * arr[n - 1];
//   }
//   // Змініть код лише над цим рядком
// }

// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     // console.log(`multiply(arr, n - 1)`, multiply(arr, n - 1));
//     // console.log(`arr[n - 1]`, arr[n - 1]);
//     // console.log(arr[n - 1]);
//     // console.log(`arr[n - 1]`, multiply(arr, n - 1) + arr[n - 1]);
//     // return multiply(arr, n - 1) + arr[n - 1];
//   }
// }

// console.log(multiply([1], 0));
// console.log(multiply([2, 3, 4], 3));
// console.log(multiply([2, 3, 4, 5], 2));

// function arrayDiff(a, b) {
//   const result = [];
//   for (let i = 0; i <= a.length; i += 1) {
//     if (b.includes(a[i])) {
//       result.push(a[i]);
//     }
//   }

//   return result;
// }

// function arrayDiff(a, b) {
//   const result = [];
//   for (let i = 0; i <= a.length; i += 1) {
//     if (b.includes(a[i])) {
//       console.log(a[i]);
//       result.push(a[i]);
//     }
//   }

//   return result;
// }

// const arrayDiff = (a, b) => {
//   const result = [];
//   for (let i = 0; i <= a.length; i += 1) {
//     if (b.includes(a[i])) {
//       result.push(a[i]);
//     }
//   }

//   return result;
// };

// console.log(arrayDiff([1, 4], [4]));

// function capitalize(s) {
//   const words = s.split(" ");
//   const wordsCapitalised = [];
//   // console.log(d);
//   for (const word of words) {
//     wordsCapitalised.push(word[0].toUpperCase() + word.slice(1));
//     // console.log(words.splice(0, words.length, word));
//   }
//   return wordsCapitalised;
// }

// console.log(capitalize("can mirrors be real if our eyes aren't real"));

// function maskify(cc) {
//   let a = cc.split("");
//   // console.log(cc.split(","));

//   // const b = a.splice(a.length - 4, 4, "#", "#", "#", "#");

//   return a;
// }

// console.log(maskify("4556364607935616"));
// console.log("4556364607935616".split(""));
// const name = "Mango";
// console.log(name.split(""));

// Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   contacts.forEach((contact) => {
//     if (contact.firstName === name && contact.likes.includes(prop)) {
//       return contact.likes;
//     }
//   });

//   // Only change code above this line
// }

// lookUpProfile("Akira", "likes");

// function zeroArray(m, n) {
//   // Створіть 2-D масив із m-рядків m та n-стовпчиків нулів
//   let newArray = [];

//   for (let i = 0; i < m; i++) {
//     let row = [];
//     // Додайте m-ий рядок до newArray
//     row[i];
//     console.log(row);
//     // // console.log(row);
//     for (let j = 0; j < n; j++) {
//       // Додає n нулів до поточного рядка, щоб створити стовпчики
//       row.push(0);
//     }
//     // Штовхає поточний рядок, який тепер містить n нулів, до масиву
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Змініть код лише під цим рядком
//   for (i = 0; i < arr.length; i += 1) {
//     if (arr[i].indexOf(elem) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );
// console.log(
//   filteredArray(
//     [
//       [10, 8, 3],
//       [14, 6, 23],
//       [3, 18, 6],
//     ],
//     18
//   )
// );

// console.log(
//   filteredArray(
//     [
//       ["trumpets", 2],
//       ["flutes", 4],
//       ["saxophones", 2],
//     ],
//     2
//   )
// );

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Змініть код лише під цим рядком
  let usersOnLineQuantity = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === "true") {
      console.log(user);
      usersOnLineQuantity += 1;
      return usersOnLineQuantity;
    }
  }
  // Змініть код лише над цим рядком
}

console.log(countOnline(users));

// let result = 0;
//   for (let user in usersObj) {
//     if (usersObj[user].online === true) {
//       result++;
//     }
//   }
//   return result;
//   // Only change code above this line
// }
