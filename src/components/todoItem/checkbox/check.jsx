import React from 'react'
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'

export const Check = ({ isCompleted }) => {
	return (
		<div
			className={cn(
				'border-2 rounded-lg border-[#e2d3de] w-5 h-5 ml-1 mr-3 flex items-center justify-center',
				{
					'bg-[#2f6ae0]': isCompleted,
				}
			)}
		>
			{isCompleted && <BsCheck size={18} className='text-gray-100' />}
		</div>
	)
}
