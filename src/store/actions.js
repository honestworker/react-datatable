export const getTableData = (values) => async dispatch => {
    fetch('http://localhost:3100/employees', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'table',
                payload: {tableData: data}
            })});
}

export const addTableData = (values) => async dispatch => {    
    fetch("http://localhost:3100/employee",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json, text/plain',
        },
        body: JSON.stringify(values)
    }).then(resp => {
        console.log(resp);
    });
}

export const fetchJsFromCDN = (srcs, externals = ['exit']) => async dispatch => {
    new Promise((resolve, reject) => {
        for (var src_indx = 0; src_indx < srcs.length; src_indx++) {
            var js_exist = false;
            var list = document.getElementsByTagName("script");
            for (var indx = 0; indx < list.length; indx++) {
                if (list[indx].src === srcs[src_indx]) {
                    js_exist = false;
                }
            }
            if (!js_exist) {
                const script = document.createElement('script')
                script.setAttribute('src', srcs[src_indx])
                script.addEventListener('error', reject)
                document.body.appendChild(script)
            }
        }
    })
}