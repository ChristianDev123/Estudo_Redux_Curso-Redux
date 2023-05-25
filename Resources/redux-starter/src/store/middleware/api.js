import axios from 'axios';
import apiCall from '../GeneralActionAPI';

const api = ({dispatch})=>(next)=>(action)=>{
    if(action.type !== apiCall.type)
        return next(action);
    
    const { url, method, data, onSucess, onError } = action.payload;
    axios.request({
        baseURL: "http://localhost:5000/api",
        url,
        method,
        data,
    })
    .then(({data})=>{
        dispatch({ type:onSucess, payload:data });
    })
    .catch((error)=>{
        dispatch({ type:onError, payload:error.message });
    });

}

export default api;