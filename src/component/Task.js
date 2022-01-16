import './Task.css'

function Task(props){
    return(
        <div className="task">
            <div className="title">
            {props.task.title}
            </div>
            <div className="btn">

            <button onClick={()=>{props.delete(props.task.key)}}>delete</button>
            </div>
        </div>
    )
}
export default Task;