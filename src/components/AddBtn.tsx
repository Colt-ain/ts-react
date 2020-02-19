import React, {Component} from 'react';

class AddBtn extends Component<{ onAdd: any, type: string }> {
	constructor(props: any) {
		super(props);

		this.onAdd = this.onAdd.bind(this);
	}

	onAdd() {
		const { onAdd } = this.props;

		onAdd(this.props.type);
	}

	render() {
		const { type } = this.props;

		return (
			<button onClick={this.props.onAdd}>
				Add { type }
			</button>
		);
	}
}

export default AddBtn;
