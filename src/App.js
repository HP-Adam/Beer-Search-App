import React, { useState, useEvent, useEffect } from 'react';
import './App.css';
import { Input, Button } from 'antd';
import List from './components/List';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleFetch = async () => {
        let request = await fetch('http://localhost:4000/api/todo');
        let data = await request.json();
        setTodoList(data.todoList);
    };

    useEffect(() => {
        handleFetch();
    }, []);

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleAddTask = async () => {
        let post = await fetch('http://localhost:4000/api/send', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput }),
        });
        let data = await post.json();
        setTodoList(data.todoList);
    };

    const deleteClick = async (spot) => {
        let delet = await fetch('http://localhost:4000/api/delete', {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ spot }),
        });
        let data = await delet.json();
        setTodoList(data.todoList);
    };
    return (
        <div>
            <div className="Row">
                <Input placeholder="task..." onChange={handleUserInput} />
                <Button onClick={handleAddTask}>add task</Button>
            </div>
            <div>
                <List todoList={todoList} deleteClick={deleteClick} />
            </div>
        </div>
    );
}

export default App;
