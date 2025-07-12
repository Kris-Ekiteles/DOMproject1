const increaseBtn = document.querySelectorAll(".fa-plus-circle");
const decreaseBtn = document.querySelectorAll(".decrease-btn");
const spaceBtn = document.querySelectorAll(".quantity");
//sumPrice
const PriceSum = document.getElementById("total-sum");
const priceTag = document.getElementById("unit-price");

let count = 0;
const minCount = 1;
const maxCount = 10;
// total price

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
  if (count <= maxCount) {
    count++;
    counterUpdate();
  }
});
counterUpdate();
