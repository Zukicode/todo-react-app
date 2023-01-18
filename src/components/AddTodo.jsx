import React from 'react';
import { BiAddToQueue } from 'react-icons/bi';

import classes from '../styles/todo/addTodo/addTodo.module.scss';

const AddTodo = ({ addTodoInArr }) => {
	const [valueTodo, setValueTodo] = React.useState('');

	function handlerForAddTodo() {
		addTodoInArr(valueTodo);
		setValueTodo('');
	}

	return (
		<div className={classes.todo}>
			<input
				type='text'
				placeholder='Add your new todo'
				onChange={(e) => setValueTodo(e.target.value)}
				value={valueTodo}
			/>
			<button onClick={handlerForAddTodo}>
				<BiAddToQueue />
			</button>
		</div>
	);
};

export default AddTodo;
