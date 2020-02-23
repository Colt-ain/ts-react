import React from "react";
import {fireEvent, render} from "@testing-library/react";
import RemoveBtn from "../../components/RemoveBtn";

test('captures clicks', done => {
	function handleClick(id: string) {
		console.log('click on button id:', id);

		expect(id).toBe('123');

		done();
	}
	const { getByText } = render(
		<RemoveBtn id={'123'} onRemove={handleClick} />
	);
	const node = getByText("-");
	fireEvent.click(node);
});

