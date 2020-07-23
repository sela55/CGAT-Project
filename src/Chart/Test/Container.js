import React from 'react';

function Test(props){
    const drop = (e) =>{
        e.preventDefault();
       const id = e.dataTransfer.getData('id');

       const chart = document.getElementById(id);

        chart.style.display = 'block';


        const chartBelow = e.dataTransfer.getData('chartBelow');

        const element = document.getElementById(chartBelow);
        console.log(element);

        //console.log(e.currentTarget.id)
        e.target.insertBefore(chart,element);
        //e.target.appendChild(chart);
        
    }
    
   
    const dragOver = (e) =>{        
        e.preventDefault();
        e.stopPropagation();
    
    }

   

    const dragEnd = (e) => {
        
    }

    
   
    return (
        <div 
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        >
            {props.children}
      
        </div>
    )
}

export default Test