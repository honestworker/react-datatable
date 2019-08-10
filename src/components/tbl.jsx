import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData } from '../store/actions';

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

class Tbl extends Component {
  componentDidMount = () => {
    this.props.getTableData();
  };

  componentWillUnmount = () => {
  };

  render() {
    this.$tbl = $(this.tbl);
    this.$tbl.DataTable({
      data: this.props.dataSet,
      columns: [
        { title: "Name" },
        { title: "Position" },
        { title: "Office" },
        { title: "Extn." },
        { title: "Start date" },
        { title: "Salary" }
      ]
    });
    return (
      <div>
        <table
          className="display"
          width="100% "
          ref={el => {
            this.tbl = el;
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataSet: state.tableReducer.tableData
  }
}

export default withRouter(connect(mapStateToProps, { getTableData })(Tbl));
