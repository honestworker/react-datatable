import axios from 'axios';

export const getTableData = (values) => async dispatch => {
    axios({
        method: "get",
        url: "http://localhost:3100/employees",
        crossDomain: true
    }).then(resp => {
        dispatch({
            type: 'table',
            payload: {tableData: resp.data}
        })
    });
}

export const addTableData = (values) => async dispatch => {
    axios({
      method: "post",
      url: "http://localhost:3100/employee",
      data: values
    }).then(resp => {
      console.log(resp);
    });
}