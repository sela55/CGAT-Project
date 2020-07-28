import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ChartTest from './Charts';
import Highcharts from 'highcharts';

const ResponsiveGridLayout = WidthProvider(Responsive);

const options = {
  chart: {
    type: 'area',
  },
  reflow: true,
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

const Resize = (e) => {
  console.log('test');
};

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      className: props.className,
    };
    this.myRef = React.createRef();
    this.conRef = React.createRef();
  }

  render() {
    return (
      <ResponsiveGridLayout
        {...this.props}
        id={this.props.id}
        //onResizeStop={Resize}
        //             onResizeStop={function(event) {
        //                  var height = this.conRef.current.style.height;
        //                  height = height.replace('px','');
        //                  var width = this.conRef.current.style.width;
        //                  width = width.replace('px','');

        //                  console.log('hello', this.myRef.current.chartComponent.current.chart);
        // //                 this.myRef.current.chartComponent.current.chart.reflow();
        //                //  this.myRef.current.chartComponent.current.chart.setSize(this.conRef.current.style.height,this.conRef.current.style.width);
        //                this.myRef.current.chartComponent.current.chart.setSize(width-10,height-10);

        //                this.myRef.current.chartComponent.current.chart.reflow();
        //                }.bind(this)}
      >
        <div
          key="chart-1"
          className="chartStyle"
          ref={this.conRef}
          data-grid={{ x: 0, y: 0, w: 3, h: 3 }}
        >
          <ChartTest
            id="chart-1"
            Highcharts={Highcharts}
            options={options}
            ref={this.myRef}
          ></ChartTest>
        </div>

        <div
          key="chart-2"
          className="chartStyle"
          data-grid={{ x: 0, y: 0, w: 3, h: 3 }}
        >
          <ChartTest
            id="chart-2"
            Highcharts={null}
            options={options2}
            ref={this.myRef}
          ></ChartTest>
        </div>

        <div
          key="chart-3"
          className="chartStyle"
          data-grid={{ x: 0, y: 0, w: 3, h: 3 }}
        >
          <ChartTest
            id="chart-3"
            Highcharts={null}
            options={options3}
            ref={this.myRef}
          ></ChartTest>
        </div>
      </ResponsiveGridLayout>
    );
  }
}

export default Grid;
