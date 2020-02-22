import React, {Component} from 'react';
import CategoryInterface from '../interfaces/Category.interface';
import uuid from 'uuid-random';
import AddBtn from './AddBtn';

const actions = {
	onAdd: (newCategory: CategoryInterface, type: string): void => undefined,
};

interface NewFormStateInterface {
	label: string;
	id: string;
}

interface NewFormInterface {
	onAdd: typeof actions.onAdd;
}

class NewItemForm extends Component<NewFormInterface, NewFormStateInterface> {
	constructor(props: any) {
		super(props);

		this.state = {
			label: '',
			id: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onChange(e: any) {
		this.setState({
			label: e.target.value,
		});
	}

	onAdd(type: string, parentId: string) {
		const id = uuid();
		const { onAdd } = this.props;
		const newCategory: CategoryInterface = {
			id,
			label: this.state.label || '',
			parentId,
		};

		onAdd(newCategory, type);

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
					type='text'
					placeholder='Type item label'
				/>
				<AddBtn type={'item'} onAdd={this.onAdd} />
			</div>
		);
	}
}

export default NewItemForm;
