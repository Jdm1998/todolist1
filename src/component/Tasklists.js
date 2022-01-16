
import Task from "./Task";
import {useState} from 'react'
import Addtask from "./Addtask";
function Tasklists( ){
    const [list,updatelist]=useState([
        {   id:1,
            title:"task_1",
            active:"true"
        }
    ]);
    function deletetask(key){
updatelist(list.map(task=>{
    if(task.id!=key)
    return task
    else
        return {
            id:task.id,
            title:task.title,
            active:"false"

            
    }
}))
    }
    return (
        <div>
            <Addtask list={list} updatelist={updatelist}/>
            <h2>List</h2>
            {console.log(list)}
         <div className="tasklist">
             {
                 list.map(tsk=>{
                     if(tsk.active=='true')
                     return(
                     <Task task={tsk} delete={deletetask}></Task>
                     )
                 })
             }
        </div>

        </div>
        
    )

}
export default Tasklists;