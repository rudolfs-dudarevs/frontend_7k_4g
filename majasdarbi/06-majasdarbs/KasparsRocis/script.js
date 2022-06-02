
let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];

let length = characters.length -1;

let arrayId;

//let output = document.getElementById('main');
//output.innerText = characters[arrayId];

let getValue = () => {
    arrayId = prompt("Ievadiet skaitli no 0 līdz " + length);

    if (arrayId >= 0 && arrayId < characters.length) {
        printValues()
    }

    else {
        alert("Skaitlis neietilpst intervālā. Mēģini vēlreiz.")
        getValue()
    }
}

let printValues = () => {
    output = document.getElementById("main");
    if (arrayId) {
        output.innerText = characters[arrayId];
    }
    else{
        output.innerText = "Skaitlis netika ievadīts"
    }
}

getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert("Pareizi");
    } else {
        alert("Nepareizi");
    }
})




