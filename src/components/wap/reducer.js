const initialState = {
    data:{},
    list:[],
    spikeObj:{}
}

export default (state = initialState, { type,data,list,spikeObj }) => {
    switch (type) {

    case "GETDATE":
        return { ...state,data }


    case "GETLIST":
        return { ...state,list }

    case "GETSPIKE":
        return { ...state,spikeObj }


    default:
        return state
    }
}
