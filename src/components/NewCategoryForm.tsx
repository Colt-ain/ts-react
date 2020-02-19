import React, {Component} from 'react';
import AddBtn from "./AddBtn";
import CategoryInterface from '../interfaces/Category.interface';
import uuid from 'uuid-random';

interface NewFormInterface {
	value: string,
}

class NewCategoryForm extends Component<CategoryInterface, NewFormInterface> {
	constructor(props: any) {
		super(props);

		this.state = {
			value: '',
		};

		this.onChange = this.onChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onChange(e: any) {
		this.setState({
			value: e.target.value,
		});
	}

	onAdd() {
		const id = uuid();

		this.props.onAdd?.({ id, label: this.state.value });
	}

	render() {
		return (
			<div>
				Label {': '}
				<input onChange={this.onChange} value={this.state.value} type="text"/>
				<AddBtn type={'category'} onAdd={this.onAdd}/>
			</div>
		);
	}
}

export default NewCategoryForm;
