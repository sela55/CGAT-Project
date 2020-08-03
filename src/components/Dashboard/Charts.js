import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const Charts = React.forwardRef((props, ref) => (
  <HighchartsReact
    id={props.id}
    Highcharts={Highcharts}
    options={props.options}
    ref={ref}
  />
));

export default Charts;
