import React, {Component} from 'react';
import Item from './Item';
import { editElement } from '../actions/common';
import { connect } from 'react-redux';

interface Items {
	id: string;
	label: string;
	folderId?: string;
}

class ItemsList extends Component<{
	items: Array<Items>;
	onRemove: any;
	editElement: any;
}> {
	render() {
		const { items, onRemove, editElement } = this.props;

		return (
			<div className='items-list'>
				{
					items.map((item, i) => {
						return <Item editElement={editElement} onRemove={onRemove} id={item.id} label={item.label} key={i} />
					})
				}
			</div>
		);
	}
}

export default connect(null, { editElement })(ItemsList);
