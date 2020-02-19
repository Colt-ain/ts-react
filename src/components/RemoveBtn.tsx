import React, {Component} from 'react';

class RemoveBtn extends Component<{ id: string, onRemove: any }> {
	constructor(props: any) {
		super(props);

		this.removeHandler = this.removeHandler.bind(this);
	}

	removeHandler() {
		const { id } = this.props;

		this.props.onRemove(id);
	}

	render() {
		return (
			<button onClick={this.removeHandler}>-</button>
		);
	}
}


export default RemoveBtn;
