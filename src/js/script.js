// Highlight Section Start Slide Control
let sliderContainer = document.getElementById("sliderContainer");
let slider = document.getElementById("slider");
let cards = slider.getElementsByTagName("li");

let elementShow;
// Responsive Berdasarkan Start Page / Reload Page
if (document.body.clientWidth < 1000) {
  elementShow = 1;
} else if (document.body.clientWidth < 1500) {
  elementShow = 2;
}
let sliderContainerWidth = sliderContainer.clientWidth; // Menghitung Luas Parentnya
let cardWidth = sliderContainerWidth / elementShow; // Luas Parent dibagi Element Card

slider.style.width = cards.length * cardWidth + "px"; // Membuat luas element card berdasarkan Parent Slide Container
slider.style.transition = "margin";
slider.style.transitionDuration = "1s";

for (let index = 0; index < cards.length; index++) {
  // Looping element card yaitu Tag (li)
  const element = cards[index];
  element.style.width = cardWidth + "px";
}

function prev() {
  // Function tombol untuk mentriger adanya slide
  if (+slider.style.marginLeft.slice(0, -2) != 0)
    // Kondisional terhadap sebuah margin efek bergeser
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) + cardWidth + "px"; // Membuat penambahan terhadap margin

  console.log(+slider.style.marginLeft.slice(0, -2) + cardWidth + "px", "Prev");
  console.log(slider.style.marginLeft, "Margin left Prev");
}

function next() {
  if (
    +slider.style.marginLeft.slice(0, -2) !=
    -cardWidth * (cards.length - elementShow)
  )
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) - cardWidth + "px"; // Membuat pengurangan terhadap margin
}
// Highlight Section End Slide Control
