function checkZIP() {
  var constraints = {
    lv : [ '^(LV-)?\\d{4}$', "Latvijas ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
    ar : [ '^(AR-)?\\d{4}$', "Argentīnas ZIPs jabut vismaz 4 simboliem un jasakas ar AR-:" ],
    bz : [ '^(BZ-)?\\d{4}$', "Belizas ZIPs jabut vismaz 4 simboliem un jasakas ar BZ-" ],
    ht : [ '^(HT-)?\\d{4}$', "Haiti ZIPs jabut vismaz 4 simboliem un jasakas ar HT-" ],
  };

  var country = document.getElementById("Country").value;
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
  document.getElementById("ZIP").oninput = checkZIP;
  document.getElementById("form").addEventListener('submit', printValues);
}
