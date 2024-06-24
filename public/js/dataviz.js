import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

function triggerD3Visualization1() {
  const data = [2, 22, 76, 38, 19.4, 11.2, 6.4, 3.5, 1.1];
  const colours = [
    "#0E8BCD",
    "#003D2B",
    "#E1B52F",
    "#CB026E",
    "#919191",
    "#5B8F77",
    "#01608A",
    "#D86C01",
    "#8B3076",
  ];
  const labels = [
    "Bottom 50%",
    "Middle 40%",
    "Top 10%",
    "Top 1%",
    "Top 0.1%",
    "Top 0.01%",
    "Top 0.001%",
    "Top 0.0001%",
    "Top 0.00001%",
  ];

  const width = window.innerWidth;
  const height = 500;
  const initialRadius = 95;
  const lineLength = 50;
  const startHeight = 200;

  const svg = d3
    .select("#nine-dots")
    .append("svg")
    .attr("width", width)
    .attr("height", height + lineLength);

  const x = d3
    .scalePoint()
    .domain(d3.range(data.length))
    .range([0, width])
    .padding(0.5);

  const radiusScale = d3
    .scaleSqrt()
    .domain([0, d3.max(data)])
    .range([0, 50]);

  const circles = svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", width - initialRadius) // Initial position to the right
    .attr("cy", startHeight - initialRadius) // Initial top alignment
    .attr("r", initialRadius) // Initial radius
    .attr("fill", (_, i) => colours[i]) // Apply colors
    .attr("opacity", 0.5); // Set opacity to 50%

  circles
    .transition()
    .duration(3000)
    .delay((d, i) => i * 750)
    .attr("cx", (_, i) => x(i));
}

triggerD3Visualization1();

// Export the function so it can be called when the slide is in view
export { triggerD3Visualization1 };
