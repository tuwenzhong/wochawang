const initialState = {
    detailList:{},
    detailMsg:""
}

export default (state = initialState, { type, detailList ,detailMsg}) => {
    switch (type) {

    case "GETDETAIL":
        return { ...state, detailList }

    case "GETDETAILMSG":
        return { ...state, detailMsg }

    case "CLEAR":
        var newState={...state}
        newState.detailList="";
        newState.detailMsg=""
        return newState
    default:
        return state
    }
}
