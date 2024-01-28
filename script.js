let narutoImages = [];

function loadImages() {
    fetch('images/')
        .then(response => response.json())
        .then(data => {
            narutoImages = data.map(image => `images/${image}`);
            console.log('Generated Image URLs:', narutoImages);
            startGame();
        })
        .catch(error => console.error('Error loading images:', error));
}


function startGame() {
    displayNarutoImages();
}

function displayNarutoImages() {
    const narutoContainer = document.getElementById('naruto-images');
    narutoContainer.innerHTML = '';

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

    if (selectedIndex === 0) {
        popupText.textContent = 'You found the real Naruto! Well done!';
    } else {
        popupText.textContent = 'Oops! That was a Shadow Clone. Try again!';
    }

    continueBtn.textContent = 'Play Again';
    continueBtn.onclick = resetGame;

    popup.style.display = 'block';
}

function nextRound() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    displayNarutoImages();
}

function resetGame() {
    const continueBtn = document.getElementById('continue-btn');
    continueBtn.textContent = 'Continue';
    continueBtn.onclick = nextRound;
    displayNarutoImages();
}

document.addEventListener('DOMContentLoaded', loadImages);
