
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

let letter: string;
let person1: Object;
type Person = {
  name: string;
  age?: number; // put question mark becomes optional
}

let person2: Person = {
  name: "andrew",
  age: 22
}

let lotsOfPeople: Person[]

let printName1: (name: any) => void;

printName1 = (name) => {
  console.log(name);
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
