document.addEventListener("DOMContentLoaded", function () {
  const increaseBtn = document.querySelector("#increase-btn");
  const decreaseBtn = document.querySelector("#decrease-btn");
  const spaceBtn = document.querySelector("#display-space");
  const PriceSum = document.getElementById("total");
  const priceTag = document.getElementById("price");

  let count = 0;
  let minCount = 0;
  let maxCount = 10;

  function counterUpdate() {
    spaceBtn.textContent = count;
    decreaseBtn.disabled = count <= minCount;
    increaseBtn.disabled = count >= maxCount;
  }
  // decrease button.
  decreaseBtn.addEventListener("click", () => {
    if (count > minCount) {
      count--;
      counterUpdate();
    }
  });
  //increase button
  increaseBtn.addEventListener("click", () => {
    if (count < maxCount) {
      count++;
      counterUpdate();
    }
  });
  counterUpdate();
});
