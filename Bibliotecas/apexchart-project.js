var nome = document.getElementById('nome');
    var select = document.getElementById('digito');
    var digito = select.options[select.selectedIndex];
    
    var options = {
        chart: {
            type: 'line',
            background: '#fff'
        },
        series: [{
            name: 'digito',
            data: [{
                x: nome.value,
                y: digito.value
            }]
        }],
    }
      
    var chart = new ApexCharts(document.querySelector("#chartProject"), options);
      
    chart.render();
