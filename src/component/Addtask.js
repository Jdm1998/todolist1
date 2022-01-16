import React from 'react';
import './Addtask.css'
import {useState} from 'react'

function Addtask(props){
    const [title,updatetitle]=useState("");

    function inputhandle(event){
        console.log(event.target.value);
        updatetitle(event.target.value)
    }

    function submithandle(event){
        event.preventDefault();
        props.updatelist([...props.list,{'title':title,'id':props.list.length +1,'active':'true'}])
    }
return(
    <form onSubmit={submithandle}>
        <div className="Addtask">
            <div className="tasktitle">
                <label>
                    Task
                </label>
                <input type='text' onChange={inputhandle} >
                </input>
            </div>
            <div className="Addaction">
                <button type="submit">Add Task</button>
            </div>

        </div>

    </form>
)
}

export default Addtask;