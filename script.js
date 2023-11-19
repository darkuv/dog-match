const images = document.querySelector("#images");
const biggerPic = document.querySelector("#modalinsidecontBigpic");
let currentImage = null;
const handleError = (error) => {
    console.log(error);
};

fetch("https://dog.ceo/api/breeds/image/random/$results=1")

    .then(res => res.json())
    .then(res => displayResults(res))
    .catch(err => handleError(err));
const displayResults = (res) => {
    images.innerHTML = '<img src="' + res.message + '">';
    biggerPic.innerHTML = '<img src="' + res.message + '">';
    currentImage = '<img src="' + res.message + '">';
};

function opnieuw() {
    fetch("https://dog.ceo/api/breeds/image/random/$results=1")

        .then(res => res.json())
        .then(res => displayResults1(res))
        .catch(err => handleError(err));
    const displayResults1 = (res) => {
        images.innerHTML = '<img src="' + res.message + '">';
        biggerPic.innerHTML = '<img src="' + res.message + '">';
        currentImage = '<img src="' + res.message + '">';
    };
}


const modalBP = document.getElementById("modalBigpic");
const span = document.getElementsByClassName("close")[0];

images.onclick = function () {
    modalBP.style.display = "block";
};
span.onclick = function () {
    modalBP.style.display = "none";
};

let arrayLove = [];
let keyLove = 0;
let arrayHate = [];
let keyHate = 0;
function loveF() {
    arrayLove[keyLove] = currentImage;
    console.log(arrayLove);
    keyLove++;
    opnieuw();
}
function hateF() {
    arrayHate[keyHate] = currentImage;
    console.log(arrayHate);
    keyHate++;
    opnieuw();
}


const modalSC = document.getElementById("modalSavedCol");
const SavedCol = document.querySelector("#modalinsidecontSavedCol");
const span1 = document.getElementsByClassName("close1")[0];
const showCollectionButton = document.getElementById("showCollection");
showCollectionButton.onclick = function () {
    modalSC.style.display = "block";
    let listLoved = arrayLove.toString();
    let listHated = arrayHate.toString();
    SavedCol.innerHTML = "You loved: " + listLoved + "<br> You didn't like so much: " + listHated;
};
span1.onclick = function () {
    modalSC.style.display = "none";
};