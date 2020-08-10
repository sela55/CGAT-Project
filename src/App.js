import React from "react";
import ResponsiveGrid from "./components/Dashboard/ResponsiveGrid";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import Menu from "./components/Menu/Menu";
import Drawer from "./components/Menu/Drawer";


function App() {
  return (
    <div style={{height: '100vh'}}>
      <Menu/>
  <ResponsiveGrid></ResponsiveGrid>
  </div>
    )
}

export default App;
