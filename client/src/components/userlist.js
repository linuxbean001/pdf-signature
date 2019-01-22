import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
class UserList extends Component{
  render() {
    return (
                 <div className="userlist-block">

                 <div className="banner">
                  <h2>
                  <a href="#">Home</a>
                  <i className="fa fa-angle-right"></i>
                  <span>User List</span>
                  </h2>
                 </div>
                 <div className="blank">


         <div className="blank-page">
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                          <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </Table>
                      </div>
                      </div>
                     </div>
    );
  }
}

export default UserList;
