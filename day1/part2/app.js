// let juice = 50;
// let gstOnJuice = 0.1;
// let fries = 70;
// let gstOnFood=0.05;
// let juiceBillAmount=juice+juice*gstOnJuice;
// let foodBillAmount=fries+fries*gstOnFood;
// console.log("Bill: ",(juiceBillAmount+foodBillAmount));
// ---------------------------------------------------------------
let age=22;
console.log('Start',age);
function printBill(name,amount){
  console.log("---------");
  console.log("Your bill is-",name);
  console.log("Rs:",amount);

}
function calculateBillAmount(price,gst){
  let BillAmount=price+price*gst;
  return BillAmount;
}
console.log("MID");

let r1=calculateBillAmount(40,0.3);
printBill("MangooJuice",r1);

let r2=calculateBillAmount(90,0.2);
printBill("GrapesJuice",r2);

let r3=calculateBillAmount(100,0.9);
printBill("fries",r3);
console.log("END");
function printBill(name,amount){
  console.log("---------");
  console.log("Your bill is- ",name);
  console.log("$:",amount);

}
 const printBill = function printBillXYZ(name,amount) {
  console.log("---------");
  console.log("Your bill is- ",name);
  console.log("$:",amount);
 }     