import React, { Component } from 'react';
import './App.css';
import Highcharts, { chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import styled from 'styled-components';
import ChartTest from './Chart/Charts';
import Grid from './Chart/grid';

const options = {
  chart: {
    type: 'area',
  },
  title: {
    text: 'בדיקות שהתבצעו אתמול',
    style: {
      color: 'black',
    },
  },
  series: [
    {
      name: 'יפית',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'הדר',
      data: [2, -2, -3, 2, 1],
    },
    {
      name: 'רביד',
      data: [3, 4, 4, -2, 5],
    },
  ],
  xAxis: {
    categories: ['מורים', 'אנשי ניקיון', 'הנהלה', 'תלמידים', 'הורים מבקרים'],
    labels: {
      style: {
        color: 'black',
      },
    },
  },
};
const options2 = {
  chart: {
    type: 'line',
  },
  title: {
    text: 'החלימו עד כה',
    style: {
      color: 'black',
    },
  },
  series: [
    {
      name: 'יפית',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'הדר',
      data: [2, -2, -3, 2, 1],
    },
    {
      name: 'רביד',
      data: [3, 4, 4, -2, 5],
    },
  ],
  xAxis: {
    categories: ['מורים', 'אנשי ניקיון', 'הנהלה', 'תלמידים', 'הורים מבקרים'],
    labels: {
      style: {
        color: 'black',
      },
    },
  },
};

const options3 = {
  chart: {
    type: 'area',
  },
  title: {
    style: {
      color: 'black',
    },
    text: 'נפטרים מצטבר',
  },
  series: [
    {
      name: 'USA',
      data: [
        null,
        null,
        null,
        null,
        null,
        6,
        11,
        32,
        110,
        235,
        369,
        640,
        1005,
        1436,
        2063,
        3057,
        4618,
        6444,
        9822,
        15468,
        20434,
        24126,
        27387,
        29459,
        31056,
        31982,
        32040,
        31233,
        29224,
        27342,
        26662,
        26956,
        27912,
        28999,
        28965,
        27826,
        25579,
        25722,
        24826,
        24605,
        24304,
        23464,
        23708,
        24099,
        24357,
        24237,
        24401,
        24344,
        23586,
        22380,
        21004,
        17287,
        14747,
        13076,
        12555,
        12144,
        11009,
        10950,
        10871,
        10824,
        10577,
        10527,
        10475,
        10421,
        10358,
        10295,
        10104,
        9914,
        9620,
        9326,
        5113,
        5113,
        4954,
        4804,
        4761,
        4717,
        4368,
        4018,
      ],
    },
    {
      name: 'USSR/Russia',
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        5,
        25,
        50,
        120,
        150,
        200,
        426,
        660,
        869,
        1060,
        1605,
        2471,
        3322,
        4238,
        5221,
        6129,
        7089,
        8339,
        9399,
        10538,
        11643,
        13092,
        14478,
        15915,
        17385,
        19055,
        21205,
        23044,
        25393,
        27935,
        30062,
        32049,
        33952,
        35804,
        37431,
        39197,
        45000,
        43000,
        41000,
        39000,
        37000,
        35000,
        33000,
        31000,
        29000,
        27000,
        25000,
        24000,
        23000,
        22000,
        21000,
        20000,
        19000,
        18000,
        18000,
        17000,
        16000,
        15537,
        14162,
        12787,
        12600,
        11400,
        5500,
        4512,
        4502,
        4502,
        4500,
        4500,
      ],
    },
  ],
};

const options4 = {
  title: {
    style: {
      color: 'black',
    },
    text: 'מונשמים (מתוך קשה)',
  },

  xAxis: {
    tickInterval: 1,
    type: 'logarithmic',
    accessibility: {
      rangeDescription: 'Range: 1 to 10',
    },
  },

  yAxis: {
    type: 'logarithmic',
    minorTickInterval: 0.1,
    accessibility: {
      rangeDescription: 'Range: 0.1 to 1000',
    },
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br />',
    pointFormat: 'x = {point.x}, y = {point.y}',
  },

  series: [
    {
      data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
      pointStart: 1,
    },
  ],
};

