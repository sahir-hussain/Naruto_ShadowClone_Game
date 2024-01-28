let narutoImages = [
    'naruto-scared.gif',
    'naruto-shippuden-anime.gif',
    'naruto-shippuden-naruto-run.gif',
    'naruto-uzumaki.gif',
    'naruto-uzumaki-naruto.gif',
    'Trap.gif',
    'trapGif.gif',
    'trapItachi.gif',
    'trapKakashi.gif',
    'twtjjk.gif',
    'uzumaki-naruto-crying.gif',
    'waking-up.gif'
  ];
  
  function loadImages() {
    startGame();
  }
  
  function startGame() {
    displayNarutoImages();
  }
  
  function displayNarutoImages() {
    const narutoContainer = document.getElementById('naruto-images');
    narutoContainer.innerHTML = '';
  
    narutoImages.forEach((imageName, index) => {
      const imgElement = document.createElement('img');
      imgElement.src = 'images/' + imageName; // Assuming the images are in the 'images' folder
      imgElement.addEventListener('click', () => checkGuess(index));
      narutoContainer.appendChild(imgElement);
    });
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
  