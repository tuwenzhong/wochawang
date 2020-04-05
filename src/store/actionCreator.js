export default{
    changNavTrue(){
        return {
            type:"CHANGENAVTRUE"
        }
    },
    changNavFalse(){
        return {
            type:"CHANGENAVFALSE"
        }
    },
    addCount(id){
       return{
        type:"ADDCOUNT",
        id
       }
    },
    buttonFalse(){
        return {
            type:"BUTTONFALSE"
        }
    },
    buttonTrue(){
        return {
            type:"BUTTONTRUE"
        }
    },
}