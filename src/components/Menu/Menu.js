import React ,{useState} from 'react';
import './Menu.css';
import DrawerButton from './DrawerButton';
import Drawer from "./Drawer"
import BackDrop from './BackDrop';
import MenuItems from './MenuItems';
const Menu = (props) =>{ 
    
 const [menuOpen,setMenuOpen] = useState(false)

const openHandler = () =>{
    if(!menuOpen){
        setMenuOpen(true);
    }else{
        setMenuOpen(false);
    }
}

const backDropClickHandler = ()=>{
    setMenuOpen(false);
    console.log("test2");
}
  

const items = [
{label:'Make a chart', link:'#chart'},
{label:'User Management', link:'#Manage'},
{label:'Statistics', link:'#Statistics'}
]

// let drawer = <Drawer show={menuOpen} items ={itemsArr} links ={links}/>;
let drawer = <Drawer show={menuOpen} items ={items} />;
let menuItems = <MenuItems items = {items}/>
let backDrop;  
if(menuOpen){
    // drawer = <Drawer show={menuOpen} items ={itemsArr} links ={links}/>
    backDrop = <BackDrop click={backDropClickHandler}/>
}
return(
    <div>
    <header className="Menu">
        <nav className="Menu_Nav">
            <div>
                <DrawerButton click={openHandler}/>
            </div>
            <div className="Menu_Logo"><a href="/">Home</a></div>
            <div className="Menu_Space"></div>
            <div className="Menu_Item">
                {menuItems}
            </div>
        </nav>
    </header>
    {drawer}
    {backDrop}
    </div>
);
}

export default Menu;