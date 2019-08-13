import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData, fetchJsFromCDN } from '../store/actions';

require('../styles/datatable.css');

const $ = require("jquery");
global.jQuery = $;

class TblXlsx extends Component {
  componentDidMount = () => {
    this.props.getTableData();
    this.props.fetchJsFromCDN('https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js');
    this.props.fetchJsFromCDN('https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js');
    this.props.fetchJsFromCDN('https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js');
    this.props.fetchJsFromCDN('https://cdn.datatables.net/buttons/1.5.6/js/buttons.bootstrap.min.js');
    this.props.fetchJsFromCDN('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js');
    this.props.fetchJsFromCDN('https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js');
    this.props.fetchJsFromCDN('https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js');
    this.props.fetchJsFromCDN('https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js');
    this.props.fetchJsFromCDN('https://cdn.datatables.net/buttons/1.5.6/js/buttons.print.min.js')
    this.props.fetchJsFromCDN('https://cdn.datatables.net/buttons/1.5.6/js/buttons.colVis.min.js')
      .then(resp => this.dataTableInit());
  };

  componentWillUnmount = () => {
    if (typeof this.table !== 'undefined') {
      this.table.destroy();
    }
  };

  dataTableInit = () => {
    this.$tbl = $(this.tblxlsx);
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
  };

  render() {
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

export default withRouter(connect(mapStateToProps, { getTableData, fetchJsFromCDN })(TblXlsx));
