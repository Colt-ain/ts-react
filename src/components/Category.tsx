import React, {Component} from 'react';
import { connect } from "react-redux";
import { enterCategory } from '../actions/common';
import RemoveBtn from './RemoveBtn';
import Icon from './Icon';

const actions = {
	onRemove: () => true,
	onClick: (id: string) => true,
};

interface CategoryComponent {
	label: string;
	parentId?: string;
	id: string;
	onRemove: typeof actions.onRemove;
	onClick: typeof actions.onClick;
}

class Category extends Component<CategoryComponent> {
	constructor(props: CategoryComponent) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(e: React.SyntheticEvent<EventTarget>) {
		e.stopPropagation();

		const { onClick, id } = this.props;

		onClick(id);
	}
	render() {
		const { label, onRemove, id } = this.props;

		return (
			<div onClick={this.onClick} className='category'>
				<Icon type={'folder'} />
				<div className='name'>{ label }</div>

				<RemoveBtn id={id} onRemove={onRemove} />
			</div>
		);
	}
}

export default connect(null, { enterCategory })(Category);
