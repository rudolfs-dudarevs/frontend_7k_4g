function showPassFunction() {
    let pw = document.getElementById("pwInput");
    if(pw.type === "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
};

function checkEmail () {
    let email = document.getElementById('email');
    var filter = /.+@gmail\.com/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
    }
};

function zipValidation() {
    var forceZip = {
        LV : ['^(LV-)?\\d{4}$'],
        LT : ['^(LT-)?\\d{4}$'],
        EE : ['^(EE-)?\\d{4}$'],
    };

    var country = document.getElementById("selectCountry").value;
    var zip = document.getElementById("zip");

    var checkZip = new RegExp(forceZip[country][0],"");
    console.log(checkZip)
};


function printValues(){
    var matches = [];
    var input = document.getElementsByTagName('input');

    for (var key in inputs){
        var values = input[key].value;
        matches.push(values);
    }

    alert(matches);
}

window.onload = function () {
    document.getElementById("email").onchange = checkEmail;
    document.getElementById("form").addEventListener('submit', printValues);
}