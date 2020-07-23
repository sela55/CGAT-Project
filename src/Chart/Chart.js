import React from 'react';
import HighchartsReact from 'highcharts-react-official';


const chart = (props) => {
    return(
        <HighchartsReact
        id = {props.id}
        Highcharts={props.Highcharts}
       options={props.options}
        >
            
        </HighchartsReact>
        
    )
};


export default chart;