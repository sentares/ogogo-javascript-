import React from 'react'
import { Check } from './checkbox/check'
import cn from 'classnames'
import { RemoveIcon } from './remove/remove'

export const TodoItem = ({ todo, changeTodo, removeTodo }) => {
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-[#006363] p-3.5 w-full flex-wrap	'>
			<button
				className='flex items-center'
				onClick={() => changeTodo(todo._id)}
			>
				<Check isCompleted={todo.isCompleted} />
				<span className={cn('flex-wrap', { 'line-through': todo.isCompleted })}>
					{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
				<RemoveIcon />
			</button>
		</div>
	)
}
