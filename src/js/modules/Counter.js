export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
        <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const initEventListener = () => {
    const countDisplay = document.querySelector(".count-display");
    const plusButton = document.querySelector(".plus-button");
    const minusButton = document.querySelector(".minus-button");

    const handlePlusButton = () => {
      if (countDisplay.value >= 12) return;
      countDisplay.value = Number(countDisplay.value) + 1;
    };

    const handleMinusButton = () => {
      if (countDisplay.value <= 8) return;
      countDisplay.value = Number(countDisplay.value) - 1;
    };

    plusButton.addEventListener("click", handlePlusButton);
    minusButton.addEventListener("click", handleMinusButton);
  };

  const init = () => {
    render();
    initEventListener();
  };

  init();
}
