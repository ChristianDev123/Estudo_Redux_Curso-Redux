import axios from 'axios';
import store from "./store";
import { deleteTask, fetchTask, patchTask, reqTasks } from "./store/task";

store.dispatch(reqTasks({method:"get"}));

// store.dispatch(reqTasks({method:"post", data:{task: "This is new task"}}));

// store.dispatch(patchTask({id:7, data:{ completed:true }}))

store.dispatch(deleteTask({id:5}))