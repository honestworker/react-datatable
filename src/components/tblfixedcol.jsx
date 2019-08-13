import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData, fetchJsFromCDN } from '../store/actions';

require('../styles/fixedcolumntable.css');

const $ = require("jquery");
global.jQuery = $;

class TblFixedCol extends Component {
  componentDidMount = () => {
    this.props.getTableData();
    this.props.fetchJsFromCDN('https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js');
    this.props.fetchJsFromCDN('https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js');
    this.props.fetchJsFromCDN('https://cdn.datatables.net/fixedcolumns/3.2.6/js/dataTables.fixedColumns.min.js')
      .then(resp => this.dataTableInit());
  };

  componentWillUnmount = () => {
    if (typeof this.table !== 'undefined') {
      this.table.destroy();
    }
  };

  dataTableInit = () => {
    this.$tbl = $(this.tbl);
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
  };

  render() {
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

export default withRouter(connect(mapStateToProps, { getTableData, fetchJsFromCDN })(TblFixedCol));

