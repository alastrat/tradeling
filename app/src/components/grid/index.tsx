import React from 'react';
import { Box } from '../box';
import cactusIcon from '../../assets/img/cactus-icon.png';
import './style.scss';

interface GridProps {
	items: Array<any>;
}

export const Grid: React.SFC<GridProps> = ({ items }) => {
	return (
		<div className="grid-container">
			{!!items && items.length > 0 ?
				items.map((el, i) => <Box key={`grid-element-${i}`} githubResponse={el} />)
				:
				<div className="grid-container-empty">
					<img src={cactusIcon} alt="cactus-icon" />
					<span >No results 😕</span>
				</div>
			}
		</div>
	);
};