function getValue() {
    let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];
    let arrayId = prompt("Enter number from 0 to 25");
    let output = document.getElementById('promptAnswer');
    output.innerHTML = characters[arrayId];

    if(arrayId > 25 || arrayId < 0 || arrayId === null || arrayId === '') {
        alert("False. Enter valid value");
        getValue();
    } else {
        alert(`True. Entered correct value ${arrayId}`)
    };

    document.addEventListener("keypress", (eventObject) => {
        if (eventObject.key === characters[arrayId]) {
            alert("Correct");
        } else {
            alert("Check value");
        }
    })
};