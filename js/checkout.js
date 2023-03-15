const fullName = document.getElementById("name");
const email = document.getElementById("epost");
const number = document.getElementById("number");
const adress = document.getElementById("adress");
const card = document.getElementById("card-number");
const exp = document.getElementById("expiration");
const cvc = document.getElementById("cvc");
const zip = document.getElementById("post-code");
const next_btn = document.getElementById("next_btn");
const next_btn2 = document.getElementById("next2_btn");
const submit = document.getElementById("checkout");
const infPart1 = document.querySelector(".information");
const infPart2 = document.querySelector(".infoPart2");
const pay = document.querySelector(".paySection");
const form = document.querySelector("form");
const h2 = document.querySelector("h1");
const nameLabel = document.getElementById("nameLabel");
const emailLabel = document.getElementById("emailLabel");
const numberLabel = document.getElementById("numberLabel");
const adressLabel = document.getElementById("adressLabel");
const zipLabel = document.getElementById("zipLabel");
const cardLabel = document.getElementById("cardLabel");
const expLabel = document.getElementById("expLabel");
const cvcLabel = document.getElementById("cvcLabel");

/* validation functions */


function emailVal() {
  const emailInput = email.value;
  const verification = /\S+@\S+\.\S+/;
  return verification.test(emailInput)
  }
  function inputLength(input, num) {
    const inputlength = input.value.trim().length;
    if (inputlength >= num) {
      return true;
    } else {
      return false;
    }
  }
  function inputLengthStatic(input, num) {
    const inputlength = input.value.trim().length;
    if (inputlength === num) {
      return true;
    } else {
      return false;
    }
  }
  function invalidInput(input, label,errormessage,originalName, num){
    if(input.value.trim().length >= num){
      label.style.color="white";
      input.style.border="1px white solid";
      label.innerHTML= originalName;
    }
    else{
      label.style.color="red";
      input.style.border="2px red solid";
      label.innerHTML= errormessage;
    }
  }
  function invalidInputStatic(input, label,errormessage,originalName, num){
    if(input.value.trim().length === num){
      label.style.color="white";
      input.style.border="1px white solid";
      label.innerHTML= originalName;
    }
    else{
      label.style.color="red";
      input.style.border="2px red solid";
      label.innerHTML= errormessage;
    }
  }


/* onclick functions */

next_btn.addEventListener("click", (click)=>{
    click.preventDefault()
    if(inputLength(fullName, 8)=== true && inputLength(number, 8)=== true && emailVal()=== true){
        infPart1.style.display ="none";
        infPart2.style.display ="block";
        next_btn.disabled= true;
        h2.innerHTML = "Checkout"
    }
    else{
        h2.innerHTML = `<h3>Sorry something went wrong, please check your information below</h3>`
      
    }
})
next_btn2.addEventListener("click", (click)=>{
    click.preventDefault()
    if(inputLength(adress, 6)=== true && inputLength(zip, 4)=== true){
        infPart2.style.display ="none";
        pay.style.display ="block";
        h2.innerHTML = "Checkout"
    }
    else{
        h2.innerHTML = `<h3>Sorry something went wrong, please check your information below</h3>`
    }
})
submit.addEventListener("click", (click)=>{
    click.preventDefault()
    if(inputLengthStatic(card, 16)=== true && inputLengthStatic(exp, 4)=== true && inputLengthStatic(cvc, 3) === true){
        window.location= "checkout_finish.html"
        localStorage.clear();
        h2.innerHTML = "Checkout"
    }
    else{
        h2.innerHTML = `<h3>Sorry something went wrong, please check your information below</h3>`
    }
})
next_btn.addEventListener("click", ()=>{invalidInput(fullName, nameLabel,"Full name needs to be a minimum of 6 characters","Full name", 6)})
next_btn.addEventListener("click", ()=>{invalidInput(number, numberLabel,"Phone number needs to be a minimum of 8 digits","Phone number", 8)})
next_btn.addEventListener("click", ()=>{
  if(emailVal()=== true){
    emailLabel.style.color="white"
    email.style.border="1px white solid"
    emailLabel.innerHTML= "Email"
  }
  else{
    emailLabel.style.color="red"
    email.style.border="2px red solid"
    emailLabel.innerHTML= "Invalid Email"
  }})

next_btn2.addEventListener("click", ()=>{invalidInput(adress, adressLabel,"Adress needs to contain 5 or more characters ","Adress", 5)})
next_btn2.addEventListener("click", ()=>{invalidInput(zip, zipLabel,"Zip-code should consist of 4 digits","Zip-code", 4)})

submit.addEventListener("click", ()=>{invalidInputStatic(card, cardLabel,"Card number should consist of 16 digits","Card Number", 16)})
submit.addEventListener("click", ()=>{invalidInputStatic(exp, expLabel,"Expiration date should consist of 4 digits","Expiration date", 4)})
submit.addEventListener("click", ()=>{invalidInputStatic(cvc, cvcLabel,"CVC should consist of 3 digits","cvc/security code", 3)})
