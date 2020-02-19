import React, {Component} from 'react';
import RemoveBtn from './RemoveBtn';

class Category extends Component<{
	label: string,
	parentId?: string,
	id: string,
	onRemove?: any,
}> {
	render() {
		const { label, onRemove, id } = this.props;

		return (
			<div className='category'>
				{ label }

				<RemoveBtn id={id} onRemove={onRemove} />
			</div>
		);
	}
}

export default Category;
