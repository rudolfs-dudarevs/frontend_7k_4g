function checkZIP() {
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      ee : [ '^(EE-)?\\d{4}$', "Estonias ZIPs jabut 4 simboliem un jasakas ar EE-: e.g. EE-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{4}$', "Lithuanias ZIPs jabut 4 simboliem un jasakas ar LT-: e.g. LT-3001 or 3007" ],
      pl : [ '^(PL-)?\\d{4}$', "Polands ZIPs jabut 4 simboliem un jasakas ar PL-: e.g. PL-3001 or 3007" ],
    };
  
    var country = document.getElementById("country").value;
    var ZIPField = document.getElementById("ZIP");
  
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity("");
    }
    else {
      ZIPField.setCustomValidity(constraints[country][1]);
    }
  }

function printValues() {
    var array = [];
    var inputs = document.getElementsByTagName('input');
    for(var key in inputs) {
      var value = inputs[key].value;
      array.push(value);
    }
    alert(array);
}

window.onload = function () {
    document.getElementById("country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    document.getElementById("form").addEventListener('submit', printValues);
}