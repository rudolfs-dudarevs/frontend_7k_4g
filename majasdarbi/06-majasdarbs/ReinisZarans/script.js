window.onload = () => {
let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];
let arrayId;
let output;

let getValue = () => {
    arrayId = prompt("Ievadiet skaitli no 0 lidz 26", );
       if (arrayId >= 0 && arrayId <=26) {
        printValues()
    }
    else {
        alert("Kļūda! Ievadīts pārāk liels skaitlis. Mēģini vēlreiz.")
        getValue()
    }
}

let printValues = () =>{
    output = document.getElementById('main');
    output.innerText = characters[arrayId];
}
getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert('Pareizi');
    } else {
        alert('Nepareizi');
    }
})
}