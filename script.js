// Shahraim
// let signupBtn = document.getElementById("signupbtn");
// let signinBtn = document.getElementById("signinbtn");
// let nameField = document.getElementById("nameField");
// let title = document.getElementById("title");

// let name = document.getElementById("name");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let input = document.querySelector("input");
// let display = document.getElementById("display");

// signupBtn.disabled = true;
// signinBtn.disabled = true;
// input.addEventListener("change", stateHandle);
// function stateHandle() {
//   if (document.querySelector("input").value === "") {
//     signupBtn.disabled = true; //button remains disabled
//     signinBtn.disabled = true; //button remains disabled
//   } else {
//     signupBtn.disabled = false; //button is enabled
//     signinBtn.disabled = false; //button is enabled
//   }
// }

// signupBtn.onclick = function () {

//   nameField.style.maxHeight = "0";
//   title.innerHTML = "Sign In";
//   signupBtn.classList.add("disable");
//   signinBtn.classList.remove("disable");
//   signupBtn.disabled = true
//   document.getElementById("email").value=""
//   document.getElementById("password").value=""
// };

// // signinBtn.onclick = function () {
// //   nameField.style.maxHeight = "0";
// //   title.innerHTML = "Sign In";
// //   signupBtn.classList.add("disable");
// //   signinBtn.classList.remove("disable");
// // };

// // signupBtn.classList.remove("disable");
// // signinBtn.classList.add("disable");

// Tanveer
let allUsersData = [];
// Signup
const name = document.getElementById("name");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");
const signUpFormSubmit = document.getElementById("signUpFormSubmit");
const signUpParent = document.getElementsByClassName("signUpParent");
const signInParent = document.getElementsByClassName("signInParent");
const signinbtn = document.getElementById("signinbtn");

signUpFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  allUsersData.push({
    name: name.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  });
  signUpParent[0].style.display = "none";
  signInParent[0].style.display = "block";
});

signinbtn.addEventListener("click", (e) => {
  name: name.value = "";
  signUpEmail.value = "";
  signUpPassword.value = "";
  signUpParent[0].style.display = "none";
  signInParent[0].style.display = "block";
});

// Login
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const signInFormSubmit = document.getElementById("signInFormSubmit");
const loginSignUpButton = document.getElementById("loginSignUpButton");
// Welcome
const welcomeParent = document.getElementsByClassName("welcomeParent");
const welcomeTitle = document.getElementById("welcomeTitle");

signInFormSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(allUsersData);
  const findObj = allUsersData.find((obj) => obj.email === signInEmail.value);
  console.log(findObj);
  console.log({
    signInEmail: signInEmail.value,
    signInPassword: signInPassword.value,
  });
  if (!findObj) {
    return alert("No Email Found");
  }
  if (findObj.password != signInPassword.value) {
    return alert("Wrong password");
  }

  welcomeTitle.innerText += ` ${findObj.name}`;
  signUpParent[0].style.display = "none";
  signInParent[0].style.display = "none";
  welcomeParent[0].style.display = "block";
  // return alert(JSON.stringify(findObj, null, 4));
});

loginSignUpButton.addEventListener("click", (e) => {
  signInEmail.value = "";
  signInPassword.value = "";
  signUpParent[0].style.display = "block";
  signInParent[0].style.display = "none";
});
