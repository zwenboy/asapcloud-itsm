//bar
var ctxB = document.getElementById("incident-chart").getContext('2d');
var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: ["Category1", "Category2", "Category3", "Category4", "Category5", "Category6"],
        datasets: [{
            label: 'Incidents',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//pie
var ctxP = document.getElementById("incident-pie").getContext('2d');
var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
        labels: ["Unresolved", "In progress", "Resolved"],
        datasets: [{
            data: [18, 12, 21],
            backgroundColor: ["#F7464A", "#FDB45C", "#46BFBD"],
            borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"],
            hoverBackgroundColor: ["#FF5A5E", "#FFC870", "#5AD3D1"]
        }]
    },
    options: {
        responsive: true
    }
});