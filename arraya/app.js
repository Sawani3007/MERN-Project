//Object
// const cse018 = {
//   name:"Sawani",
//   age:"20",
//   bloodGrp :"A+",
// };
//Read
// const studentName = cse018.name;
// console.log("StudentName:",studentName);
// //Update
// cse018.bloodGrp="B+";
// //add key-value
// cse018.college="LPU";
// console.log("cse018:",cse018);
//deleting 
// const person_he_100 = {
//   name :"",
//   height :"100",
//   weight :"2000",
//   college: "",
//   rollNumber: "",
//   getBMI: function() =>{
//     const bmi = this.weight/this.height**2;
//     console.log('BMI for ${this.name} is ${bmi}' );
//   },
// };
// person.getBMI();
// person.weight = 90;

// const person1 = {
//   name:"Sawani",
//   height:143,
//   weight:46,
//   college:"LPU",
// rollnu:"1234",
// marks:{
//   EVS:42,
//   maths:25,
// },};
//   const person2={ ...person1 };
//   person2.name="Raj";
//   person2.marks.maths=20;
//   console.log("Person1",person1);


//ARRAYS
// const arr1=["tata","mahindra","suzuki","hyundai"];
// const arr2=["kia","byd","mitsubsihi"];
// // console.log(arr);
// //READ
// //1.
// const company=arr1[1];
// console.log(company);

// //2.
// const [a,b,c]=arr1;
// console.log(b,c);

// //3.add at end
// arr1.push("Waganor");
// //4.remove at start
// arr1.shift();
// //removing and adding elements
// arr1.splice(1,2,"kia","byd","honda");
// //remove new elements
// arr1.splice(1,1);
// //adding new elements
// arr1.splice(1,0,"john");
// const arr = {
//   {name:"sawani",city:"Delhi"},
//   {name:"Anika",city:"Haridwar"},
//   {name:"Sui",city:"uk"},
// }

// const myFunc = {a,b,c,d} => {
//   if(a=="mn") return true;
//   else return false;
// };
// const arr=["ab","xy","mn","ab","pq"];
// const elem = arr.find(myFunc);
// console.log("elements:",elem);
const arr = [
  {name:"Sawani",city:"Delhi"},
  {name:"Abhinav",city:"up"},
  {name:"Anika",city:"Mathura"},
];
const myFunc = (a) =>{
  if(a.name==="Abhinav") return true;
  return false;
};
const ans=arr.find(myFunc);
console.log(ans);
const myFunc = (elem)=>{
  if(elem.score < 25){
    return( ...elem,remark:"fail");
  }else{
    return (...elem,remark:"pass");
  }
};
const resArr = arr.map(myFunc);
console.log(": resArr",resArr);