/* Importing D3*/
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

function changeSize() {
  circles
    .transition()
    .duration(1000)
    .attr("cy", (d) => startHeight - radiusScale(d))
    .attr("r", (d) => radiusScale(d))
    .on("end", function (d, i) {
      const cx = x(i);
      const colour = colours[i];
      d3.select(this.parentNode)
        .append("line")
        .attr("x1", cx)
        .attr("y1", startHeight)
        .attr("x2", cx)
        .attr("y2", startHeight + lineLength)
        .attr("stroke", colours[i])
        .attr("stroke-opacity", 0.5)
        .attr("stroke-width", 1)
        .attr("class", "data-line");

      d3.select(this.parentNode)
        .append("text")
        .attr("x", cx)
        .attr("y", startHeight + lineLength + 15)
        .attr("fill", colour)
        .attr("fill-opacity", 0.5)
        .attr("text-anchor", "middle")
        .text(labels[i])
        .attr("class", "data-text");

      if (i === data.length - 1) {
        setTimeout(() => {
          hideDataPoints();
        }, 2000);
      }
    });
}

function hideDataPoints() {
  circles.each(function (d, i) {
    if (i !== 0) {
      d3.select(this)
        .transition()
        .duration(500)
        .attr("opacity", 0)
        .attr("r", 0);
    }
  });

  hideLines();
  hideText();
}

function hideLines() {
  svg.selectAll(".data-line").each(function (_, i) {
    if (i !== 0) {
      d3.select(this).transition().duration(500).attr("opacity", 0);
    }
  });
}

function hideText() {
  svg.selectAll(".data-text").each(function (_, i) {
    if (i !== 0) {
      d3.select(this).transition().duration(500).attr("opacity", 0);
    }
  });
}

// let hasDataVizStarted = false;
// let svg;
// export function stopDataViz2() {
//   //svg.remove();
// }

// export function startDataViz2() {
//   if (!hasDataVizStarted) {
//     hasDataVizStarted = true;
//     // Append the SVG object to the body of the page
//     svg = d3.select("#dataviz_two").append("svg");

//     // Read data
//     d3.csv(
//       "https://raw.githubusercontent.com/fac31/Lucy-Jack-Final/main/data-for-dataviz-two-v2.csv"
//     )
//       .then(function (data) {
//         console.log("Data loaded");

//         // Create a tooltip
//         var Tooltip = d3
//           .select("#dataviz_two")
//           .append("div")
//           .style("opacity", 0)
//           .attr("class", "tooltip")
//           .style("background-color", "white")
//           .style("border", "solid")
//           .style("border-width", "2px")
//           .style("border-radius", "5px")
//           .style("padding", "5px")
//           .style("position", "absolute");

//         // Three functions that change the tooltip when user hover / move / leave a cell
//         var mouseover = () => {
//           Tooltip.style("opacity", 1);
//         };

//         var mousemove = function (event, d) {
//           Tooltip.html(
//             `This Billion Dollar Dot is owned by ${d.name}. Their total wealth is estimated to be ${d["net-worth"]}`
//           )
//             .style("left", event.pageX + 20 + "px")
//             .style("top", event.pageY + "px")
//             .style("color", "black");
//         };

//         var mouseleave = () => {
//           Tooltip.style("opacity", 0);
//         };

//         // Append circles for each data point
//         svg
//           .selectAll(".node")
//           .data(data)
//           .enter()
//           .append("circle")
//           .attr("class", "node")
//           .attr("r", 1) // Small circles radius
//           .attr("cx", (d, i) => i * 1) // Position circles horizontally
//           .attr("cy", (d, i) => i * 1) // Position circles vertically
//           .style("fill", "#0E8BCD")
//           .style("fill-opacity", 0.5)
//           .style("stroke-width", 1)
//           .on("mouseover", mouseover)
//           .on("mousemove", mousemove)
//           .on("mouseleave", mouseleave);

//         // Calculate the bounding box of the circles
//         var bbox = svg.node().getBBox();

//         // Set the SVG dimensions based on the bounding box
//         svg
//           .attr("width", bbox.width + 40) // Add some padding
//           .attr("height", bbox.height + 40)
//           .attr(
//             "viewBox",
//             `${bbox.x - 20} ${bbox.y - 20} ${bbox.width + 40} ${bbox.height + 40}`
//           );
//       })
//       .catch(function (error) {
//         console.error("Error loading or parsing data:", error);
//       });
//   }
// }

