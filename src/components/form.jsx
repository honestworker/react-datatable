import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const $ = require("jquery");

class Frm extends Component {
  componentDidMount = () => {};

  componentWillUnmount = () => {};

  handleAdd = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const send_data = Array();
    for (let name of data.keys()) {
      send_data.push(data.get(name));
    }
    axios({
      method: "post",
      url: "http://localhost:3100/employee",
      data: send_data
    }).then(resp => {
      console.log(resp);
    });

    $("form")[0].reset();
  };

  render() {
    return (
      <React.Fragment>
        <form id="eventform" onSubmit={this.handleAdd}>
          <div className="row">
            <div className="col-xs-4">
              <div className="form-group">
                <label>Name :</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  ref={el => (this.formName = el)}
                />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label>Position :</label>
                <input
                  type="text"
                  className="form-control"
                  name="position"
                  ref={el => (this.formPosition = el)}
                />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label>Office :</label>
                <input
                  type="text"
                  className="form-control"
                  name="office"
                  ref={el => (this.formOffice = el)}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4">
              <div className="form-group">
                <label>Ext :</label>
                <input
                  type="text"
                  className="form-control"
                  name="ext"
                  ref={el => (this.formExt = el)}
                />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label>Start Date :</label>
                <input
                  type="text"
                  className="form-control"
                  name="startDate"
                  ref={el => (this.formDate = el)}
                />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label>Salary :</label>
                <input
                  type="text"
                  className="form-control"
                  name="salary"
                  ref={el => (this.formSalary = el)}
                />
              </div>
            </div>
          </div>

          <input type="submit" className="btn btn-block btn-info btn-admins-only" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(Frm);