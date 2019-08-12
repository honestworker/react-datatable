import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { addTableData, fetchJsFromCDN } from '../store/actions';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

require('../styles/datepicker.css');

const $ = require("jquery");
global.jQuery = $;

class Frm extends Component {
  componentDidMount = () => {
    this.props.fetchJsFromCDN('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.js').then(
      setTimeout(() => $(".datepicker").datepicker({format: 'yyyy/mm/dd'}), 1000)
    );
  };
  
  componentWillUnmount = () => {};

  handleAdd = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const send_data = [];
    for (let name of data.keys()) {
      send_data.push(data.get(name));
    }
    this.props.addTableData(send_data);

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
              <label>Start Date :</label>
              <div className="input-group date datepicker">
                <span className="input-group-addon">
                  <span className="fa fa-calendar"></span>
                </span>
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

const mapStateToProps = state => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, { addTableData, fetchJsFromCDN })(Frm));
