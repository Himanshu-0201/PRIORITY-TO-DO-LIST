import React , {useState} from "react";
import Input from "./Input/Input";
import TaskItem from "./TaskItem/TaskItem";
import Classes from "./TaskList.module.css"; 


const TaskList = ()=>{

    const [taskList, setTaskList] = useState([{priority : 1, title : "Google meet with niranjan"}]);

    const onClickHandler = (taskTitle, taskPriority)=>{
        setTaskList(preTaskList => {

            const preTaskListLength = preTaskList.length;

            if(taskPriority > preTaskListLength){
                return [...preTaskList, {priority : preTaskListLength+1, title : taskTitle}];
            }

            let currPriority = 1;
            const newTaskList = [];

            for(let i = 0; i<preTaskList.length; i++){

                if(currPriority == taskPriority){
                    newTaskList.push({
                        priority : currPriority,
                        title : taskTitle
                    });

                    currPriority += 1;
                }

                newTaskList.push({priority : currPriority, title : preTaskList[i].title});
                currPriority += 1;

            }

            return newTaskList;
        })
    }

    taskList.sort( (task1, task2) => {
        return task1.priority - task2.priority;
    })


    const removeTaskHandler = (id)=>{

        setTaskList(preTaskList => {

            const preTaskListLength = preTaskList.length;
           
            const newTaskList = [];

            let currPriority = 1;

            for(let i=0; i<preTaskListLength; i++){

                if(preTaskList[i].priority === id){
                    continue;
                }

                newTaskList.push({
                    priority : currPriority,
                    title : preTaskList[i].title
                });

                currPriority += 1;

            }

            return newTaskList;

        });


    }

    const taskListLength = taskList.length;

    return <>

        <Input
            onClick = {onClickHandler}
        />


        <div  className = {Classes['task-list']} >

            {taskList.map( task => {
                return <TaskItem 
                    key = {task.priority}
                    priority = {task.priority}
                    title = {task.title}
                    removeTask = {removeTaskHandler}
                />
            })}

            {taskListLength === 0 && <p className={Classes['empty-task-bar']}>I am waiting for you to add task</p>}
        </div>
    </>
}

export default TaskList;