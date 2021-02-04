import React, { useContext, useEffect, useState } from 'react';
import { ActionsReducer } from '../../utils/Actions';
import { context } from '../../utils/context';
import './style.scss';
interface SearchBarProps {
	searchTerm?: string;
}

export const SearchBar: React.SFC<SearchBarProps> = ({ searchTerm }) => {
	const [search, setSearch] = useState<string>('');
	const { dispatch } = useContext(context);

	useEffect(
		() => {
			dispatch({ type: ActionsReducer.SET_SEARCH, data: { value: search } });
		},
		[search, dispatch]
	);

	return (
		<div className="searchbar-container">
			<input
				type="text"
				className="input"
				placeholder="Search Repository"
				value={search}
				onChange={({ target: { value } }) => setSearch(value)}
			/>
		</div>
	);
};
