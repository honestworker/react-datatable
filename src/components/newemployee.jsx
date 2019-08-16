import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PickDate from "./datepicker";
import { addTableData } from '../store/actions';

const $ = require("jquery");

class NewEmployee extends Component {
  componentDidMount = () => {};

  componentWillUnmount = () => {};

  handleAdd = event => {
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
                <input type="text" className="form-control" name="name" />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label>Position :</label>
                <input type="text" className="form-control" name="position" />
              </div>
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label>Office :</label>
                <input type="text" className="form-control" name="office" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4">
              <div className="form-group">
                <label>Ext :</label>
                <input type="text" className="form-control" name="ext" />
              </div>
            </div>
            <div className="col-xs-4">
              <label>Start Date :</label>
              <PickDate />
            </div>
            <div className="col-xs-4">
              <div className="form-group">
                <label>Salary :</label>
                <input type="text" className="form-control" name="salary" />
              </div>
            </div>
          </div>

          <input
            type="submit"
            className="btn btn-block btn-info btn-admins-only"
            value="Submit"
          />
        </form>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
  }
}

export default withRouter(connect(mapStateToProps, { addTableData })(NewEmployee));