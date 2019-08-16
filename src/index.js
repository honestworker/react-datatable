import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { HashRouter, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { fetchJsFromCDN } from './store/actions';

import store from './store';
import {Provider} from "react-redux";

import $ from 'jquery';
global.$ = $;
global.jQuery = $;

require('./styles/datatable.css');
require('./styles/datepicker.css');
require('./styles/fixedcolumntable.css');

const mapStateToProps = state => {
    return {
  }
}
  
const AppWithRouting = withRouter(connect(mapStateToProps, { fetchJsFromCDN })(App));

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <AppWithRouting />
        </HashRouter>
    </Provider>
    )
    , document.getElementById('root'),
    fetchJsFromCDN(['https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js',
                        'https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.js',
                        'https://cdn.datatables.net/fixedcolumns/3.2.6/js/dataTables.fixedColumns.min.js',
                        'https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js',
                        'https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js',
                        'https://cdn.datatables.net/buttons/1.5.6/js/buttons.bootstrap.min.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js',
                        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js',
                        'https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js',
                        'https://cdn.datatables.net/buttons/1.5.6/js/buttons.print.min.js',
                        'https://cdn.datatables.net/buttons/1.5.6/js/buttons.colVis.min.js'])
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();