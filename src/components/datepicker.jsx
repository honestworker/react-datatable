import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

require('../styles/datepicker.css');

const $ = require("jquery");

class PickDate extends Component {
  shouldComponentUpdate = () => {
    return false;
  };

  componentDidUpdate = () => {

  };

  componentDidMount = () => {
    $(this.refs.datepicker).datepicker({format: 'yyyy/mm/dd'});
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group date" ref="datepicker">
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}
  
export default withRouter(connect(mapStateToProps, { })(PickDate));