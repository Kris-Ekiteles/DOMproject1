const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const spaceBtn = document.getElementById("displaySpace");

let count = 0;
const minCount = 0;
const maxCount = 10;

function counterUpdate() {
  spaceBtn.textContent = count;
  decreaseBtn.disabled = count <= minCount;
  increaseBtn.disabled = count >= maxCount;
}
decreaseBtn.addEventListener("click", () => {
  if (count > minCount) {
    count--;
    counterUpdate();
  }
});
increaseBtn.addEventListener("click", () => {
  if (count > maxCount) {
    count++;
    counterUpdate();
  }
});
counterUpdate();
