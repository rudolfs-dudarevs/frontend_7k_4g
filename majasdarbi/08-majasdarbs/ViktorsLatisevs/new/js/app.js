
let userForm = document.getElementById("user-form");
let formInputs = Array.from(userForm.elements);

const validationRules = {
    textbox: (value) => {
        let isValid = Boolean(value);

        return isValid
    },
    email: (value) => {
        let regEx = /.+@gmail.com/;
        let isValid = regEx.test(value);

        return isValid
    },

    minmax: (value) => {
        let regEx = /.+@gmail.com/;
        let isValid = regEx.test(value);

        return isValid
    },   
    password: (value) => {
        let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
        let isValid = regEx.test(value);

        return isValid
    },
    passwordcombined: (value) => {
        let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
        let isValid = regEx.test(value);

        return isValid
    },     
    zip: (value) => {
        let isValid = Boolean(value);

        return isValid
    },
    poPattern: (value, country) => {
        let isValid;

        if(value) {
            const regEx = {
                lv: /^(LV-)?\d{4}$/,
                lt: /^(LT-)?\d{4}$/,
                ee: /^(EE-)?\d{4}$/,
                ru: /^(EE-)?\d{4}$/,

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
        case "textbox":
            handleValidity(inputField, "Teksta lauks field must contain a value.");
            break;
        case "email":
            handleValidity(inputField, "Epasta laukam jasatur @ un domena vardam jabut gmail.com");
            break;
        case "minmax":
            handleValidity(inputField, "Teksta lauka garums ir no 5 lidz 10 simboliem");
            break;
        case "password":
            handleValidity(inputField, "Jāsatur vismaz 1 lielais burts, 1 mazais burts un 1 cipars");
            break;
        case "passwordcombined":
            handleValidity(inputField, "Jāsatur vismaz 8 simboli 1 lielais burts, 1 mazais burts un 1 cipars");
            break;            
        case "zip":
            handleValidity(inputField, "PO number field must contain value.");
            handlePoValidity("Wrong format PO number for selected country");
            break;
        case "country":
            handlePoValidity("Wrong format PO number for selected country");
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
    const poField = document.getElementById("zip");
    const countryField = document.getElementById("country");

    if(validationRules.poPattern(poField.value, countryField.value)) {
        setFieldValid(poField);
    } else {
        setFieldInvalid(poField, errorMsg);
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


const resetErrorState = (event) => {
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
    if(inputField.tagName !== "BUTTON" && inputField.tagName !== "SELECT") {
        inputField.addEventListener("input", resetErrorState);
        inputField.addEventListener("blur", validateField);
    } else if(inputField.tagName === "SELECT") {
        inputField.addEventListener("change", handlePoValidity);
    }
})
userForm.addEventListener("submit", handleFormSubmit)