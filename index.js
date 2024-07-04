//for span tag
let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let addressError = document.getElementById("address-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("name-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let contactName = document.getElementById("contact-name").value;

  if (contactName.length == 0) {
    nameError.innerHTML = "Full name is required";
    return false;
  } else if (!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  } else {
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validatePhone() {
  let contactNumber = document.getElementById("contact-number").value;

  if (contactNumber.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  } else if (!contactNumber.match(/^\d{11}$/)) {
    phoneError.innerHTML = "Phone should be numbers and 11 digits only";
    return false;
  } /*else if (contactNumber.length !== 11) {
    phoneError.innerHTML = "Phone number should be 11 digits";
    return false;
  }*/ else {
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
}

function validateAddress() {
  let contactAddress = document.getElementById("contact-address").value;

  if (contactAddress.length == 0) {
    addressError.innerHTML = "Address is required";
    return false;
  } else {
    addressError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  }
}

function validateEmail() {
  let contactEmail = document.getElementById("contact-email").value;

  if (contactEmail.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
}
