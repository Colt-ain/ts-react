import React, {Component} from 'react';
import Category from '../components/Category';
import CategoryInterface from '../interfaces/Category.interface';
// import Categories from '../fixtures/Categories';

interface CategoryListInterface {
	categories: Array<CategoryInterface>,
	onRemove?: any,
}

class CategoryList extends Component<CategoryListInterface> {
	render() {
		const { categories, onRemove } = this.props;

		return (
			<>
				<div className='categories-list'>
					{
						categories.map((category, i) => {
							return <Category onRemove={onRemove} id={category.id} label={category.label} key={i}/>;
						})
					}
				</div>
			</>
		);
	}
}

export default CategoryList;
