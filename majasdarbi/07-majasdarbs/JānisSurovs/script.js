
let initialize = () => {
    let usernameOutput = document.getElementById("username");
    let usernameOutput = document.getElementById("speciality");

    let username = localStorage.getItem("username");
    let speciality = localStorage.getItem("speciality");

    if(username) {
        usernameOutput.innerHTML = username;
    } else {
    localStorage.setItem("username", "Student");
    }
}


window.addEventListener("load", initialize)