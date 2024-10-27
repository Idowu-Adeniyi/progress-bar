let progbar = document.getElementById("progress-bar");
let countDisplay = document.getElementById("counter");
let successMessage = document.getElementById("successMessage");
const btn = document.querySelector(".btn");

let count = 0;
let progressAdd = 0;
let countNum; // Store the interval ID outside the function

function transfer() {
  // Clear any existing interval to avoid multiple intervals running
  if (countNum) {
    clearInterval(countNum);
  }

  //Reset count, progressAdd, successMessage
  count = 0;
  progressAdd = 0;
  progbar.value = progressAdd;
  countDisplay.innerHTML = count;
  successMessage.innerHTML = "Transfer in Progress...";
  successMessage.style.color = "black";

  countNum = setInterval(function () {
    let countAdd = count++;
    progbar.value = progressAdd++;
    countDisplay.innerHTML = countAdd;
    console.log(countAdd);

    if (countAdd === 100) {
      clearInterval(countNum);
      successMessage.innerHTML = "Transfer completed!";
      successMessage.style.color = "green";
    }
  }, 100);
}

btn.addEventListener("click", () => {
  transfer();
});
