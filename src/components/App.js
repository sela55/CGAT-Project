import React from 'react';
import ResponsiveGrid from './Dashboard/ResponsiveGrid';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import NavBar from "./Menu/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu/Menu";
import CreateChart from "./Menu/CreateChart";
import Tabs from './Dashboard/Tabs';

function App() {
    return (
        <div style={{ height: '100vh' }}>
            <NavBar/>
            {/* <Menu/> */}
            {/* <CreateChart /> */}
            <Tabs />
            {/* <ResponsiveGrid/> */}
        </div>
    );
}

export default App;
