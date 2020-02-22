import React, {Component} from 'react';
import { connect } from "react-redux";
import InitialStateInterface from "../interfaces/InitialState.interface";

const actions = {
	onAdd: (type: string, currentCategoryId: string): void => undefined,
};

interface AddBtnInterface {
	onAdd: typeof actions.onAdd;
	type: string;
	currentCategoryId: string;
}

class AddBtn extends Component<AddBtnInterface> {
	constructor(props: AddBtnInterface) {
		super(props);

		this.onAdd = this.onAdd.bind(this);
	}

	onAdd() {
		const { onAdd, type, currentCategoryId } = this.props;

		onAdd(type, currentCategoryId);
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

export default connect((state: InitialStateInterface): { currentCategoryId: string } => {
	return {
		currentCategoryId: state.common.currentCategoryId
	};
})(AddBtn);
