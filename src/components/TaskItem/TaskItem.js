
import Classes from "./TaskItem.module.css";
import completeImage from "../../Images/complete.jpeg";

const TaskItem = (props)=>{

    const removeHandler = ()=>{
        props.removeTask(props.priority);
    }

    return (
    <div className={Classes['task-item']}>
        <p className = {Classes.priority}>{props.priority}</p>
        <p className = {Classes.title}>{props.title}</p>
        {/* <span>Close</span> */}
        <div className={Classes['complete-img']} onClick = {removeHandler}>
            <img  src={completeImage} alt="complete"/>
        </div>
    </div>
    )
}

export default TaskItem;