let userForm = document.getElementById("registration-form");
let formInputs = Array.from(userForm.elements);

const validationRules = {
    fullName: (value) => {
        let regEx = /\b[A-Z]\w*\b/;
        let isValid = regEx.test(value);
        return isValid
    },
    email: (value) => {
        let regEx = /.+@gmail\.com/;
        let isValid = regEx.test(value);
        return isValid
    },
    personalID: (value) => {
        let regEx = /^.{5,10}$/;
        let isValid = regEx.test(value);
        return isValid
    },
    pwInput: (value) => {
        let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
        let isValid = regEx.test(value);
        return isValid
    },
    week: (value) => {
        let isValid = Boolean(value)
        return isValid
    },
    time: (value) => {
        let isValid = Boolean(value)
        return isValid
    },
    poNumber: (value) => {
        let isValid = Boolean(value);
        return isValid
    },
    country: (value, country) => {
        let isValid;
        if(value) {
            const regEx = {
                lv: /^(LV-)?\d{4}$/,
                lt: /^(LT-)?\d{4}$/,
                ee: /^(EE-)?\d{4}$/,
                se: /^(SE-)?\d{5}$/,
                no: /^(NO-)?\d{5}$/,
            };
            isValid = regEx[country].test(value);
        } else {
            isValid = true;
        }
        return isValid
    }
}

const validateField = (event) => {
    let inputField = event.target;

    switch(inputField.name) {
        case "fullName":
            handleValidity(inputField, "Full name must start with a capital letter")
            break;
        case "email":
            handleValidity(inputField, "E-mail address must end with gmail.com")
            break;
        case "personalID":
            handleValidity(inputField, "The field must contain a value (min 5, max 10 numbers)")
            break;
        case "pwInput":
            handleValidity(inputField, "Password must contain at least one uppercase letter, one lowercase letter and special characters")
            break;
        case "week":
            handleValidity(inputField, "The field must contain a value")
            break;
        case "time":
            handleValidity(inputField, "The field must contain a value")
            break;
        case "poNumber":
            handleValidity(inputField, "PO number field must contain value.");
            handlePoValidity("Wrong format PO number for selected country");
            break;
        case "country":
            handleValidity(inputField, "Wrong format PO number for selected country")
            break;
        default:
            console.log("Not matching input field validation case found. Make sure the input element name attribute has correct value.");
            break;
    }
}

const isValid = (inputField) => {
    return validationRules[inputField.name](inputField.value)
}

const handleValidity = (inputField, errorMsg) => {
    if(isValid(inputField)) {
        setFieldValid(inputField);
    } else {
        setFieldInvalid(inputField, errorMsg);
    }
}

const handlePoValidity = (errorMsg) => {
    const zipField = document.getElementById("zip");
    const countryField = document.getElementById("selectCountry");
    if(validationRules.country(zipField.value, countryField.value)) {
        setFieldValid(zipField);
    } else {
        setFieldInvalid(zipField, errorMsg);
    }
}

const setFieldValid = (inputField) => {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
    inputField.setCustomValidity("");
}

const setFieldInvalid = (inputField, errorMsg) => {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
    inputField.setCustomValidity(errorMsg);
    inputField.reportValidity();
}

function resetErrorState(event) {
    let inputField = event.target;
    inputField.classList.remove("invalid");
    inputField.classList.remove("valid");
    inputField.setCustomValidity("");
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    let keyValuePairs = [];

    formInputs.forEach((inputField) => {
        if(inputField.tagName !== "BUTTON") {
             let valuePairString = `${inputField.name}: ${inputField.value}`;      
            keyValuePairs.push(valuePairString)
        }
    });
    alert(keyValuePairs.join("; "));
}

formInputs.forEach((inputField) => {
    if(inputField.type !== "submit") {
        if(inputField.tagname !== "BUTTON" && inputField.tagname !== "SELECT"){
            inputField.addEventListener("input", resetErrorState);
            inputField.addEventListener("blur", validateField);
        } else if (inputField.tagname === "SELECT") {
            inputField.addEventListener("change", handlePoValidity);
        }
    }
})

function showPassFunction() {
    let pw = document.getElementById("pwInput");
    if(pw.type === "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}

userForm.addEventListener("submit, handleForSubmit")

function printValues(){
    var array = [];
    var inputs = document.getElementsByTagName('input');
    for(var key in inputs) {
        var value = inputs[key].value;
        array.push(value);
    }
    alert(array);
}

window.onload = function () {
    document.getElementById("submitBtn").addEventListener('submit', printValues);
}