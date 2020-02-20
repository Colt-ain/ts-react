import React, {Component} from 'react';

class CurrentPath extends Component<{path: string}> {
	render() {
		return (
			<div className='current-path'>
				...{this.props.path}
			</div>
		);
	}
}

export default CurrentPath;
