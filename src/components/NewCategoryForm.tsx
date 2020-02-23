import React, {Component} from 'react';
import AddBtn from './AddBtn';
import CategoryInterface from '../interfaces/Category.interface';
import uuid from 'uuid-random';

const actions = {
	onAdd: (newCategory: CategoryInterface, type: string): void => undefined,
};

interface NewFormStateInterface {
	label: string;
}

interface NewCategoryFormInterface {
	onAdd: typeof actions.onAdd;
}

class NewCategoryForm extends Component<NewCategoryFormInterface, NewFormStateInterface> {
	constructor(props: NewCategoryFormInterface) {
		super(props);

		this.state = {
			label: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onChange(e: any) {
		this.setState({
			label: e.currentTarget.value,
		});
	}

	onAdd(type: string, parentId: string) {
		if (!this.state.label) return;

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
			<div className='add-element-form'>
				<div className='label'>New Category {': '}</div>
				<input
					onChange={this.onChange}
					value={this.state.label}
					type='text'
					placeholder='Type Category Label'
				/>
				<AddBtn type={'category'} onAdd={this.onAdd}/>
			</div>
		);
	}
}

export default NewCategoryForm;
