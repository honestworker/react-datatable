import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData } from '../store/actions';

const $ = require("jquery");

class TblXlsx extends Component {
  componentDidMount = () => {
    this.props.getTableData();
  };

  componentWillUnmount = () => {
    if (typeof this.table !== 'undefined') {
      this.table.destroy();
    }
  };

  dataTableInit = () => {
    this.$tbl = $(this.tblxlsx);
    if (typeof this.$tbl.DataTable !== 'undefined') {
      this.table = this.$tbl.DataTable({
        data: this.props.dataSet,
        columns: [
          { title: "Name" },
          { title: "Position" },
          { title: "Office" },
          { title: "Extn." },
          { title: "Start date" },
          { title: "Salary" }
        ],
        "dom": 'Bfrtip',
        "buttons": ['csv', 'excel', 'pdfHtml5', 'print']
      });
    }
  };

  render() {
    this.dataTableInit();
    return (
      <div>
        <table
          className="table table-striped table-bordered"
          width="100% "
          ref={el => {
            this.tblxlsx = el;
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

export default withRouter(connect(mapStateToProps, { getTableData })(TblXlsx));