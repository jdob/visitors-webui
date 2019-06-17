import React, { Component } from 'react';

import VisitorsTable from './VisitorsTable.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h2>Visitors Dashboard</h2>
        </div>
        <div>
          <VisitorsTable/>
        </div>
      </div>
    );
  }
}

export default App;
