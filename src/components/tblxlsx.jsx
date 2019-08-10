import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData } from '../store/actions';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/datatables.net-bs/css/dataTables.bootstrap.min.css';

const $ = require("jquery");
$.Datatable = require("datatables.net-bs");
const jszip = require("jszip");
window.JSZip = jszip;

require( 'pdfmake' );
require( 'datatables.net-buttons-bs' )();
require( 'datatables.net-buttons/js/buttons.colVis.js' )();
require( 'datatables.net-buttons/js/buttons.flash.js' )();
require( 'datatables.net-buttons/js/buttons.html5.js' )();
require( 'datatables.net-buttons/js/buttons.print.js' )();
var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class TblXlsx extends Component {
  componentDidMount = () => {
    this.props.getTableData();
  };

  componentWillUnmount = () => {};

  render() {
    this.$tbl = $(this.tblxlsx);
    this.$tbl.DataTable({
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
      "buttons": ['csv', 'excel', 'pdf', 'print']
    });
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
