const email = document.getElementById("email_contact");
const nameInp = document.getElementById("name_contact");
const nameLabel = document.getElementById("nameLabel");
const textfield = document.getElementById("write");
const textLabel = document.getElementById("writeLabel");
const send = document.getElementById("send_contact");
const emailLabel = document.getElementById("emailLabel");
const h3 = document.querySelector("h3");
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
/*onclick functions */
send.addEventListener("click", () => {
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
send.addEventListener("click", () => {
  invalidInput(
    nameInp,
    nameLabel,
    "Full name needs to be a minimum of 6 characters",
    "Full name",
    6
  );
});
send.addEventListener("click", () => {
  invalidInput(
    textfield,
    textLabel,
    "Message needs to contain a minimum of 20 characters",
    "Your message here:",
    20
  );
});
/*send */
send.addEventListener("click", (click) => {
  click.preventDefault();
  if (
    emailVal() === true &&
    inputLength(nameInp, 6) === true &&
    inputLength(textfield, 20) === true
  ) {
    window.location = "message.html";
  } else {
    h3.innerHTML = `<h3>Sorry something went wrong, please check your information below</h3>`;
  }
});
