import React, {Component} from 'react';
import { connect } from "react-redux";
import InitialStateInterface from "../interfaces/InitialState.interface";

interface CurrentPathInterface {
	currentPath: string | undefined;
}

class CurrentPath extends Component<{path: string | undefined}> {
	render() {
		const { path } = this.props;

		return (
			<div className='current-path'>
				...{path ? path : ''}
			</div>
		);
	}
}

const mapStateToProps = (state: InitialStateInterface): CurrentPathInterface => {
	return {
		currentPath: state.common.currentPath,
	};
};

export default connect(mapStateToProps)(CurrentPath);
