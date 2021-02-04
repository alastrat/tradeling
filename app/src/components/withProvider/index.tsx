import React, { useReducer } from 'react';
import { context } from '../../utils/context';
import reducer, { defaultValue } from '../../utils/reducer';

const withProvider = (WrappedComponent: any) => (props: any = {}) => {
	const [ globalState, dispatch ] = useReducer(reducer, defaultValue);

	return (
		<context.Provider value={{ globalState, dispatch }}>
			<WrappedComponent {...props} />
		</context.Provider>
	);
};

export default withProvider;
