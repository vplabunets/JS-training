//   // Change code below this line

//   //   maxLength <= message.length
//   //     ? (result = `${message.slice(0, maxLength - 1)}...`)
//   //     : (result = message);

//   if (maxLength < message.length) {
//     result = `${message.slice(0, maxLength)}...`;
//     // console.log(result);
//   } else result = message;
//   //   console.log(result);
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 1));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result =
//     message.toLowerCase().includes("sale") ||
//     message.toLowerCase().includes("sale");
//   //   console.log(message.toLowerCase().includes("sale" || "spam"));
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Trust me, this is not a spam message"));

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array.shift();
//   const lastElement = array.pop();
//   const newArray = [];
//   newArray.push(firstElement);
//   console.log(newArray.push(firstElement));
//   newArray.push(lastElement);
//   console.log(newArray.push(lastElement));
//   return newArray;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function findLongestWord(string) {
//   // Change code below this line
//   let longestLength = 0;
//   let result = "";
//   //   console.log(array);
//   for (let i = 0; i < string.split(" ").length; i += 1) {
//     if (string.split(" ")[i].length > longestLength) {
//       longestLength = string.split(" ")[i].length;
//       result = string.split(" ")[i];
//     }
//   }
//   return result;

//   // Change code above this line
// }

// // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i]) === true) {
//       commonArray.push(array1[i]);
//     }
//   }
//   return commonArray;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function includes(array, value) {
//   // Change code below this line
//   for (element of array) {
//     console.log(element);
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;

//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let values = [];

//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
//   // Change code above this line
// }

// console.log(getAllPropValues("namde"));
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: iconToday = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: { low: lowTomorrow, high: highTomorrow },
// } = forecast;

// Change code below this line
// function add(...args) {
//   let sum = 0;
//   console.log(args);
//   for (const arg of args) {
//     sum += arg;
//   }

//   // Change code above this line
// }

// console.log(add(32, 6, 13, 19, 8));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         // this.potions.splice(this.potions.indexOf(potion), 1, newName);
//         return this.potions;
//       }
//     }
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.addPotion({ name: "Drasgon breath", price: 700 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     // console.log(this.pizzas);
//     // console.log(this.pizzas.includes(pizzaName));
//     if (this.pizzas.includes(pizzaName)) {
//       // onSuccess(pizzaName);
//       console.log(onSuccess(pizzaName));
//     }
//     console.log(onError(pizzaName));
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    for (const pizza of this.pizzas) {
      if (pizza === pizzaName) {
        return onSuccess(pizzaName);
      } else onError(pizzaName);
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
