import { useState, useRef } from "react";
import "./todo.css";

function Todo() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef();
    const error = "The input is empty";

    
    const addTodo = () => {
        const text = inputRef.current.value;

        if (text.trim() !== "") {
            const newTodo = {
                text: text,
                completed: false
            };

            setTodos([...todos, newTodo]);
        } else {
            alert(error);
        }

        inputRef.current.value = "";
    };

   
    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    
    // const deleteTodo = (index) => {
    //     const newTodos = todos.filter((_, i) => i !== index);
    //     setTodos(newTodos);
    // };

    return (
        <div className="todo">
            <h1>Todo List Project</h1>
            <ul>
                {todos.map(({ text, completed }, index) => {
                    return (
                        <li key={index} className={completed ? "done" : ""}>
                            
                            <span onClick={() => toggleComplete(index)}>
                                {text}
                            </span>

                            <button onClick={() => deleteTodo(index)}>
                                
                            </button>

                        </li>
                    );
                })}
            </ul>

            <input type="text" ref={inputRef} />
            <button onClick={addTodo}>ADD</button>
        </div>
    );
}

export default Todo;