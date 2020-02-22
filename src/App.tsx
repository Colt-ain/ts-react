import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Categories from './fixtures/Categories';
import CategoryInterface from './interfaces/Category.interface';
import InitialStateInterface from './interfaces/InitialState.interface';
import CategoryList from './components/CategoryList';
import NewCategoryForm from './components/NewCategoryForm';
import NewItemForm from './components/NewItemForm';
import ItemsList from './components/ItemsList';
import CurrentPath from './components/CurrentPath';
import BackBtn from './components/BackBtn';
import  { enterCategory, createCategory, createItem } from './actions/common';

const actions = {
	enterCategory: (id: string): void => undefined,
	createCategory: (category: CategoryInterface): void => undefined,
	createItem: (category: CategoryInterface): void => undefined,
};

interface AppState {
	categories: Array<CategoryInterface>;
	currentPath: string | undefined;
	items: Array<CategoryInterface>;
	currentCategoryId: string;
	enterCategory: typeof actions.enterCategory;
	createCategory: typeof actions.createCategory;
	createItem: typeof actions.createItem;
}

interface AppProps {
	categories: Array<CategoryInterface>;
	currentPath: string | undefined;
	items: Array<CategoryInterface>;
	currentCategoryId: string;
}

class App extends Component<AppState> {
	constructor(props: AppState) {
		super(props);

		this.state = {
			categories: Categories,
			currentPath: '',
			items: [],
			currentCategoryId: '',
		};

		this.onAdd = this.onAdd.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}

	setNewItem(newItem: CategoryInterface): void {
		// newItem.parentId = this.state.currentCategoryId;
		//
		// this.setState((prevState: AppState) => {
		// 	return {
		// 		items: [...prevState.items, newItem],
		// 	};
		// })
	}

	setNewCategory(newCategory: CategoryInterface): void {
		// newCategory.parentId = this.state.currentCategoryId;
		//
		// this.setState((prevState: AppState) => {
		// 	return {
		// 		categories: [...prevState.categories, newCategory],
		// 	};
		// })
	}

	onAdd(newItem: CategoryInterface, type: string): void {
		if (type === 'item') return this.setNewItem(newItem);

		this.setNewCategory(newItem);
	}

	onRemove(id: string): void {
		this.setState((prevState: AppState) => ({
			categories: prevState.categories.filter(category => category.id !== id),
			items: prevState.items.filter(item => item.id !== id),
		}));
	}

	render() {
		const { currentPath, categories, items, enterCategory, createCategory, currentCategoryId, createItem } = this.props;

		// const filteredCategories = categories.filter(category => (category.parentId === currentCategoryId));
		// const filteredItems = items.filter(items => (items.parentId === currentCategoryId));

		return (
			<div>
				<BackBtn />
				<NewCategoryForm  onAdd={createCategory} />
				<NewItemForm onAdd={createItem}/>
				<hr/>
				<CurrentPath path={currentPath} />
				<CategoryList
					enterCategory={enterCategory}
					onRemove={this.onRemove}
					categories={categories} />
				<ItemsList items={items} onRemove={this.onRemove} />
			</div>
		);
	}
}

const mapStateToProps = (state: InitialStateInterface): AppProps => {
	const {
		categories,
		currentPath,
		items,
		currentCategoryId,
	} = state.common;

	return {
		categories, items, currentCategoryId, currentPath
	};
};

export default connect(mapStateToProps, { enterCategory, createCategory, createItem })(App);
