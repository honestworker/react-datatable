import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData } from '../store/actions';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/datatables.net-bs/css/dataTables.bootstrap.min.css';
import '../../node_modules/datatables.net-fixedcolumns-bs/css/fixedColumns.bootstrap.min.css';

const $ = require("jquery");
$.Datatable = require("datatables.net");
$.Datatable = require("datatables.net-bs");

require( 'datatables.net-fixedcolumns-bs' );

class TblFixedCol extends Component {
  componentDidMount = () => {
    this.props.getTableData();
  };

  componentWillUnmount = () => {};

  render() {
    this.$tbl = $(this.tbl);
    this.$tbl.DataTable({
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

