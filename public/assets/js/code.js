document.addEventListener("DOMContentLoaded", function() {
    // Overview Link and Main Content Toggle
    const overviewLink = document.getElementById("overviewLink");
    const mainContent = document.getElementById("mainContent");

    // Hide the main content initially
    mainContent.style.display = "none";

    // Show the main content when "Overview" is clicked
    overviewLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Toggle visibility of main content
        mainContent.style.display = mainContent.style.display === "none" ? "block" : "none";
    });

    // Chart.js setup
    const ctx = document.getElementById("chart").getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line', // Set the chart type
        data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // Labels
            datasets: [{
                label: 'Last week', // Dataset label
                backgroundColor: 'rgba(161, 198, 247, 1)', // Light blue fill color
                borderColor: 'rgb(47, 128, 237)', // Blue border color
                data: [3000, 4000, 2000, 5000, 8000, 9000, 2000], // Data for each day
                fill: true, // Fill the area under the line
            }]
        },
        options: {
            responsive: true, // Make the chart responsive to screen resizing
            scales: {
                y: {
                    beginAtZero: true, // Start Y-axis from zero
                }
            },
        },
    });
});


    