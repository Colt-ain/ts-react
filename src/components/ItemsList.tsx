import React, {Component} from 'react';
import Item from './Item';

interface Items {
	id: string,
	label: string,
	folderId?: string
}

class ItemsList extends Component<{
	items: Array<Items>
}> {
	render() {
		const { items } = this.props;

		return (
			<div>
				{
					items.map(item => {
						return <Item item={item} />
					})
				}
			</div>
		);
	}
}


export default ItemsList;
