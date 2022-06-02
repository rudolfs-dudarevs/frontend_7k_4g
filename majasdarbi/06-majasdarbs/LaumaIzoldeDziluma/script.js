let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];

let getValue = () => {
    arrayId = prompt("Ievadiet skaitli no 0 lidz 25", );
    if (arrayId >= 0 && arrayId <= characters.length - 1) {
        printValues();
    } else { alert(`Skaitlis ${arrayId} neietilpst intervālā 0 - 25`);
    getValue()
    }
}

let printValues = () => {
    output = document.getElementById('main');
    output.innerText = characters[arrayId];
}

getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        console.log('PAREIZI');
    } else {
        console.log('NEPAREIZI');
    }
})




