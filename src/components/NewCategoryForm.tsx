import React, {Component} from 'react';
import AddBtn from "./AddBtn";
import CategoryInterface from '../interfaces/Category.interface';
import uuid from 'uuid-random';

const actions = {
	onAdd: (newCategory: CategoryInterface, type: string): void => undefined,
};

interface NewFormInterface {
	label: string,
}

class NewCategoryForm extends Component<{
	onAdd: typeof actions.onAdd,
}, NewFormInterface> {
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

	onAdd(type: string) {
		const id = uuid();
		const { onAdd } = this.props;
		const newCategory: CategoryInterface = { id, label: this.state.label || '', parentId: 'kjhb' };

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
					type="text"
					placeholder='Type Category Label'
				/>
				<AddBtn type={'category'} onAdd={this.onAdd}/>
			</div>
		);
	}
}

export default NewCategoryForm;
