import React from "react";
import ResponsiveGrid from "./Dashboard/ResponsiveGrid";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

function App() {
  return (
    <div style={{ height: "100vh", background: "rgb(237,241,247)" }}>
      <ResponsiveGrid />
    </div>
  );
}

export default App;
