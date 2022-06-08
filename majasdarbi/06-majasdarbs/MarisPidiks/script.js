    let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];
    let arrayId = prompt("Ievadiet skaitli no 0 lidz 26", );
    let output;
    
    let getValue = () => {
           if (arrayId >= 0 && arrayId <= characters.length -1) {
            printValues()
        }
        else {
            alert("Skaitlis neietilpst piedāvātajā diapazonā!")
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


