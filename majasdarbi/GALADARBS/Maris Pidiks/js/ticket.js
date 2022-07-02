let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let ticketsCountInput = document.getElementById("tickets-count")
let submitBtn = document.getElementById("submit-btn")

const saveTicketData = () => {
    const values = {
        name: nameInput.value,
        email: emailInput.value,
        ticketsCount: ticketsCountInput.value
    }

    let dataJSON = JSON.stringify(values);
    localStorage.setItem("ticketsData", dataJSON);
}

submitBtn.addEventListener("click", saveTicketData);


