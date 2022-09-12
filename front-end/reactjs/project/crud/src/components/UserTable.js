import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

export default class UserTable extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>0895330028942</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
