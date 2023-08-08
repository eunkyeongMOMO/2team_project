import styles from "../scss/layout.scss";
import React, {useState, useEffect} from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = () =>{
    const [todo, setTodo] = useState<string[]>([]);
    const [inputValue, setInputValue] =useState<string>('');
    const addTodo = ()=>{//추가
        let todoCopy = [...todo];
        if(inputValue!==''){todoCopy.unshift(inputValue)}
        setTodo(todoCopy);
    }
    const modifyTodo = () => {}//수정
    const deleteTodo = (i:number) => {//삭제
        let todoCopy = [...todo];
        todoCopy.splice(i,1);
        setTodo(todoCopy);
    }

    return(
        <>
        <ul className={styles.TodoList__wrap}>
        {
        todo.map((value,i)=>{
                return(
                    <li key={i}>
                        <p>{value}</p>
                        <button onClick={(e)=>{e.stopPropagation(); deleteTodo(i)}}>DEL</button>
                    </li>
                )
            })
        }
        </ul>
        <div className={styles.TodoInput__wrap}>
            <input onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="오늘 할일 추가!" maxLength={20}></input>
            <button onClick={addTodo}>추가</button>
        </div>
        </>
      
    )
}
export default TodoList;
