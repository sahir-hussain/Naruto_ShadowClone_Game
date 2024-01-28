let narutoImages = [];

function loadImages() {
    // Provide the array of image names directly
    const imageNames = ['naruto-scared.gif','naruto-shippuden-anime.gif','naruto-shippuden-naruto-run.gif','naruto-uzumaki.gif','naruto-uzumaki-naruto.gif','Trap.gif','trapGif.gif','trapItachi.gif','trapKakashi.gif','twtjjk.gif','uzumaki-naruto-crying.gif','waking-up.gif'];

    // Construct the image URLs based on the provided names
    narutoImages = imageNames.map(imageName => `images/${imageName}`);

    // Start the game after loading images
    startGame();
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
