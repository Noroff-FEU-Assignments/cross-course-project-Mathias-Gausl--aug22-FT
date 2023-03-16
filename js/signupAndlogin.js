const email = document.getElementById("em");
const emailLabel = document.getElementById("emailLabel");
const pass = document.getElementById("pass");
const passLabel = document.getElementById("passLabel");
const submit = document.getElementById("submit");
const fullName = document.getElementById("full_name");
const nameLabel = document.getElementById("fName");
const repass = document.getElementById("rePass");
const repassLabel = document.getElementById("rePassLabel");
const submitSignup = document.getElementById("submitSignup");


/*validation functions */

function emailVal() {
  const emailvalue = email.value;
  const verification = /\S+@\S+\.\S+/;
  return verification.test(emailvalue);
}
function invalidInput(input, label, errormessage, originalName, num) {
  if (input.value.trim().length >= num) {
    label.style.color = "white";
    input.style.border = "1px white solid";
    label.innerHTML = originalName;
  } else {
    label.style.color = "red";
    input.style.border = "2px red solid";
    label.innerHTML = errormessage;
  }
}
function inputLength(input, num) {
  const inputlength = input.value.trim().length;
  if (inputlength >= num) {
    return true;
  } else {
    return false;
  }
}
/*onclick */
if (submit != null) {
  submit.addEventListener("click", (click) => {
    click.preventDefault();
    if (inputLength(pass, 8) === true && emailVal() === true) {
      window.location = "index.html";
    }
  });
  submit.addEventListener("click", () => {
    invalidInput(
      pass,
      passLabel,
      "Password needs to be a minimum of 8 characters",
      "Password",
      8
    );
  });
  submit.addEventListener("click", () => {
    if (emailVal() === true) {
      emailLabel.style.color = "white";
      email.style.border = "1px white solid";
      emailLabel.innerHTML = "Email";
    } else {
      emailLabel.style.color = "red";
      email.style.border = "2px red solid";
      emailLabel.innerHTML = "Invalid Email";
    }
  });
}
if(submitSignup != null){
  submitSignup.addEventListener("click", () => {
    invalidInput(
      repass,
      repassLabel,
      "Password needs to be a minimum of 8 characters",
      "Repeat Password",
      8
    );
  });
  submitSignup.addEventListener("click", () => {
    invalidInput(
      fullName,
      nameLabel,
      "Full name needs to be a minimum of 6 characters",
      "Full Name",
      6
    );
  });
  submitSignup.addEventListener("click", () => {
    if (emailVal() === true) {
      emailLabel.style.color = "white";
      email.style.border = "1px white solid";
      emailLabel.innerHTML = "Email";
    } else {
      emailLabel.style.color = "red";
      email.style.border = "2px red solid";
      emailLabel.innerHTML = "Invalid Email";
    }
  }); 
  submitSignup.addEventListener("click", () => {
    invalidInput(
      pass,
      passLabel,
      "Password needs to be a minimum of 8 characters",
      "Password",
      8
    );
  });
  submitSignup.addEventListener("click", (click) => {
    click.preventDefault();
    if (inputLength(repass, 8) === true && inputLength(fullName, 6) && inputLength(pass,8) === true && emailVal() === true) {
      window.location = "index.html";
    }
  });
}
