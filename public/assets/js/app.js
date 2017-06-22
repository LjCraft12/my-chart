let myChart = document.getElementById('my-chart').getContext('2d');

let popChart = new Chart(myChart, {
    type: 'bar', //bar horizontal-bar, pie, line, donnut, raar, polar area
    data: {
        labels: ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Decatur'],
        datasets: [{
            label: 'Population',
            data: [
                420000,
                310000,
                205000,
                170000,
                85000
            ]
        }]
    },
    options: {

    }
})