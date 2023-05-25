import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { reqTasks } from '../store/task'
import AddTask from "./addTask";


export default function Tasks(){
    const dispatch = useDispatch();
    const { task, loading } = useSelector((state)=>state.task);

    useEffect(()=>{
        dispatch(reqTasks({method:"get"}));
    },[]);

    return(
        <>
            <AddTask/>

            {loading ? <p>Loading...</p>:
                <div>
                    {task.map(({task, id})=>(
                        <p key={id}>
                            {task}
                        </p>
                    ))}
                </div>
            }
        </>
    )
}