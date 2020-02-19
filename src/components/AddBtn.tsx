import React, {Component} from 'react';

class MyComponent extends Component<{ onAdd: any }> {
	render() {
		return (
			<button onClick={this.props.onAdd}>
				Add Category
			</button>
		);
	}
}

export default MyComponent;
