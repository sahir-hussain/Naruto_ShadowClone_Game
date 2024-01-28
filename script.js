let narutoImages = [];

function loadImages() {
    // Fetch all images from the "images" folder
    const imagesFolder = 'images/';
    fetch(imagesFolder)
        .then(response => response.json())
        .then(data => {
            narutoImages = data.map(image => `${imagesFolder}${image}`);
            startGame();
        })
        .catch(error => console.error('Error loading images:', error));
}

function startGame() {
    displayNarutoImages();
}


let correctNarutoIndex;
let chancesLeft = 5;

function startGame() {
    displayNarutoImages();
}

function displayNarutoImages() {
    const narutoContainer = document.getElementById('naruto-images');
    narutoContainer.innerHTML = '';

    correctNarutoIndex = Math.floor(Math.random() * narutoImages.length);

    for (let i = 0; i < narutoImages.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = narutoImages[i];
        imgElement.addEventListener('click', () => checkGuess(i));
        narutoContainer.appendChild(imgElement);
    }
}

function checkGuess(selectedIndex) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    const continueBtn = document.getElementById('continue-btn');
    const chanceCount = document.getElementById('chance-count');

    if (narutoImages[selectedIndex].toLowerCase().includes('trap')) {
        // If the image name contains "trap"
        popupText.textContent = "It was a trap, you fake weeb. You disqualify as a shut-in otaku!";
    } else if (selectedIndex === correctNarutoIndex) {
        // If the selected Naruto is correct
        popupText.textContent = 'You found the real Naruto! Well done!';
    } else {
        // If the selected Naruto is incorrect
        popupText.textContent = 'Oops! That was a Shadow Clone. Try again!';
        chancesLeft--;
        chanceCount.textContent = chancesLeft;
    }

    if (chancesLeft === 0 || selectedIndex === correctNarutoIndex) {
        // If chances are exhausted or correct Naruto is found
        continueBtn.textContent = 'Play Again';
        continueBtn.onclick = resetGame;
    }

    popup.style.display = 'block';
}


function nextRound() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

    if (chancesLeft > 0) {
        displayNarutoImages();
    }
}

function resetGame() {
    chancesLeft = 5;
    const chanceCount = document.getElementById('chance-count');
    chanceCount.textContent = chancesLeft;

    const continueBtn = document.getElementById('continue-btn');
    continueBtn.textContent = 'Continue';
    continueBtn.onclick = nextRound;

    displayNarutoImages();
}
