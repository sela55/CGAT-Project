import React from 'react';
import ResponsiveGrid from './Dashboard/ResponsiveGrid';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

import Statistics from './Statistics/Statistics';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Statistics />
    </div>
  );
}

export default App;
