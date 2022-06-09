function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      us : ['^[0-9]{5}([- /]?[0-9]{4})?$', "Use US Zip Code + 4 digit extension Postal Code"],
      ee : ['^\\d{5}$', "Use 5 digit ZIP code"],
      se : ['^\\d{5}$', "Use 5 digit ZIP code"],
    };

    var country = document.getElementById("country").value;
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
    // izveidtot tukšu masivu kura saglabam vertibas
    var matches = [];

    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
    var inputs = document.getElementsByTagName('input');

    // ar for ciklu priekš katra no vertibam var key in inputs
    for(var key in inputs) {
        var value = inputs[key].value;
        matches.push(value);
    }

    // dabujam vertibas inputs[key].value
    
    // ja value eksiste 
    
    // pievinojam vertibu masiva .push(value);

    // izvadam masivu vertibas uz ekrana alert();
    alert(matches);
}

window.onload = function () {
    document.getElementById("country").onchange = checkZIP;
    document.getElementById("zip").oninput = checkZIP;
    document.getElementById("form").addEventListener('submit', printValues);

    // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
}