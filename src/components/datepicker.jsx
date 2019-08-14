import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { fetchJsFromCDN } from '../store/actions';

require('../styles/datepicker.css');

const $ = require("jquery");
global.jQuery = $;

class PickDate extends Component {
  shouldComponentUpdate = () => {
    return false;
  };

  componentDidUpdate = () => {

  };

  componentDidMount = () => {
    this.props.fetchJsFromCDN('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.js').then(
      resp => $(this.refs.datepicker).datepicker({format: 'yyyy/mm/dd'})
    );
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
  
export default withRouter(connect(mapStateToProps, { fetchJsFromCDN })(PickDate));