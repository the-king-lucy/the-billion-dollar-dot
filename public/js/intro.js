// import { fadeIn, fadeOut } from "./fade.js";

// const circles = document.getElementById("circles-intro");

// export function intro() {
//   const arrowElement = document.getElementById("fade-elements");

//   setTimeout(() => fadeIn(arrowElement, 10, 1), 2000);

//   const billionText = document.querySelector("h1");
//   const billionO = billionText.innerHTML.indexOf("BILLION");
//   const oElement = document.createElement("span");
//   oElement.innerHTML = "O";
//   oElement.style.position = "relative";
//   billionText.innerHTML = billionText.innerHTML.replace(
//     "BILLION",
//     `BILLI<span id="billion-o">O</span>N`
//   );
//   const oPosition = document
//     .getElementById("billion-o")
//     .getBoundingClientRect();
//   const oCenterX = oPosition.left + oPosition.width / 2;
//   const oCenterY = oPosition.top + oPosition.height / 2;

//   let delay = 0;
//   for (const circle of circles.children) {
//     setTimeout(() => {
//       fadeIn(circle, 20, 0.5);
//       circle.style.left = `${oCenterX - 10}px`; // 10 is half the circle width
//       circle.style.top = `${oCenterY + 20 + delay}px`;
//       delay += 30;
//     }, delay * 30);
//   }
// }
