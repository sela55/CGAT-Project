import React ,{useState}from 'react';
import './Menu.css';


const Drawer = props=>{

    let drawerClass = 'nav_drawer';
    if(props.show){
        drawerClass= 'nav_drawer open';
 
    }
    

    const ListItem = ({ value, onClick }) => {
      return(
       
        <div>
        {/* <img src={iconSRC}
        style={{float:"right" ,height:"30px"}}/> */}
        <li style={{float:"right"}}onClick={onClick}>{value}</li>
        </div>
        );
      }

    const List = ({ items }) => (
      <ul>
        {
          items.map((item, i) => <ListItem key={i} value={props.items[i].label} onClick={()=>console.log(props.items[i].link)} />)
        }
      </ul>
    );
   
return(
        <nav className={drawerClass}>
        <ul>
            <List items={props.items} />
        </ul>
    </nav>
)
}


export default Drawer;