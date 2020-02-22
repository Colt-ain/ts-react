import React, {Component} from 'react';
import Item from './Item';

interface Items {
	id: string;
	label: string;
	folderId?: string;
}

class ItemsList extends Component<{
	items: Array<Items>;
	onRemove: any;
}> {
	render() {
		const { items, onRemove } = this.props;

		return (
			<div className='items-list'>
				{
					items.map((item, i) => {
						return <Item onRemove={onRemove} item={item} key={i} />
					})
				}
			</div>
		);
	}
}


export default ItemsList;
