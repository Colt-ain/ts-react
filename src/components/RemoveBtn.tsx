import React, {Component} from 'react';

interface RemoveBtnInterface {
	id: string;
	onRemove: any;
}

class RemoveBtn extends Component<RemoveBtnInterface> {
	constructor(props: RemoveBtnInterface) {
		super(props);

		this.removeHandler = this.removeHandler.bind(this);
	}

	removeHandler(e: React.SyntheticEvent<EventTarget>) {
		e.stopPropagation();

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
