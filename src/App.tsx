import React, { Component } from 'react';
import './App.css';
import CategoryInterface from "./interfaces/Category.interface";
import CategoryList from './components/CategoryList';
import NewCategoryForm from './components/NewCategoryForm';
import Categories from './fixtures/Categories';
import NewItemForm from "./components/NewItemForm";
import ItemsList from "./components/ItemsList";
import CurrentPath from './components/CurrentPath';

interface AppState {
	categories: Array<CategoryInterface>,
	currentPath: string,
	items: Array<CategoryInterface>,
	currentCategoryId: string,
}

class App extends Component<{}, AppState> {
	constructor(props: object) {
		super(props);

		this.state = {
			categories: Categories,
			currentPath: '',
			items: [],
			currentCategoryId: '',
		};

		this.onAdd = this.onAdd.bind(this);
		this.onRemove = this.onRemove.bind(this);
		this.enterCategory = this.enterCategory.bind(this);
	}

	setNewItem(newItem: CategoryInterface) {
		newItem.parentId = this.state.currentCategoryId;

		this.setState((prevState: AppState) => {
			return {
				items: [...prevState.items, newItem],
			};
		})
	}

	setNewCategory(newCategory: CategoryInterface) {
		newCategory.parentId = this.state.currentCategoryId;

		this.setState((prevState: AppState) => {
			return {
				categories: [...prevState.categories, newCategory],
			};
		})
	}

	onAdd(newItem: CategoryInterface, type: string) {
		if (type === 'item') return this.setNewItem(newItem);

		this.setNewCategory(newItem);
	}

	onRemove(id: string) {
		this.setState((prevState: AppState) => ({
			categories: prevState.categories.filter(category => category.id !== id),
			items: prevState.items.filter(item => item.id !== id),
		}));
	}

	enterCategory(id: string) {
		const { categories } = this.state;
		const category: { id: string, label: string } | undefined = categories.find(category => id === category.id);
		const newCategories: Array<CategoryInterface> = categories.filter(cary => cary.parentId === id);

		this.setState(prevState => {
			return {
				currentPath: `${prevState.currentPath}/${category && category.label}`,
				categories: newCategories,
				currentCategoryId: id,
			};
		})
	}

	render() {
		const { currentPath, categories, items, currentCategoryId } = this.state;

		const filteredCategories = categories.filter(category => (category.parentId === currentCategoryId));
		const filteredItems = items.filter(items => (items.parentId === currentCategoryId));

		return (
			<div>
				<NewCategoryForm  onAdd={this.onAdd} />
				<NewItemForm id={''} label={''} onAdd={this.onAdd} />
				<hr/>
				<CurrentPath path={currentPath} />
				<CategoryList
					enterCategory={this.enterCategory}
					onRemove={this.onRemove}
					categories={filteredCategories} />
				<ItemsList items={filteredItems} onRemove={this.onRemove} />
			</div>
		);
	}
}

export default App;
