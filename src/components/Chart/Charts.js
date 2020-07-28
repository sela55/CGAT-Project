import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';

class Charts extends Component {
  // function Charts(props){
  constructor(props) {
    super(props);

    this.chartComponent = React.createRef();
  }

  render() {
    return (
      <div id={this.props.id} className={this.props.className} draggable="true">
        <HighchartsReact
          Highcharts={this.props.Highcharts}
          options={this.props.options}
          ref={this.chartComponent}
        ></HighchartsReact>
      </div>
    );
  }
}

export default Charts;
