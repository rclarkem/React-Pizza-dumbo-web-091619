import React from 'react'

const Pizza = props => {
	const { topping, size, vegetarian } = props.pizza
	return (
		<tr>
			<td>{topping}</td>
			<td>{size}</td>
			<td>{vegetarian ? 'vegetarian' : 'not vegetarian'}</td>
			<td>
				<button
					type='button'
					className='btn btn-primary'
					onClick={e => props.handleIsClicked(props.pizza)}
				>
					Edit Pizza
				</button>
			</td>
		</tr>
	)
}

export default Pizza
