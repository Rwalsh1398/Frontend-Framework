document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById("chart").getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line', 
    data: {
      //Manual Codding for the labels, from 0 to 22 -as per figma example
      labels: ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"],
      datasets: [
        {
          label: 'Today',
          backgroundColor: 'rgba(161, 198, 247, 0.2)', //Blue
          borderColor: 'rgb(47, 128, 237)',
          // / Data plots the points on the graph
          data: [23, 25, 28, 30, 32, 35, 49, 50, 51, 22, 20, 25, 20, 27, 38, 44, 47, 50, 48, 45, null, null, null], //null leaves empty plots as per figma design
          tension: 0.4, // dictates the how curvy / straight graphs lines will be
        },
        {
          label: 'Yesterday',
          backgroundColor: 'rgba(192, 192, 192, 0.2)', //Grey
          borderColor: 'rgb(128, 128, 128)',
          // Data plots the points on the graph
          data: [32, 33, 32, 31, 29, 31, 33, 33, 34, 30, 20, 18, 20, 28, 30, 38, 40, 41, 42, 38, null, null, null],//null leaves empty plots as per figma design
          tension: 0.4, // dictates the how curvy / straight graphs lines will be
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          position: 'top', // positions legend at the top
          align: 'end', // aligns the legend to the right of the graph
          labels: {
            font: {
              size: 12, // Sets font size for labels
            },
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 60,
          beginAtZero: true,
          position: 'right',
        }
      }
    },
  });


  // Search Toggle Functionality / added feature for marks.
  const toggleSearchButton = document.getElementById("toggleSearchButton");
  const searchForm = document.getElementById("searchForm");

  // On startup will not display search bar
  // If clicked search icon is clicked on, it will display search bar as block, 
  //if clicked again will set display as none
  if (toggleSearchButton) {
    toggleSearchButton.addEventListener("click", function () {
      if (searchForm.style.display === "none" || searchForm.style.display === "") {
        searchForm.style.display = "block";
      } else {
        searchForm.style.display = "none";
      }
    });
  }
});