// // // Append the SVG object to the body of the page
// // var svg = d3
// //   .select("#dataviz_two")
// //   .append("svg")
// //   .attr("width", width)
// //   .attr("height", height);

// // // Read data
// // d3.csv(
// //   "https://raw.githubusercontent.com/fac31/Lucy-Jack-Final/main/dots%20of%20billions%20TestData.csv",
// // )
// //   .then(function (data) {
// //     console.log("Data loaded");

// //     // Create a tooltip
// //     var Tooltip = d3
// //       .select("#dataviz_two")
// //       .append("div")
// //       .style("opacity", 0)
// //       .attr("class", "tooltip")
// //       .style("background-color", "white")
// //       .style("border", "solid")
// //       .style("border-width", "2px")
// //       .style("border-radius", "5px")
// //       .style("padding", "5px")
// //       .style("position", "absolute"); // Ensure the tooltip is positioned absolutely

// //     // Three functions that change the tooltip when user hover / move / leave a cell
// //     var mouseover = function (event, d) {
// //       Tooltip.style("opacity", 1);
// //     };

// //     var mousemove = function (event, d) {
// //       if (!d.Name || !d["Total Wealth"]) return;
// //       Tooltip.html(
// //         `This Billion Dollar Dot is owned by ${d.Name}. Their total wealth is estimated to be ${d["Total Wealth"]}`,
// //       )
// //         .style("left", event.pageX + 20 + "px")
// //         .style("top", event.pageY + "px")
// //         .style("color", "black");
// //     };

// //     var mouseleave = function (event, d) {
// //       Tooltip.style("opacity", 0);
// //     };

// //     // Initialize the first large circle
// //     var node = svg
// //       .append("circle")
// //       .attr("class", "node")
// //       .attr("r", 95) // Start with radius 95px
// //       .attr("cx", width / 2)
// //       .attr("cy", height / 2)
// //       .style("fill", "#0E8BCD")
// //       .style("fill-opacity", 0.5)
// //       .style("stroke-width", 1);

// //     // Function to transition the large circle to a small circle, then fade out
// //     function shrinkAndFadeOutCircle() {
// //       console.log("Shrinking and fading out circle...");
// //       node
// //         .transition()
// //         .duration(1000)
// //         .attr("r", 4) // Shrink to radius 4px
// //         .transition()
// //         .duration(1000)
// //         .style("opacity", 0) // Fade out
// //         .on("end", function () {
// //           node.remove(); // Remove the initial circle
// //           fadeInVisualization(); // Fade in the entire visualization
// //         });
// //     }

// //     // Function to fade in the entire visualization
// //     function fadeInVisualization() {
// //       console.log("Fading in the entire visualization...");

// //       // Apply forces for random-like arrangement
// //       var simulation = d3
// //         .forceSimulation(data)
// //         .force("center", d3.forceCenter(width / 2, height / 2))
// //         .force("charge", d3.forceManyBody().strength(0.05)) // Adjust charge strength for less space
// //         .force(
// //           "collide",
// //           d3
// //             .forceCollide()
// //             .radius(3 + 0.5)
// //             .iterations(1),
// //         ); // Adjust collision radius for less space

// //       // Append circles with initial opacity of 0
// //       var circles = svg
// //         .selectAll(".node")
// //         .data(data)
// //         .enter()
// //         .append("circle")
// //         .attr("class", "node")
// //         .attr("r", 3) // Small circles radius
// //         .attr("cx", width / 2)
// //         .attr("cy", height / 2)
// //         .style("fill", "#0E8BCD")
// //         .style("fill-opacity", 0)
// //         .style("stroke-width", 1)
// //         .on("mouseover", mouseover)
// //         .on("mousemove", mousemove)
// //         .on("mouseleave", mouseleave);

// //       // Start the simulation
// //       simulation.nodes(data).on("tick", function () {
// //         circles
// //           .attr("cx", function (d) {
// //             return d.x;
// //           })
// //           .attr("cy", function (d) {
// //             return d.y;
// //           });
// //       });

// //       // Fade in the circles
// //       circles.transition().duration(1000).style("fill-opacity", 0.5);
// //     }

// //     // Start the process by shrinking and fading out the initial large circle
// //     shrinkAndFadeOutCircle();
// //   })
// //   .catch(function (error) {
// //     console.error("Error loading or parsing data:", error);
// //   });
