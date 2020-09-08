import React from 'react';
import MaterialTable from 'material-table';
import { API_DATA } from './data';
import api from '../../api/api';
import './Statistics.css';

const tableConfig = {
  columns: [
    { title: 'שם משתמש', field: 'userName' },
    { title: 'הרשאות', field: 'permissions' },
    { title: 'פעולה שביצע', field: 'operation' },
    { title: 'ארגון', field: 'organization' },
    { title: 'תפקיד', field: 'role' },
    { title: 'תאריך', field: 'date' },
  ],
  tableOptions: {
    search: true,
    actionsColumnIndex: -1,
    headerStyle: {
      color: '#000',
      fontSize: '16px',
      fontWeight: 'bold',
    },
  },
};

class Statistics extends React.Component {
  state = { data: [], isLoading: true, selectedRow: null };

  onRowClicked = (event, row) => {
    this.setState({ selectedRow: row.tableData.id });
  };

  componentDidMount() {
    // Will be an api call
    setTimeout(() => {
      this.setState({ data: API_DATA.data, isLoading: false });
    }, 1000);
    api.get('/').then(response => console.log(response.data));
  }

  render() {
    return (
      <div className="ui container">
        <MaterialTable
          title="היסטוריית פעילות"
          columns={tableConfig.columns}
          data={this.state.data}
          onRowClick={this.onRowClicked}
          options={tableConfig.tableOptions}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default Statistics;
