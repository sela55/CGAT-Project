import React from 'react';
import MaterialTable from 'material-table';
import './Statistics.css';
import { API_DATA } from './api';

class Statistics extends React.Component {
  state = { data: [], isLoading: true, selectedRow: null };

  componentDidMount() {
    // Will be an api call
    setTimeout(() => {
      this.setState({ data: API_DATA.data, isLoading: false });
    }, 1000);
  }

  render() {
    return (
      <div className="ui container">
        <MaterialTable
          title="היסטוריית פעילות"
          columns={[
            { title: 'שם משתמש', field: 'userName' },
            { title: 'הרשאות', field: 'permissions' },
            { title: 'פעולה שביצע', field: 'operation' },
            { title: 'ארגון', field: 'organization' },
            { title: 'תפקיד', field: 'role' },
            { title: 'תאריך', field: 'date' },
          ]}
          data={this.state.data}
          onRowClick={(event, row) =>
            this.setState({ selectedRow: row.tableData.id })
          }
          options={{
            search: true,
            actionsColumnIndex: -1,
            headerStyle: { color: '#000', fontSize: '16px', fontWeight: 'bold' },
            rowStyle: (rowData) => ({
              backgroundColor:
                this.state.selectedRow === rowData.tableData.id
                  ? '#EEE'
                  : '#FFF',
            }),
          }}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default Statistics;
