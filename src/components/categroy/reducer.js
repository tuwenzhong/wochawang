const initialState = {
   categroyList:[],
   select:1,
   renderList:[]
}

export default (state = initialState, { type, categroyList,select,renderList }) => {
    switch (type) {

    case "GETARR":
        return { ...state, categroyList}
    
    case "MODIFY":
        return { ...state, select}


    case "GETRENDER":
        return { ...state, renderList}
    default:
        return state
    }
}
