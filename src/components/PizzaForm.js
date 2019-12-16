import React from 'react'

const PizzaForm = props => {
	const { pizzaChange } = props
	return (
		<div className='form-row'>
			<div className='col-5'>
				<input
					type='text'
					onChange={props.onTypeChange}
					className='form-control'
					placeholder='Pizza Topping'
					value={pizzaChange.topping}
				/>
			</div>
			<div className='col'>
				<select
					value={pizzaChange.size}
					className='form-control'
					onChange={props.onDropDownChange}
				>
					<option value='Small'>Small</option>
					<option value='Medium'>Medium</option>
					<option value='Large'>Large</option>
				</select>
			</div>
			<div className='col'>
				<div className='form-check'>
					<input
						className='form-check-input'
						onChange={props.onRadioChange}
						type='radio'
						value='Vegetarian'
						checked={pizzaChange.vegetarian}
					/>
					<label className='form-check-label'>Vegetarian</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						onChange={props.onRadioChange}
						type='radio'
						value='Not Vegetarian'
						checked={!pizzaChange.vegetarian}
					/>
					<label className='form-check-label'>Not Vegetarian</label>
				</div>
			</div>
			<div className='col'>
				<button
					type='submit'
					className='btn btn-success'
					onClick={props.onSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	)
}

export default PizzaForm
