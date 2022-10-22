 // check how to do DIV containers
 Highcharts.chart('container', {
   chart: {
     type: 'column'
   },
   title: {
     text: 'Educational Attainment of Individuals 18+ by Race'
   },
   subtitle: {
     text: 'Source: <a ' +
       'href="https://www.census.gov/data/tables/2021/demo/educational-attainment/cps-detailed-tables.html">United States Census Bureau</a>'
   },
   xAxis: {
     categories: ['High School',
       'Associate\'s Degree',
       'Bachelor\'s Degree',
       'Master\'s Degree',
       'Doctoral Degree'
     ],
     crosshair: true
   },
   yAxis: {
     title: {
       useHTML: true,
       text: 'Population (thousands)'
     }
   },
   tooltip: {
     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
       '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
     footerFormat: '</table>',
     shared: true,
     useHTML: true
   },
   plotOptions: {
     column: {
       pointPadding: 0.2,
       borderWidth: 0
     }
   },
   series: [{
     name: 'White, Non-Hispanic',
     data: [42969, 16887, 39434, 17029, 3317]

   }, {
     name: 'Black',
     data: [11059, 3238, 5177, 2441, 372]

   }, {
     name: 'Asian',
     data: [2795, 1029, 5219, 2828, 777]

   }, {
     name: 'Hispanic',
     data: [13849, 3655, 5635, 1729, 219]

   }]
 });


// pie chart below

// Data retrieved from https://www.census.gov/data/tables/2022/demo/income-poverty/p60-277.html
Highcharts.chart('container2', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'People in Poverty by Race'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      sliced: true,
      selected: true
    }, {
      name: 'White, Non-Hispanic',
      y: 119309
    }, {
      name: 'Black',
      y: 43976
    }, {
      name: 'Asian',
      y: 20676
    }, {
      name: 'Hispanic',
      y: 62482
    }, {
      name: 'Other',
      y: 13275
    }]
  }]
});
