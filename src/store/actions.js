import axios from 'axios';

export const getTableData = (values) => async dispatch => {
    axios({
        method: "get",
        url: "http://localhost:3000/data.json",
        crossDomain: true
    }).then(resp => {
        dispatch({
            type: 'table',
            payload: {tableData: resp.data}
        })
    });
}