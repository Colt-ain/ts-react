import React from 'react';
import Icon from './Icon';
import RemoveBtn from './RemoveBtn';

interface ItemInterface {
	id: string;
	label: string;
	folderId?: string;
}

export default function Item(props: { item: ItemInterface; onRemove: any }) {
	const { item, onRemove } = props;

	return(
		<div className='item'>
			<Icon type={'file'} />
			<div className='name'>{ item.label }</div>
			<RemoveBtn id={item.id} onRemove={onRemove} />
		</div>
	);
};
