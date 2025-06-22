console.log("Hi");

let newDate = null;
const handleDateChange = (e) =>{
  newDate = new Date(e.target.value);
  console.log(" : newDate:",newDate);
  const targetMilliseconds  = newDate.getTime();
  console.log(" : targetMilliseconds:")
  
}