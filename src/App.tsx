import React, { Component } from 'react';
import './App.css';
import CategoryInterface from "./interfaces/Category.interface";
import CategoryList from './components/CategoryList';
import NewCategoryForm from './components/NewCategoryForm';
import Categories from './fixtures/Categories';
import NewItemForm from "./components/NewItemForm";
import ItemsList from "./components/ItemsList";

interface AppState {
	categories: Array<CategoryInterface>,
	currentPath: string,
	items: Array<CategoryInterface>,
}

class App extends Component<{}, AppState> {
	constructor(props: object) {
		super(props);

		this.state = {
			categories: Categories,
			currentPath: '/',
			items: []
		};

		this.onAdd = this.onAdd.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}

	setNewItem(newItem: CategoryInterface) {
		this.setState((prevState: AppState) => {
			return {
				items: [...prevState.items, newItem],
			};
		})
	}

	setNewCategory(newCategory: CategoryInterface) {
		this.setState((prevState: AppState) => {
			return {
				categories: [...prevState.categories, newCategory],
			};
		})
	}

	onAdd(newItem: CategoryInterface, type: string) {
		if (type === 'item') return this.setNewItem(newItem);

		return this.setNewCategory(newItem);
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
				<ItemsList items={this.state.items} />
			</div>
		);
	}
}

export default App;
