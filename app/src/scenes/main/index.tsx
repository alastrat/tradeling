import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import { Grid, Header, SearchBar, Selector } from '../../components';
import withProvider from '../../components/withProvider';
import { context } from '../../utils/context';
import { searchRepositories } from '../../services/api';

const Main = () => {
	const [searchItems, setSearchItems] = useState<Array<any>>([]);
	const { globalState } = useContext(context);
	const { value: _searchValue, type } = globalState.search;

	useEffect(
		() => {
			const fetchData = setTimeout(async () => {
				try {
					clearTimeout(fetchData);
					const regex = /^([a-z0-9]){3,}/i;
					if (regex.test(_searchValue)) {
						const { data: { items } } = await searchRepositories({ value: _searchValue, type });
						if (!!items) {
							setSearchItems(items);
						}
					} else {
						setSearchItems([]);
					}
				} catch (error) {
					setSearchItems([]);
					throw error;
				}
			}, 500);
			return () => {
				fetchData && clearTimeout(fetchData);
			};
		},
		[_searchValue, type]
	);

	return (
		<div className="main-container">
			<div className={`header-container-${searchItems.length > 0 ? 'active' : 'inactive'}`}>
				<Header />
				<div className="search-container">
					<SearchBar />
					<Selector />
				</div>
			</div>
			{searchItems.length > 0 &&
				<div>
					<span className='results-span'>{searchItems.length} results</span>
					<div className="content-container">
						<Grid items={searchItems} />
					</div>
				</div>
			}
			<footer className="footer-container">
				Source code available on <br />
				<a style={{ paddingLeft: '5px', color: 'blueviolet' }} href="https://github.com/alastrat/tradeling" target="_blank">
					Github
				</a>.
			</footer>
		</div>
	);
};

export default withProvider(Main);
