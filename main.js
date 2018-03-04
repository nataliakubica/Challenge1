var CHART = document.getElementById("brandstof");
console.log(CHART);
let barChart = new Chart(CHART, {
    type: 'bar',
    data: {
        datasets: [
            {
                label: 'Brandstof',
                backgroundColor: '#377400',
                borderColor: '#000000',
                borderWidth: 1,
                data: [85]
            }
        ]
    },
    options:{
            legend:{
                labels:{
                    fontFamily: 'Silom',
                    fontColor: 'black',
                }
            },
        scales: {
            fontFamily: ['Silom'],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});


var CHART = document.getElementById("snelheid");
console.log(CHART);
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: [1200, 1300, 1400, 1500, 1600],
        datasets: [
            {
                label: 'KM per uur',
                backgroundColor: '#00327F',
                borderColor: '#000000',
                borderWidth: 1,
                pointRadius: 0,
                data: [0, 500, 700, 900, 850],
            }
        ]
    },
    options:{
            legend:{
                labels:{
                    fontFamily: 'Silom',
                    fontColor: 'black',
                }
            },
        scales: {
            fontFamily: ['Silom'],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

var CHART = document.getElementById("acceleratie");
console.log(CHART);
let accChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        datasets: [
            {
                label: 'Acceleratie',
                backgroundColor: '#B4000A',
                borderColor: '#000000',
                borderWidth: 2,
                lineTension: 0,
                pointRadius: 0,
                data: [100, 150, 190, 300, 250, 260, 310, 400, 250, 300],
            }
        ]
    },
    options:{
            legend:{
                labels:{
                    fontFamily: 'Silom',
                    fontColor: 'black',
                }
            },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

var CHART = document.getElementById("zwaartekracht");
console.log(CHART);
let zwaartekrachtChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        datasets: [
            {
                label: 'Zwaartekracht per uur',
                backgroundColor: '#377400',
                borderColor: '#000000',
                borderWidth: 2,
                lineTension: 0.5,
                pointRadius: 0,
                data: [700, 777, 800, 650, 666, 700, 560, 660, 900, 200],
            }
        ]
    },
    options:{
            legend:{
                labels:{
                    fontFamily: 'Silom',
                    fontColor: 'black',
                }
            },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});

var CHART = document.getElementById("afstand");
console.log(CHART);
let afstandChart = new Chart(CHART, {
    type: 'radar',
    data: {
        labels: ["Pluto", "Uranus", "Jupiter", "Mercurius", "Maan", "Saturnus", "Zon"],
        datasets: [
            {
                label: 'Afstand tot andere planeten',
                backgroundColor: '#5A3C68',
                borderColor: '#000000',
                borderWidth: 2,
                lineTension: 0,
                pointRadius: 1,
                data: [4, 9, 2, 7, 10, 4, 17],
            }
        ]
    }
    
});
var CHART = document.getElementById("atmosfeer");
console.log(CHART);
let atmosfeerChart = new Chart(CHART, {
    type: 'pie',
    data: {
        labels: ["Stikstof", "Zuurstof", "Aigon", "Koolstofdioxide", "Overig"],
        datasets: [
            {
                label: 'Atmosfeer in procenten',
                backgroundColor: ['#377400', '#FBAE17', '#00327F', '#B4000A', '#A55E25'] ,
                borderColor: '#000000',
                borderWidth: 1,
                lineTension: 0.5,
                pointRadius: 0,
                data: [7, 23, 19, 11, 8],
            }
        ]
    },
    options:{
            legend:{
                labels:{
                    fontFamily: 'Silom',
                    fontColor: 'black',
                }
            },
       }
   
});

var CHART = document.getElementById("eten");
console.log(CHART);
let eetChart = new Chart(CHART, {
    type: 'pie',
    data: {
        labels: ["Fruit", "Groente", "Snacks", "Warme maaltijd"],
        datasets: [
            {
                label: 'Etensvoorraad',
                backgroundColor: ['#377400', '#FBAE17', '#B4000A', '#00327F'] ,
                borderColor: '#000000',
                borderWidth: 1,
                lineTension: 0.5,
                pointRadius: 0,
                data: [18, 23, 19, 11],
            }
        ]
    },
       options:{
            legend:{
                labels:{
                    fontFamily: 'Silom',
                    fontColor: 'black',
                }
            },
       }
});

var CHART = document.getElementById("water");
console.log(CHART);
let waterChart = new Chart(CHART, {
    type: 'bar',
    data: {
        datasets: [
            {
                label: 'Water',
                backgroundColor: '#00327F',
                borderColor: '#000000',
                borderWidth: 1,
                data: [55]
            }
        ]
    },
    options:{
            legend:{
                labels:{
                    fontFamily: 'Silom',
                    fontColor: 'black',
                }
            },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
});
