const timeDelayInMs = 10000;
const callbackFunc = () =>{
  console.log("Hello");
}
//setTimeout(callbackFunc,timeDelayInMs);
setInterval(callbackFunc,timeDelayInMs);
console.log("END");
