import { useState } from "react";
import { useDispatch } from "react-redux";
import { reqTasks } from '../store/task';

export default function AddTask(){
    const [taskName, setTaskName] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(){
        dispatch(reqTasks({ method:"post", data:{ task:taskName } }));
    }

    return(
        <form onSubmit={()=>handleSubmit()}>
            <input type="text" value={taskName} onChange={(e)=>setTaskName(e.target.value)} />
            <input type="submit" value="Adicionar Tarefa" />
        </form>
    );
}