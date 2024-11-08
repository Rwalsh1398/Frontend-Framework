
// file still not working
const ctx = document.getElementById("chart").getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [{
        label: 'Last week',
        backgroundColor: 'rgba(161, 198, 247, 1)',
        borderColor: 'rgb(47, 128, 237)',
        data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  });

  // search
  function toggleSearch() {
    const searchForm = document.getElementById("searchForm");
    if (searchForm.style.display === "none" || searchForm.style.display === "") {
        searchForm.style.display = "block";
    } else {
        searchForm.style.display = "none";
    }
}