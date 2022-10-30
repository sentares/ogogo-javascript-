import React, { useState } from 'react'
import { Add } from './addButton'

export const NewTodo = ({ setTodos }) => {
	const [title, setTitle] = useState('')

	const addTodo = title => {
		setTodos(prev => [
			{
				_id: new Date(),
				title: title,
				isCompleted: false,
			},
			...prev,
		])
		setTitle('')
	}

	console.log(title)

	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-2'>
			<input
				type='text'
				onChange={e => setTitle(e.target.value)}
				value={title}
				className='bg-transparent w-full border-1 outline-none p-3'
				placeholder='New ToDo'
			/>
			<button onClick={() => addTodo(title)}>
				<Add />
			</button>
		</div>
	)
}
