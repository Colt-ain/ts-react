import React from 'react';

interface ItemInterface {
	id: string,
	label: string,
	folderId?: string
}

export default function Item(props: { item: ItemInterface }) {
	const { item } = props;

	return(
		<div>{ item.label }</div>
	);
};
