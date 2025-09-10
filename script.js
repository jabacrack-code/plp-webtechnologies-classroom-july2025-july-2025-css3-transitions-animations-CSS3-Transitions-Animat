// ================================
// Part 2: Functions (Scope, Params, Return)
// ================================
function calculateSquare(num) {
  // Local variable
  let result = num * num;
  return result;
}

function displaySquare(num) {
  const output = document.getElementById("functionDemo");
  output.textContent = `The square of ${num} is ${calculateSquare(num)}.`;
}

// Run function with a parameter
displaySquare(5);

// ================================
// Part 1 + 3: Triggering Animations with JS
// ================================
const box = document.getElementById("animateBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  // Add animation class
  box.classList.add("animate");

  // Remove it after animation ends (reusable!)
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);
});

// ================================
// Part 3: Modal with Animation
// ================================
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.style.display = "flex"; // show modal
  setTimeout(() => modal.classList.add("show"), 10); // trigger animation
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 500); // wait for fade out
});
