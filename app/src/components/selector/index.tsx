import React, { useContext, useEffect, useState } from 'react';
import { ActionsReducer } from '../../utils/Actions';
import { context } from '../../utils/context';
import './style.scss';

interface SelectorProps {
	inStage?: number;
}

export const Selector: React.SFC<SelectorProps> = ({ inStage }) => {
	const [ searchType, setSearchType ] = useState('repositories');
	const { dispatch } = useContext(context);

	useEffect(
		() => {
			dispatch({ type: ActionsReducer.SET_TYPE, data: { type: searchType } });
		},
		[ searchType ]
	);

	return (
		<div className="selector-container">
			<select className="selector" value={searchType} onChange={({ target: { value } }) => setSearchType(value)}>
				<option value="users">Users</option>
				<option value="repositories">Repositories</option>
			</select>
		</div>
	);
};
