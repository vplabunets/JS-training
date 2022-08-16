const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  // getPotions() {
  //   return this.potions;
  // },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    return this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const potion of this.potions) {
      // console.log(this.potions.indexOf(potion));
      // console.log(potion.name);
      // console.log(potion.name === potionName);
      // console.log(this.potions.indexOf(potion));
      if (potion.name === potionName) {
        // console.log(potion.name === potionName);
        this.potions.splice(this.potions.indexOf(potion), 1);
        // console.log(this.potions);
        break;
      }
      // console.log(potion.name === potionName);
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName) {
        this.potions[this.potions.indexOf(potion)].name = newName;
        return this.potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
// console.log(atTheOldToad.potions);
console.log(atTheOldToad.addPotion({ name: "Sped potion", price: 460 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
