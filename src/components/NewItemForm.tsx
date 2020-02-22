import React, {Component} from 'react';
import CategoryInterface from "../interfaces/Category.interface";
import uuid from "uuid-random";
import AddBtn from "./AddBtn";

const actions = {
	onAdd: (newCategory: CategoryInterface, type: string): void => undefined,
};

interface NewFormStateInterface {
	label: string;
}

interface NewFormInterface {
	id: string;
	label: string;
	parentId?: string;
	onAdd: typeof actions.onAdd;
}

class NewItemForm extends Component<NewFormInterface, NewFormStateInterface> {
	constructor(props: any) {
		super(props);

		this.state = {
			label: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onChange(e: any) {
		this.setState({
			label: e.target.value,
		});
	}

	onAdd() {
		const { label } = this.state;
		const id = uuid();

		if (!label) return;

		this.props.onAdd({ id, label }, 'item');

		this.setState({
			label: '',
		});
	}

	render() {
		return (
			<div>
				<div className='label'>New Item {': '}</div>
				<input
					onChange={this.onChange}
					value={this.state.label}
					type="text"
					placeholder='Type item label'
				/>
				<AddBtn type={'item'} onAdd={this.onAdd} />
			</div>
		);
	}
}

export default NewItemForm;
