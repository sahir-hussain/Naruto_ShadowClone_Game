const images = ['naruto-scared.gif', 'naruto-shippuden-anime.gif', 'naruto-shippuden-naruto-run.gif', 'naruto-uzumaki.gif', 'naruto-uzumaki-naruto.gif', 'Trap.gif', 'trapGif.gif', 'trapItachi.gif', 'trapKakashi.gif', 'twtjjk.gif', 'uzumaki-naruto-crying.gif', 'waking-up.gif'];

const correctAnswer = 'uzumaki-naruto.gif';
let attempts = 5;

function displayPopup(message, isCorrect) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `<p>${message}</p>`;

    if (isCorrect) {
        popup.classList.add('correct');
    } else {
        popup.classList.add('incorrect');
    }

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
        if (attempts === 0) {
            displayGameOverPopup();
        }
    }, 2000);
}

function displayGameOverPopup() {
    const gameOverPopup = document.createElement('div');
    gameOverPopup.classList.add('game-over-popup');
    gameOverPopup.innerHTML = '<p>Game Over</p><button onclick="resetGame()">Play Again</button>';
    document.body.appendChild(gameOverPopup);
}

function resetGame() {
    attempts = 5;
    document.querySelector('.game-over-popup').remove();
    showRandomImage();
}

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = `images/${images[randomIndex]}`;
    const imageElement = document.getElementById('image');
    imageElement.src = imageUrl;

    if (imageUrl === `images/${correctAnswer}`) {
        imageElement.dataset.isCorrect = 'true';
    } else {
        imageElement.dataset.isCorrect = 'false';
    }
}

document.getElementById('check-button').addEventListener('click', function () {
    const selectedImage = document.getElementById('image');
    const isCorrect = selectedImage.dataset.isCorrect === 'true';

    if (isCorrect) {
        displayPopup('Congratulations! You found the real Naruto.', true);
    } else {
        attempts--;
        document.getElementById('attempts').innerText = attempts;
        displayPopup(`Wrong guess! ${attempts} attempts left.`, false);
        showRandomImage();
    }
});

showRandomImage();
