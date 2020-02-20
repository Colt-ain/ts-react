import React, {Component} from 'react';
import RemoveBtn from './RemoveBtn';
import Icon from './Icon';

const actions = {
	onRemove: () => true,
	onClick: (id: string) => true,
};

class Category extends Component<{
	label: string,
	parentId?: string,
	id: string,
	onRemove: typeof actions.onRemove,
	onClick: typeof actions.onClick,
}> {
	constructor(props: any) {
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

export default Category;
