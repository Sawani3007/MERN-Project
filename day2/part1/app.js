const printBil = (txt) => {
  console.log("--------");
  console.log("Rs: ",txt);
  console.log("-----")
}
const calculateBillOnFood = (price) =>{
  return price*1.05;
}
const calculateBillOnClothes = (price) =>{
  return price*1.11;
}
const calculateBillOnDrinks = (price) =>{
  return price*2.05;
}
const printBillForDrinksAndClothes = (txt){

}
// let r1= calculateBillOnFood(20);
// console.log(r1);
// let r2= calculateBillOnClothes(25);
// console.log(r2);
// let r3= calculateBillOnDrinks(13);
// console.log(r3);
const generateBill = (food,clothes,drink,cb) =>{
  const foodAmount = calculateBillOnFood(food);
  const ClothesAmount = calculateBillOnClothes(clothes);
  const DrinksAmount = calculateBillOnDrinks(drink);
  const total = foodAmount+DrinksAmount+ClothesAmount;
  // printBil(total);
  cb(total);
}
let a=generateBill(0,4,6,printBillForDrinksAndClothes);
console.log(a);