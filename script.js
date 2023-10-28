document.getElementById('calculate').addEventListener('click', function() {
    var number = document.getElementById('number').value;
    var limit = document.getElementById('limit').value;
    var tableContainer = document.getElementById('table-container');
    var table = '<table><tr><th>Number</th><th>x</th><th>Multiplier</th><th>=</th><th>Result</th></tr>';

    for (var i = 1; i <= limit; i++) {
        table += '<tr><td>' + number + '</td><td>x</td><td>' + i + '</td><td>=</td><td>' + number * i + '</td></tr>';
    }

    table += '</table>';
    tableContainer.innerHTML = table;
});

document.getElementById('download').addEventListener('click', function() {
    html2canvas(document.querySelector("#table-container")).then(canvas => {
        var link = document.createElement('a');
        link.download = 'times-table.png';
        link.href = canvas.toDataURL();
        link.click();

document.getElementById('download').addEventListener('click', function() {
    console.log('Download button clicked');  // New line
    html2canvas(document.querySelector("#table-container")).then(canvas => {
        console.log('Canvas created');  // New line
        var link = document.createElement('a');
        link.download = 'times-table.png';
        link.href = canvas.toDataURL();
        console.log('Download link created: ' + link.href);  // New line
        link.click();
    }).catch(error => {
        console.error('Error creating canvas: ' + error);  // New line
    });
});
    });
});
