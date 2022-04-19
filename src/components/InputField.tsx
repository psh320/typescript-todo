import React from 'react'
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch < React.SetStateAction<string> >;
}

const InputField: React.FC<Props> = ({todo, setTodo} : Props) => {
    return (
        < form className = 'input' > <input type = "input" placeholder = 'Enter a task' className = 'input-box' value = {
            todo
        }
        onChange = {
            (e) => setTodo(e.target.value)
        } /> <button className = "input-submit" type = "submit" > Go</button></form>
    )
}

export default InputField;