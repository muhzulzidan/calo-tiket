// const mainElement = document.querySelector(".main-hero");
// const backgroundImages = [
//   "assets/img/background-00.jpg",
//   "assets/img/background-01.jpg",
//   "assets/img/background-02.jpg",
//   "assets/img/background-03.jpg",
// ];
// let defaultIndex = 0;
// setInterval(function () {
//   mainElement.style.backgroundImage =
//     "url(" + backgroundImages[defaultIndex] + ")";
//   defaultIndex++;
//   if (defaultIndex >= backgroundImages.length) {
//     defaultIndex = 0;
//   }
// }, 2000);

setInterval(function () {
  let spanElement = document.querySelector(".text-change");
  let currentText = spanElement.textContent;
  if (currentText === "Ribet") {
    spanElement.textContent = "Pusing";
  } else if (currentText === "Pusing") {
    spanElement.textContent = "Antri";
  } else if (currentText === "Antri") {
    spanElement.textContent = "Ribet";
  }
}, 3000);
