import React from 'react';
import HighchartsReact from 'highcharts-react-official';


function Charts(props){

    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('.container');

    const dragStart = (e) =>{
       const target = e.target;

       e.dataTransfer.setData('id',target.id);

        // setTimeout(()=>{
        //     target.style.display = "none";
        // },0);
    }

    const dragOver = (e) =>{
        e.stopPropagation(); /// wont allow dragging over a chart
         //e.preventDefault();
        //console.log(e.closest(e.currentTarget.id))
        //var el = document.getElementById('chart-1');

        e.dataTransfer.setData('chartBelow',e.currentTarget.id);
        //const dra = document.querySelectorAll('.draggable');
        
        console.log(e.currentTarget.closest(e.currentTarget.id));
    }



    return(
        <div
        id={props.id}
        className={props.className}
        draggable="true"
        onDragStart={dragStart}
        onDragOver={dragOver}
                >
            {/* {props.children} */}
            <HighchartsReact
        Highcharts={props.Highcharts}
        options={props.options}
>
            
        </HighchartsReact>
        </div>
    )
}

export default Charts


