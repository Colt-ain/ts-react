import React, { Component } from 'react';
import './App.css';
import CategoryInterface from "./interfaces/Category.interface";
import CategoryList from './components/CategoryList';
import NewCategoryForm from './components/NewCategoryForm';
import Categories from './fixtures/Categories';
import NewItemForm from "./components/NewItemForm";

interface AppState {
	categories: Array<CategoryInterface>,
	currentPath: string,
}

class App extends Component<{}, AppState> {
	constructor(props: object) {
		super(props);

		this.state = {
			categories: Categories,
			currentPath: '/',
		};

		this.onAdd = this.onAdd.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}

	onAdd(newCategory: CategoryInterface): void {
		const newState = [...this.state.categories];
		newState.push(newCategory);

		this.setState((prevState: AppState) => {
			return {
				categories: [...prevState.categories, newCategory],
			};
		})
	}

	onRemove(id: string) {
		this.setState((prevState: AppState) => ({
			categories: prevState.categories.filter(category => category.id !== id)
		}));
	}

	render() {
		return (
			<div>
				<NewCategoryForm id={''} label={''} onAdd={this.onAdd} />
				<hr/>
				<CategoryList onRemove={this.onRemove} categories={this.state.categories} />
				<hr/>
				<NewItemForm id={''} label={''} onAdd={this.onAdd} />
			</div>
		);
	}
}

export default App;
