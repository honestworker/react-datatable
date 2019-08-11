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