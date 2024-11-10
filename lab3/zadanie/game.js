const cursor = document.querySelector("#aim");
const lifeContainer = document.querySelector("#life-container");
const scoreElement = document.querySelector("#score");
const endModal = document.querySelector("#end-modal");
const music = document.querySelector("#music");
const resetButton = document.querySelector("#reset");

const INITIAL_LIVES = 3;
const ZOMBIE_XP = 20;
const MISS_XP_LOSS = 5;
const FRAMES_PER_SECOND = 30;

let lives = 3;
let score = 0;
let zombieIntervals = [];

let audio = new Audio("./assets/sad-music.mp3");

resetButton.addEventListener("click", () => {
  reset();
});

const spawnZombie = () => {
  const zombie = document.createElement("div");
  zombie.classList.add("zombie");

  // Randomize size between 50% and 150% of original
  const scale = 0.5 + Math.random() * 0.5;
  const speed = 3 + Math.random() * 3;
  const position = window.innerWidth;

  zombie.style.transform = `scale(${scale})`;
  zombie.style.left = `${position}px`;
  zombie.style.bottom = `${(scale + 0.5) * 5}px`;

  // move
  const moveInterval = setInterval(() => {
    const currentLeft = parseInt(zombie.style.left);
    zombie.style.left = `${currentLeft - speed}px`;

    if (currentLeft <= -200) {
      lives--;

      updateHearts();

      clearInterval(moveInterval);
      zombie.removeEventListener("click", shootHandler);
      zombie.remove();
    }
  }, 1000 / FRAMES_PER_SECOND);

  zombieIntervals.push(moveInterval);

  // shoot
  const shootHandler = (e) => {
    e.preventDefault();

    clearInterval(moveInterval);
    zombieIntervals = zombieIntervals.filter(
      (interval) => interval !== moveInterval
    );
    zombie.removeEventListener("click", shootHandler);
    zombie.remove();
    score += ZOMBIE_XP;

    updateScore();
    e.stopPropagation();
  };

  zombie.addEventListener("click", shootHandler);

  document.body.appendChild(zombie);
};

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.top = `${mouseY}px`;
  cursor.style.left = `${mouseX}px`;
};

document.body.addEventListener("click", (e) => {
  score = Math.max(0, score - MISS_XP_LOSS);
  updateScore();
});

const updateHearts = () => {
  lifeContainer.innerHTML = "";

  console.log(lives);

  for (let i = 0; i < INITIAL_LIVES; i++) {
    const heart = document.createElement("img");

    heart.src =
      i < lives ? "./assets/full_heart.png" : "./assets/empty_heart.png";
    heart.classList.add("life");

    lifeContainer.appendChild(heart);
  }

  if (lives < 1) {
    displayEndModal();
  }
};

const updateScore = () => {
  scoreElement.innerHTML = score.toString();
};

const displayEndModal = () => {
  audio.play();

  endModal.style.display = "block";
};

window.addEventListener("mousemove", moveCursor);

const start = () => {
  updateHearts();
  updateScore();

  endModal.style.display = "none";
};

const reset = () => {
  audio.pause();

  endModal.style.display = "none";

  lives = INITIAL_LIVES;
  score = 0;

  zombieIntervals.forEach((interval) => clearInterval(interval));
  zombieIntervals = [];

  document.querySelectorAll(".zombie").forEach((zombie) => zombie.remove());

  updateScore();
  updateHearts();
};

start();

setInterval(() => {
  spawnZombie();
}, 3000);
