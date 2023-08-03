import styles from "@src/scss/layout.scss";
import React, {useState, useEffect} from "react";

const TodoInput = () =>{
    const [todo, setTodo] = useState<string[]>([]);
    const [inputValue, setInputValue] =useState<string>('');
    const addTodo = ()=>{
        let todoCopy = [...todo];
        if(inputValue!==''){todoCopy.unshift(inputValue)}
        setTodo(todoCopy);
    }
    return(
        <div className={styles.TodoInput__wrap}>
            <input onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="오늘 할일 추가!" maxLength={20}></input>
            <button onClick={addTodo}></button>
        </div>
    )
}
export default TodoInput;
