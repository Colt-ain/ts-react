import React, {Component} from 'react';

const actions = {
	onAdd: (type: string): void => undefined,
};

interface AddBtnInterface {
	onAdd: typeof actions.onAdd;
	type: string;
}

class AddBtn extends Component<AddBtnInterface> {
	constructor(props: AddBtnInterface) {
		super(props);

		this.onAdd = this.onAdd.bind(this);
	}

	onAdd() {
		const { onAdd, type } = this.props;

		onAdd(type);
	}

	render() {
		const { type } = this.props;

		return (
			<button className='add-btn' onClick={this.onAdd}>
				Add { type }
			</button>
		);
	}
}

export default AddBtn;
