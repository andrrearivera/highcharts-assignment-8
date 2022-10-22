Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Peaches','Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Austin and Ally\'s house'
      }
    },
    series: [{
      name: 'Austin',
      data: [6,1, 0, 4]
    }, {
      name: 'Ally',
      data: [6,5, 7, 3]
    }]
  });
