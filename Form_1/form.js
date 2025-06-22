const title = document.getElementById("greetings");

const handleUserName = (e) => {
  // console.log("typed");
  // console.log("----");
  // console.log(e);
  const elem = e.target;
  console.log(elem.value);
  title.innerText = `Hello ${elem.value}!`;
};
const handleFormSubmit = (e) => {
  e.preventDefault();
  // console.log(e);
  // const input1 = e.target[0];
  // const input2 = e.target[1];
  // const input3 = e.target[2];
  // console.log(input1.value,input2.value,input3.value);
  const userName2 = e.target.usernameTemp.value;
  const email2 = e.target.baseEmail.value;
  const password2 = e.target.abcdPassword.value;
  if (email2.endsWith("@lpu.in")) {
    alert("Please use your LPU email id");
  } else {
  }
  {
  }
};
