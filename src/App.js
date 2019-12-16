import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
	state = {
		allPizzas: [],
		pizzaChange: {},
	}

	componentDidMount() {
		fetch('http://localhost:3000/pizzas')
			.then(response => response.json())
			.then(response => {
				this.setState({
					allPizzas: response,
				})
			})
	}

	handleIsClicked = pizza => {
		this.setState({
			pizzaChange: pizza,
		})
	}

	onTypeChange = event => {
		console.log(event.target.value)
		const pizzaName = event.target.value
		this.setState(previousState => {
			return {
				pizzaChange: { ...previousState.pizzaChange, topping: pizzaName },
			}
		})
	}
	onDropDownChange = event => {
		const pizzaSize = event.target.value
		this.setState(previousState => {
			return {
				pizzaChange: { ...previousState.pizzaChange, size: pizzaSize },
			}
		})
	}
	onRadioChange = event => {
		const pizzaVeg = event.target.value === 'Vegetarian'
		this.setState(previousState => {
			return {
				pizzaChange: { ...previousState.pizzaChange, vegetarian: pizzaVeg },
			}
		})
	}

	onSubmit = () => {
		if (this.state.pizzaChange.id) {
			fetch(`http://localhost:3000/pizzas/${this.state.pizzaChange.id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					topping: this.state.pizzaChange.topping,
					size: this.state.pizzaChange.size,
					vegetarian: this.state.pizzaChange.vegetarian,
				}),
			})
				.then(response => response.json())
				.then(response => {
					const newPizza = this.state.allPizzas.map(pizza => {
						if (pizza.id === this.state.pizzaChange.id) {
							return response
						} else {
							return pizza
						}
					})
					this.setState({ allPizzas: newPizza })
				})
		}
	}

	render() {
		console.log(this.state.pizzaChange)
		return (
			<Fragment>
				<Header />
				<PizzaForm
					pizzaChange={this.state.pizzaChange}
					onTypeChange={this.onTypeChange}
					onDropDownChange={this.onDropDownChange}
					onRadioChange={this.onRadioChange}
					onSubmit={this.onSubmit}
				/>
				<PizzaList
					pizzas={this.state.allPizzas}
					handleIsClicked={this.handleIsClicked}
				/>
			</Fragment>
		)
	}
}

export default App
