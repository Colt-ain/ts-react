import React, {Component} from 'react';
import { connect } from 'react-redux';
import InitialStateInterface from '../interfaces/InitialState.interface';
import { goBack } from '../actions/common';

const actions = {
	goBack: (): void => undefined,
};

interface BackBtnInterface {
	goBack: typeof actions.goBack;
}

class BackBtn extends Component<BackBtnInterface> {
	render() {
		return (
			<button onClick={this.props.goBack} className='back-btn'>&larr;</button>
		);
	}
}

const mapStateToProps = (state: InitialStateInterface ) => {
	return state;
};

export default connect(mapStateToProps, { goBack })(BackBtn);
