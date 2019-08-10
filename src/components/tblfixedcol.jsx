import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData } from '../store/actions';

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");

require( 'datatables.net-buttons-bs' )();
require( 'datatables.net-buttons/js/buttons.colVis.js' )();
require( 'datatables.net-buttons/js/buttons.flash.js' )();
require( 'datatables.net-buttons/js/buttons.html5.js' )();
require( 'datatables.net-buttons/js/buttons.print.js' )();
require( 'datatables.net-fixedcolumns-bs' );
require( 'datatables.net-scroller-bs' );

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
      <div>
        <table
          className="stripe row-border order-column"
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

