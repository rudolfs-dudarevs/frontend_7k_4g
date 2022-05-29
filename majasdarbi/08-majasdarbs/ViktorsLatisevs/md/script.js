function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      ee : [ '^(EE-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      ru : [ '^(RU-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
    };
  
    var country = document.getElementById("Country").value;
    var ZIPField = document.getElementById("ZIP");
  
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    // Parbaude 
    if (constraint.test(ZIPField.value)) {
    }
    else {
      ZIPField.setCustomValidity("Wrong Country Postcode");
      ZIPField.reportValidity();
    }
  }




  

    // izveidtot tukšu masivu kura saglabam vertibas

    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
   
    // ar for ciklu priekš katra no vertibam var key in inputs
    
    // dabujam vertibas inputs[key].value
    
    // ja value eksiste 
    
    // pievinojam vertibu masiva .push(value);

    // izvadam masivu vertibas uz ekrana alert();
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


    // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
}