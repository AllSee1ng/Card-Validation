const cardPrevNumber = document.querySelector(".cardPrevNumber");
const cardNumber = document
  .querySelector("#cardNumber")
  .addEventListener("change", (e) => {
    cardPrevNumber.innerHTML = e.target.value;
  });
