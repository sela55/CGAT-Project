import React, { useMemo ,useState} from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Chart from "./Charts";
import options from "../../options";

function ResponsiveGrid(props) {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  // Create array of refs for each chart
  const chartRef = useMemo(() => options.map((_i) => React.createRef()), []);
  
 
  


  function onResizeStop(event, id) {
    const chartId = id.i.slice(-1);
    chartRef[chartId].current.chart.reflow();

    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }
  


  function onResize(event, id) {}

  return (
    <ResponsiveGridLayout
      onResize={onResize}
      onResizeStop={onResizeStop}
      className="layout"
      
    >
      {
      options.map((MappedChart,index) => (
        <div
          data-grid={{ x: 0, y: 0, w: 3, h: 3 }}
          key={"chart-" + MappedChart.id}
          className="chartWrap"
        >
          <Chart
            ref={chartRef[MappedChart.id]}
            className="chart"
            id={"chart-" + MappedChart.id}
            options={MappedChart}
            
          />
        </div>
      ))}
      
    </ResponsiveGridLayout>
  );
}

export default ResponsiveGrid;
