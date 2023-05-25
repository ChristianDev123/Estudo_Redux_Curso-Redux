const error = (state)=>(next)=>(action)=>{
    if(action.type === "SHOW_ERROR")
        console.log(action.payload.error);
    else
        next(action);
} 

export default error;