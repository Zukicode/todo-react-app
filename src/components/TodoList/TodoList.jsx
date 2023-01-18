import React from 'react';
import TodoItem from './TodoItem/TodoItem';

import classes from '../../styles/todo/todoList/todoList.module.scss';

const TodoList = ({ todos, setTodos }) => {
	return (
		<div className={classes.todoList}>
			{todos.map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						id={todo.id}
						value={todo.value}
						todos={todos}
						setTodos={setTodos}
					/>
				);
			})}
		</div>
	);
};

export default TodoList;
