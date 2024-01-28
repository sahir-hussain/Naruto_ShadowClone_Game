let narutoImages = ['images/naruto-scared.gif'];

function startGame() {
    displayNarutoImages();
}

function displayNarutoImages() {
    const narutoContainer = document.getElementById('naruto-images');
    narutoContainer.innerHTML = '';

    const imgElement = document.createElement('img');
    imgElement.src = 'images/naruto-scared.gif';
    imgElement.addEventListener('click', () => checkGuess(0));
    narutoContainer.appendChild(imgElement);
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
