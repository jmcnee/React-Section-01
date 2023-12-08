import React from 'react';
import './Todo.css'

export default function Todo(todo) {
    return <li>{todo.text}</li>;
}