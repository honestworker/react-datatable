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

export const fetchJsFromCDN = (src, externals = ['exit']) => async dispatch => {
    return new Promise((resolve, reject) => {
        var js_exist = false
        var list = document.getElementsByTagName("script");
        for (var indx = 0; indx < list.length; indx++) {
            if (list[indx].src === src) {
                resolve(externals.map(key => {
                    js_exist = true
                    return false
                }))
            }
        }
        if (!js_exist) {
            const script = document.createElement('script')
            script.setAttribute('src', src)
            script.addEventListener('load', () => {
                resolve(externals.map(key => {
                    const ext = window[key]
                    return ext
                }))
            })
            script.addEventListener('error', reject)
            document.body.appendChild(script)
        }
    })
}