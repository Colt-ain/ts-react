import React, {Component} from 'react';
import Category from '../components/Category';
import CategoryInterface from '../interfaces/Category.interface';

interface CategoryListInterface {
	categories: Array<CategoryInterface>;
	onRemove: any;
	enterCategory: any;
}

class CategoryList extends Component<CategoryListInterface> {
	render() {
		const { categories, onRemove, enterCategory } = this.props;

		return (
			<>
				<div className='categories-list'>
					{
						categories.map((category, i) => {
							return <Category
								onClick={enterCategory}
								onRemove={onRemove}
								id={category.id}
								label={category.label}
								key={i}
							/>;
						})
					}
				</div>
			</>
		);
	}
}

export default CategoryList;
