import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const Charts = React.forwardRef(function (props, ref) {
  return <HighchartsReact id={props.id} Highcharts={Highcharts} options={props.options} ref={ref} />;
});

export default Charts;
