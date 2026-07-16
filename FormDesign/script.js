const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const successMessage = document.getElementById("successMessage");


//Show error 

function showError(input,message){
    const inputBox = input.parentElement;
    inputBox.classList.add("error");
    inputBox.classList.remove("success");
    inputBox.querySelector("small").innerText = message;
}

//show success
function showSuccess(input){
    const inputBox = input.parentElement;
    inputBox.classList.add("success");
    inputBox.classList.remove("error");
    inputBox.querySelector("small").innerText ="";
}

//email validation 
function validateEmail(emailValue){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
}

//Phone validation
function validatePhone(phoneValue){
    return /^[0-9]{10}$/.test(phoneValue);
}

//password validation 
function validatePassword(pass){
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(pass);
}

//password Strength
password.addEventListener("input",function(){

    const value = password.value;

    let strength = 0;

    if(value.length>=8)strength++;
    if(/[A-Z]/.test(value)) strength++;
    if(/[a-z]/.test(value)) strength++;
    if(/[0-9]/.test(value)) strength++;
    if(/[@$!%*?&]/.test(value)) strength++;

    if(strength<=2){
        strengthBar.style.width = "30%";
        strengthBar.style.background = "#ff4d4d";
        strengthText.innerText = "Weak";
        strengthText.style.color = "#ff4d4d";
    }
    else if(strength == 3){
        strengthBar.style.width = "60%";
        strengthBar.style.background = "orange";
        strengthText.innerText = "Medium";
        strengthText.style.color = "orange";
    }
    else if(strength == 4){
        strengthBar.style.width = "80%";
        strengthBar.style.background = "#00bcd4";
        strengthText.innerText = "Good";
        strengthText.style.color = "#00bcd4";
    }
    else{
        strengthBar.style.width = "100%";
        strengthBar.style.background = "#28a745";
        strengthText.innerText = "Strong";
        strengthText.style.color = "#28a745";
    }
});

//submit form
form.addEventListener("submit",function(e){
    e.preventDefault();

    let valid = true;

    //name
    if(nameInput.value.trim()===""){
        showError(nameInput,"Full Name is required");
        valid = false;
    }else{
        showSuccess(nameInput);
    }
    //email
    if(!validateEmail(email.value.trim())){
        showError(email,"Enter a valid Email");
        valid = false;
    }else{
        showSuccess(email);
    }

    //phone
    if(!validatePhone(phone.value.trim())){
        showError(phone,"Enter a valid 10-digit phone number");
        valid = false;
    }else{
        showSuccess(phone);
    }

    //password
    if(!validatePassword(password.value)){
        showError(
            password,
            "Minimum 8 characters with uppercase,lowercase,number and specialcharacter"
        );
        valid = false;
    }else{
        showSuccess(password);
    }

    if(
        confirmPassword.value ===""||
        confirmPassword.value !== password.value
    ){
        showError(confirmPassword,"Passwords do not match");
        valid = false;
    }else{
        showSuccess(confirmPassword);
    }

    //success
    if(valid){
        alert("👏Registration Successfull!!");
        form.reset();

        strengthBar.style.width = "0%";
        strengthText.innerText ="";
    }
});