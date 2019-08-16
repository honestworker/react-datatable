import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData } from '../store/actions';

const $ = require("jquery");

class TblFixedCol extends Component {
  componentDidMount = () => {
    this.props.getTableData();
  };

  componentWillUnmount = () => {
    if (typeof this.table !== 'undefined') {
      this.table.destroy();
    }
  };

  dataTableInit = () => {
    this.$tbl = $(this.tbl);
    if (typeof this.$tbl.DataTable !== 'undefined') {
      if (typeof this.table !== 'undefined') {
        this.table.destroy();
      }
      this.table = this.$tbl.DataTable({
        data: this.props.dataSet,
        columns: [
          { title: "Name" },
          { title: "Position" },
          { title: "Office" },
          { title: "Extn." },
          { title: "Salary" }
        ],
        scrollY:        300,
        scrollX:        true,
        scrollCollapse: true,
        fixedColumns:   true
      });
    }
  };

  render() {
    this.dataTableInit();
    return (
      <div className="fixed-table">
        <table
          className="table table-striped table-bordered nowrap"
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

export default withRouter(connect(mapStateToProps, { getTableData })(TblFixedCol));