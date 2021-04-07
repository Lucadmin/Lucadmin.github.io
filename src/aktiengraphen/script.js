const ctx = document.getElementById('myChart').getContext('2d');

let gradientFill = ctx.createLinearGradient(0, 0, 0, 1000);
gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.5)");
gradientFill.addColorStop(1, "rgba(128, 182, 244, 0)");

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
        datasets: [{
            label: "Aktien",
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            /*            pointBorderWidth: 5,
                        pointHoverRadius: 7,
                        pointHoverBorderWidth: 1,
                        pointRadius: 1,*/
            pointStyle: 'rectRounded',
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [100, 120, 150, 170, 180, 170, 160, 100, 120, 150, 170, 180, 170, 160],
            cubicInterpolationMode: 'monotone',
            tension: 0.1,
        }]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold"
                }
            }],
            x: {
                grid: {
                    color: "rgba(207,207,207,0.4)"
                }
            },
            y: {
                grid: {
                    color: "rgba(207,207,207,0.4)"
                }
            },
        },
    }
});
