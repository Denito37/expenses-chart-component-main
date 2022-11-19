const myChart = document.getElementById('barChart').getContext('2d');
let xValues = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
let yValues= ['17.45', '34.91', '52.36', '31.07', '23.39', '43.28', '25.48'];
let barColors = "hsl(10 79% 65%)";
const d = new Date();
let day = d.getDay();

console.log(day);

const drawChart = new Chart(myChart, {
    type:'bar',
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor:barColors,
            hoverBackgroundColor: 'hsl(186 34% 60%)',
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes:[{gridLines:{display:false}}],
            xAxes:[{gridLines:{display:false}}],
        }
    }
});