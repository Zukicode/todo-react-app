import React from 'react';
import { FaTrash } from 'react-icons/fa';

import classes from '../../../styles/todo/todoList/todoList.module.scss';

const TodoItem = ({ id, value, setTodos, todos }) => {
	function deleteTodo() {
		let tempTodos = todos.filter((value) => value.id != id);
		setTodos([...tempTodos]);
		localStorage.setItem('todos', JSON.stringify([...tempTodos]));
	}

	return (
		<div className={classes.todo}>
			<div className={classes.text}>
				<p>{value}</p>
			</div>
			<button onClick={deleteTodo} className={classes.delete}>
				<FaTrash className={classes.icon} />
			</button>
		</div>
	);
};

export default TodoItem;
