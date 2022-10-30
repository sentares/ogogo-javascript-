import React, { useState } from 'react'
import { TodoItem } from '../todoItem/todoItem'
import { NewTodo } from '../todoItem/addTodo/newTodo'

const data = []

export const TodoList = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => {
		setTodos([...todos].filter(t => t._id !== id))
	}

	return (
		<div className='text-[#e1e8d1] mx-auto w-[500px]'>
			<h1 className='text-3xl font-bold text-center mb-8 text-white'>
				Your To<strong className='text-[#009999]'>Do</strong>
			</h1>
			<NewTodo setTodos={setTodos} />
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}
		</div>
	)
}
