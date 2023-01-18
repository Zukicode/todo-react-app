import React from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList/TodoList';
import TodoClear from './components/TodoClear';
import EmptyTask from './components/EmptyTask';
import './styles/todo.scss';

function App() {
	const [todos, setTodos] = React.useState([]);
	const [emptyPopup, setEmptyPopup] = React.useState(false);

	function addTodoInArr(value) {
		if (value !== '') {
			let newTodo = {
				id: Math.random(),
				value: value,
			};

			localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
			setTodos([...todos, newTodo]);
		} else {
			setEmptyPopup(true);

			setTimeout(() => {
				setEmptyPopup(false);
			}, 1000);
		}
	}

	React.useEffect(() => {
		if (localStorage.getItem('todos')) {
			setTodos(JSON.parse(localStorage.getItem('todos')));
		}
	}, []);

	return (
		<div className='todo-app'>
			{emptyPopup ? (
				<EmptyTask />
			) : (
				<>
					<h1 className='title'>Todo App</h1>

					<AddTodo addTodoInArr={addTodoInArr} />
					<TodoList setTodos={setTodos} todos={todos} />
					<TodoClear todosCount={todos.length} setTodos={setTodos} />
				</>
			)}
		</div>
	);
}

export default App;
