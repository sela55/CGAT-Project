import React from 'react';
import './Statistics.css';
import MaterialTable from 'material-table';

class Statistics extends React.Component {
  columns = [
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Operation', field: 'operation' },
    { title: 'Date', field: 'date' },
    { title: 'Birth', field: 'birthYear', type: 'numeric' },
    {
      title: 'Gender',
      field: 'gender',
      lookup: { 0: 'male', 1: 'female' },
    },
  ];
  data = [
    {
      name: 'Stav',
      surname: 'Elmashally',
      operation: 'Login',
      date: new Date().toUTCString(),
      birthYear: 1992,
      gender: 0,
    },
    {
      name: 'Sara',
      surname: 'Levi',
      operation: 'Delete Graph',
      date: new Date().toUTCString(),
      birthYear: 1996,
      gender: 1,
    },
  ];
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={this.columns}
          data={this.data}
          options={{ search: true }}
          title="History"
        />
      </div>
    );
  }
}

export default Statistics;
