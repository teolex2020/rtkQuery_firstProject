import React from 'react'


const Card = ({title, description, country, image}) => {



  return (
		<div className='w-96 h-96 flex flex-col items-center border border-slate-500 bg-white rounded-lg p-3 gap-3'>
			<h1 className='font-semibold text-3xl'>{title}</h1>
			<p>{description}</p>

			<div className='w-96 h-72 overflow-hidden flex justify-center'>
				<img
					src={image}
					alt=''
					width={300}
					height={300}
					className='object-contain'
				/>
			</div>
			<p className='bg-red-500 px-3 py-2 my-3 rounded-md text-white cursor-pointer hover:bg-red-600'>
				Capital:   {country}
			</p>
		</div>
	)
}

export default Card