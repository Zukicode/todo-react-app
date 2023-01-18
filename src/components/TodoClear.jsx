import React from 'react';
import classes from '../styles/todo/todoClear/todoClear.module.scss';

const TodoClear = ({ todosCount, setTodos }) => {
	function clearAllTodo() {
		setTodos([]);
		localStorage.removeItem('todos');
	}

	return (
		<div className={classes.todo}>
			<p className={classes.allTodo}>You have {todosCount} pending tasks</p>
			<button onClick={clearAllTodo} className={classes.clear}>
				Clear All
			</button>
		</div>
	);
};

export default TodoClear;
