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

export const fetchJsFromCDN = (src, externals = []) => async dispatch => {
    return new Promise((resolve, reject) => {
        var list = document.getElementsByTagName("script");
        for (var indx = 0; indx < list.length; indx++) {
            if (list[indx].src === src) {
                resolve(externals.map(key => {
                    return true
                }))
            }
        }
        const script = document.createElement('script')
        script.setAttribute('src', src)
        script.addEventListener('load', () => {
            resolve(externals.map(key => {
                const ext = window[key]
                typeof ext === 'undefined' && console.warn(`No external named '${key}' in window`)
                return ext
            }))
        })
        script.addEventListener('error', reject)
        document.body.appendChild(script)
    })
}