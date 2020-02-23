import React, {Component, SyntheticEvent, createRef} from 'react';
import { connect } from "react-redux";
import { enterCategory, editElement } from '../actions/common';
import RemoveBtn from './RemoveBtn';
import Icon from './Icon';
import InitialStateInterface from "../interfaces/InitialState.interface";

const actions = {
	onRemove: () => true,
	onClick: (id: string) => true,
	editElement: (updatedItem: any) => true,
};

interface CategoryState {
	isEdit: boolean;
	value: string;
}

interface CategoryComponent {
	label: string;
	parentId?: string;
	id: string;
	onRemove: typeof actions.onRemove;
	onClick: typeof actions.onClick;
	editElement: typeof actions.editElement;
}

interface CategoryProps {
	label: string;
	parentId?: string;
	id: string;
}

class Category extends Component<CategoryComponent, CategoryState> {
	constructor(props: CategoryComponent) {
		super(props);

		this.state = {
			isEdit: false,
			value: props.label,
		};


		this.onClick = this.onClick.bind(this);
		this.editElement = this.editElement.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onClick(e: React.SyntheticEvent<EventTarget>) {
		e.stopPropagation();

		const { onClick, id } = this.props;

		onClick(id);
	}

	editElement(e: React.SyntheticEvent<EventTarget>) {
		e.stopPropagation();

		this.setState((prevState) => ({ isEdit: !prevState.isEdit }));
	}

	onChange(e: any) {
		const { id, editElement } = this.props;
		const label: string = e.target.value;
		const updatedItem = { id, label };

		this.setState({ value: label });
		editElement(updatedItem);
	}

	onInputClick(e: React.SyntheticEvent<EventTarget>) {
		e.stopPropagation();
	}

	render() {
		const { isEdit, value } = this.state;
		const { label, onRemove, id } = this.props;

		return (
			<div onClick={this.onClick} className='category'>
				<Icon type={'folder'} />
				{
					isEdit
						? <input onClick={this.onInputClick} onChange={this.onChange} type="text" value={value}/>
						: <div className='name'>{ label }</div>
				}

				<RemoveBtn id={id} onRemove={onRemove} />

				<button onClick={this.editElement} className="edit">{isEdit ? 'Save' : 'Edit'}</button>
			</div>
		);
	}
}

const mapStateToProps = (state: InitialStateInterface, ownProps: CategoryProps) => {
	const { common } = state;
	const { id } = ownProps;

	const category = common.categories.find(category => category.id === id);

	return {
		label: category ? category.label : ownProps.label,
	};
};

export default connect(mapStateToProps, { enterCategory, editElement })(Category);
