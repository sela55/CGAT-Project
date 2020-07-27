import React from "react";
import "./Statistics.css";
import MaterialTable from "material-table";

class Statistics extends React.Component {
  columnsConfig = [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth", field: "birthYear", type: "numeric" },
    {
      title: "Gender",
      field: "gender",
      lookup: { 0: "male", 1: "female" },
    },
  ];
  data = [
    {
      name: "Stav",
      surname: "Elmashally",
      birthYear: 1992,
      gender: 1,
    },
  ];
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={this.columnsConfig}
          data={this.data}
          options={{ search: true }}
          title="History"
        />
      </div>
    );
  }
}

export default Statistics;
