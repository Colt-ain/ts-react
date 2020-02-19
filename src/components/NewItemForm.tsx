import React, {Component} from 'react';
import CategoryInterface from "../interfaces/Category.interface";
import uuid from "uuid-random";
import AddBtn from "./AddBtn";


interface NewFormInterface {
	value: string,
}

class NewItemForm extends Component<CategoryInterface, NewFormInterface> {
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

		this.props.onAdd({ id, label: this.state.value }, 'item');

		this.setState({
			value: '',
		});
	}

	render() {
		return (
			<div>
				Label {': '}
				<input onChange={this.onChange} value={this.state.value} type="text"/>
				<AddBtn type={'item'} onAdd={this.onAdd} />
			</div>
		);
	}
}

export default NewItemForm;
