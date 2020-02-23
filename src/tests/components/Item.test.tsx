import React from 'react';
import { render } from '@testing-library/react';
import { within, getByText } from '@testing-library/dom'
import Item from '../../components/Item';

test('Item test', () => {
	const item = {
		id: '348720fh',
		label: 'Test Item',
	};
	const onRemove = () => true;

	render(<Item key={1} id={item.id} label={item.label} onRemove={onRemove} />);

	const container = document.body;
	const aboutAnchorNode = getByText(container, /Test Item/i);
	expect(aboutAnchorNode).toBeTruthy();
});

