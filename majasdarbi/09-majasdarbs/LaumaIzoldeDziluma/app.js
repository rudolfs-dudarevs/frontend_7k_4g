const dogSelector = document.getElementById('dogSelector');
const dogImg = document.getElementById('dogImg');

function renderDogData(data) {
    data.forEach(breed => {
        dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
    })
}

function renderDog(data) {
    dogImg.innerHTML = `<img src='${data.message}'>`
}

function getDogImg() {
    const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

    fetch(url)
        .then(response => response.json())
        .then(data => renderDog(data))
        .catch(error => alert(error));
}

renderDogData(data);
dogSelector.addEventListener('change', getDogImg);
