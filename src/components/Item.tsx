// import React from 'react';
// import Icon from './Icon';
// import RemoveBtn from './RemoveBtn';

// interface ItemInterface {
// 	id: string;
// 	label: string;
// 	parentId?: string;
// }
//
// export default function Item(props: { item: ItemInterface; onRemove: any }) {
// 	const { item, onRemove } = props;
//
// 	return(
// 		<div className='item'>
// 			<Icon type={'file'} />
// 			<div className='name'>{ item.label }</div>
// 			<RemoveBtn id={item.id} onRemove={onRemove} />
// 		</div>
// 	);
// };

import React, {Component} from 'react';
import RemoveBtn from './RemoveBtn';
import Icon from './Icon';

const actions = {
	onRemove: () => true,
	editElement: (updatedItem: any) => true,
};

interface ItemState {
	isEdit: boolean;
	value: string;
}

interface ItemComponent {
	label: string;
	parentId?: string;
	id: string;
	onRemove: typeof actions.onRemove;
	editElement: typeof actions.editElement;
}

interface ItemProps {
	label: string;
	parentId?: string;
	id: string;
}

class Item extends Component<ItemComponent, ItemState> {
	constructor(props: ItemComponent) {
		super(props);

		this.state = {
			isEdit: false,
			value: props.label,
		};


		this.editElement = this.editElement.bind(this);
		this.onChange = this.onChange.bind(this);
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
			<div className='category'>
				<Icon type={'item'} />
				{
					isEdit
						? <input onClick={this.onInputClick} onChange={this.onChange} type="text" value={value}/>
						: <div className='name'>{ label }</div>
				}

				{ !isEdit && <RemoveBtn id={id} onRemove={onRemove} /> }

				<button onClick={this.editElement} className={`edit${isEdit ? ' margin' : ''}`}>{isEdit ? 'Save' : 'Edit'}</button>
			</div>
		);
	}
}

export default Item;
