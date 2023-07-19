
import Classes from "./Input.module.css";
import React, { useRef, useState } from "react";

const Input = (props)=>{

    const textValue = useRef();
    const priority = useRef();
    const [isTaskEmpty, setIsTaskEmpty] = useState(false);

    const submitHandler = (event)=>{
        event.preventDefault();
        const taskTitle = textValue.current.value;
        const taskPriority = priority.current.value;

        if(taskTitle === ''){
            setIsTaskEmpty(true);
            return;
        }

        setIsTaskEmpty(false);

        props.onClick(taskTitle, taskPriority);
        textValue.current.value = "";
        priority.current.value = "1";
    }


    return(
        <div className = {Classes['form-container']}>
            <form  onSubmit = {submitHandler}>
                <div>
                    <textarea 
                    rows='4' 
                    placeholder="Type your task here"
                    ref = {textValue}
                    autoFocus>
                    </textarea>
                    {isTaskEmpty && <p className={Classes.warning}>Your task box is empty</p>}
                    <label>Set Priority</label>
                    <input type="number"  ref={priority} min='1' defaultValue='1'/>
                </div>
                <div className={Classes.action}>
                    <button>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default Input;