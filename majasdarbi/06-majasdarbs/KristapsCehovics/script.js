let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let getValue = () => {
    arrayId = prompt("Ievadiet skaitli no 0 lidz 25",);
    if (arrayId >= 0 && arrayId < 26) {
        printValues();
    }
    else {
        alert(`Skaitlis ${arrayId} neatbilst intervālam no 0 līdz 25`)
        getValue();
    }
}

let printValues = () => {
    output = document.getElementById('main');
    output.innerText = characters[arrayId];
}

getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert('PAREIZI');
    } else {
        alert('NEPAREIZI');
    }
})



