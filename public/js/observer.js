import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

import { triggerD3Visualization1 } from "../js/dataviz.js";
import { changeSize } from "../js/dataviz2.js";

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideId = entry.target.id;
          handleSlideInView(slideId);
          observer.unobserve(entry.target); // Stop observing once triggered
        }
      });
    },
    {
      threshold: 0.5, // Adjust based on when you want to trigger the visualization
    }
  );

  const slides = document.querySelectorAll(".snap-slide");
  slides.forEach((slide) => observer.observe(slide));
});

function handleSlideInView(slideId) {
  switch (slideId) {
    case "slide-1":
      triggerD3Visualization1();
      break;
    case "slide-2":
      triggerD3Visualization2();
      break;
    // Add more cases for additional slides
    default:
      console.warn(`No visualization function found for ${slideId}`);
  }
}

function triggerD3Visualization2() {
  // Your D3 visualization code for slide 2
  // Similar to triggerD3Visualization1, but with different data or logic
}