const options5 = {
  chart: {
    type: 'line',
  },
  credits: {
    enabled: false,
  },
  title: {
    style: {
      color: 'black',
    },
    text: 'מדד מחזור העסקים באיו"ש וברצ"ע',
  },
  subtitle: {
    text: 'מדד מחזור העסקים החודשי, מרץ 2018 עד מרץ 2020',
  },
  xAxis: {
    categories: [
      'מרץ',
      'אפריל',
      'מאי',
      'יוני',
      'יולי',
      'אוגוסט',
      'ספטמבר',
      'אוקטובר',
      'נובמבר',
      'דצמבר',
      'ינואר',
      'פברואר',
      'מרץ',
      'אפריל',
      'יוני',
      'יולי',
    ],
    labels: {
      style: {
        color: 'black',
      },
    },
    useHTML: Highcharts.hasBidiBug,
  },
  yAxis: {
    title: {
      style: {
        color: 'black',
      },
      text: 'Temperature (°C)',
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: 'רצ״ע',
      useHTML: Highcharts.hasBidiBug,
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.4,
        21.5,
        25.2,
        26.5,
        23.3,
        18.3,
        13.9,
        9.6,
      ],
    },
    {
      useHTML: Highcharts.hasBidiBug,
      name: 'איו״ש',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
    },
  ],
};

const options6 = {
  chart: {
    type: 'column',
  },
  credits: {
    enabled: false,
  },
  title: {
    style: {
      color: 'black',
    },
    text: 'עקומה אפידמית',
  },
  subtitle: {
    text:
      'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
        color: 'black',
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      style: {
        color: 'black',
      },
      text: 'Population (millions)',
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>',
  },
  series: [
    {
      name: 'Population',
      data: [
        ['Shanghai', 24.2],
        ['Beijing', 20.8],
        ['Karachi', 14.9],
        ['Shenzhen', 13.7],
        ['Guangzhou', 13.1],
        ['Istanbul', 12.7],
        ['Mumbai', 12.4],
        ['Moscow', 12.2],
        ['São Paulo', 12.0],
        ['Delhi', 11.7],
        ['Kinshasa', 11.5],
        ['Tianjin', 11.2],
        ['Lahore', 11.1],
        ['Jakarta', 10.6],
        ['Dongguan', 10.6],
        ['Lagos', 10.6],
        ['Bengaluru', 10.3],
        ['Seoul', 9.8],
        ['Foshan', 9.3],
        ['Tokyo', 9.3],
      ],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
  ],
};

const options7 = {
  chart: {
    type: 'pie',
  },
  credits: {
    enabled: false,
  },
  title: {
    style: {
      color: 'black',
    },
    text: 'Countries compared by population density and total area.',
  },
  tooltip: {
    headerFormat: '',
    pointFormat:
      '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
      'Area (square km): <b>{point.y}</b><br/>' +
      'Population density (people per square km): <b>{point.z}</b><br/>',
  },
  series: [
    {
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      data: [
        {
          name: 'Spain',
          y: 505370,
          z: 92.9,
        },
        {
          name: 'France',
          y: 551500,
          z: 118.7,
        },
        {
          name: 'Poland',
          y: 312685,
          z: 124.6,
        },
        {
          name: 'Czech Republic',
          y: 78867,
          z: 137.5,
        },
        {
          name: 'Italy',
          y: 301340,
          z: 201.8,
        },
        {
          name: 'Switzerland',
          y: 41277,
          z: 214.5,
        },
        {
          name: 'Germany',
          y: 357022,
          z: 235.6,
        },
      ],
    },
  ],
};

const options8 = {
  chart: {
    type: 'column',
    backgroundColor: 'rgba(255,255,255)',
  },
  credits: {
    enabled: false,
  },
  title: {
    style: {
      color: 'black',
    },
    text: 'עקומה אפידמית',
  },
  subtitle: {
    text:
      'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
        color: 'black',
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      style: {
        color: 'black',
      },
      text: 'Population (millions)',
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>',
  },
  series: [
    {
      name: 'Population',
      data: [
        ['Shanghai', 24.2],
        ['Beijing', 20.8],
        ['Karachi', 14.9],
        ['Shenzhen', 13.7],
        ['Guangzhou', 13.1],
        ['Istanbul', 12.7],
        ['Mumbai', 12.4],
        ['Moscow', 12.2],
        ['São Paulo', 12.0],
        ['Delhi', 11.7],
        ['Kinshasa', 11.5],
        ['Tianjin', 11.2],
        ['Lahore', 11.1],
        ['Jakarta', 10.6],
        ['Dongguan', 10.6],
        ['Lagos', 10.6],
        ['Bengaluru', 10.3],
        ['Seoul', 9.8],
        ['Foshan', 9.3],
        ['Tokyo', 9.3],
      ],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '7px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
  ],
};

class App extends Component {
  state = {
    data: options,
  };
  render() {
    return (
      <div className="page">
        <Grid id="container-2"></Grid>
      </div>
    );
  }
}

export default App;
