function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      ch : [ '^(CH-)?\\d{4}$', "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950" ],
      fr : [ '^(F-)?\\d{5}$' , "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012" ],
      de : [ '^(D-)?\\d{5}$' , "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345" ],
    };
  
    var country = document.getElementById("Country").value;
    var ZIPField = document.getElementById("zip");
  
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    // Parbaude
    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity("");
    }
    else {
      // Izvada kļudas paziņojumu
      ZIPField.setCustomValidity(constraints[country][1]);
    }
  }

function printValues() {


  var matches = [];
    var inputs = document.getElementsByTagName('input');

    for(var key in inputs) {
        var value = inputs[key].value;
        matches.push(value);
    }

    alert(matches);
}

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("zip").oninput = checkZIP;
    document.getElementById("form").addEventListener('submit', printValues);
    
}