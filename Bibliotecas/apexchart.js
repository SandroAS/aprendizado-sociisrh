var options = {
    chart: {
        type: 'line',
        background: '#fff'
    },
    series: [{
        name: 'sales',
        data: [{
            x: 1991,
            y: 30
        }, {
            x: 1992,
            y: 40
        }, {
            x: 1993,
            y: 35
        }, {
            x: 1994,
            y: 50
        }, {
            x: 1995,
            y: 49
        }, {
            x: 1996,
            y: 60
        }, {
            x: 1997,
            y: 70
        }, {
            x: 1998,
            y: 91
        }, {
            x: 1999,
            y: 125
        }]
    }],
}
  
var chart = new ApexCharts(document.querySelector("#chart"), options);
  
chart.render();
//----------------------------------------------------------------------------
var options = {
    chart: {
      type: 'area',
      background: '#fff'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }, {
        name: 'outro',
        data: [50,67,54,68,77,53,42,56,65]
    }, {
        name: 'mais um',
        data: [70,80,75,73,88,40,32,38,45]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var chart = new ApexCharts(document.querySelector("#chart1"), options);
  
chart.render();
//----------------------------------------------------------------------------
var options = {
    chart: {
      type: 'bar',
      background: '#fff'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var chart = new ApexCharts(document.querySelector("#chart2"), options);
  
chart.render();
//----------------------------------------------------------------------------
var options = {
    chart: {
      type: 'radar',
      background: '#fff'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var chart = new ApexCharts(document.querySelector("#chart3"), options);
  
chart.render();
//----------------------------------------------------------------------------
var options = {
    chart: {
      type: 'histogram',
      background: '#fff'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var chart = new ApexCharts(document.querySelector("#chart4"), options);
  
chart.render();
//----------------------------------------------------------------------------
var options = {
    chart: {
      type: 'pie',
      background: '#fff'
    },
    labels: ['Dell', 'Aplle', 'Mi', 'Hp', 'Acer'],
    series: [30,40,35,50,49]
    
}
  
var chart = new ApexCharts(document.querySelector("#chart5"), options);
  
chart.render();
//----------------------------------------------------------------------------
var options = {
    chart: {
        type: 'donut',
        background: '#fff'
      },
      labels: ['Dell', 'Aplle', 'Mi', 'Hp', 'Acer'],
      series: [30,40,35,50,49]
      
}
  
var chart = new ApexCharts(document.querySelector("#chart6"), options);
  
chart.render();
//----------------------------------------------------------------------------
var options = {
    chart: {
      type: 'radialBar',
      background: '#fff'
    },
    labels: ['Dell', 'Aplle', 'Mi', 'Hp', 'Acer'],
    series: [80,90,85,70,79]
    
}
  
var chart = new ApexCharts(document.querySelector("#chart7"), options);
  
chart.render();
//----------------------------------------------------------------------------
var options = {
    chart: {
      type: 'scatter',
      background: '#fff'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var chart = new ApexCharts(document.querySelector("#chart8"), options);
  
chart.render();
//----------------------------------------------------------------------------
/*var options = {
    chart: {
      type: 'bubble'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var chart = new ApexCharts(document.querySelector("#chart9"), options);
  
chart.render();*/
//----------------------------------------------------------------------------
var options = {
    chart: {
      type: 'heatmap',
      background: '#fff'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var chart = new ApexCharts(document.querySelector("#chart10"), options);
  
chart.render();
//----------------------------------------------------------------------------
/*var options = {
    chart: {
      type: 'candlestick'
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
}
  
var chart = new ApexCharts(document.querySelector("#chart11"), options);
  
chart.render();
//----------------------------------------------------------------------------
new Vue({
    el: '#app',
    components: {
      apexchart: VueApexCharts,
    },
    data: {
      
      series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
      },
      
      
    },
    
  })*/

/*
TYPEs:

line
area
bar
radar
histogram
pie
donut
radialBar
scatter
bubble
heatmap
candlestick
*/