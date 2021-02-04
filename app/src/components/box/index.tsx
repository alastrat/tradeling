import React, { useCallback, useEffect, useState } from 'react';
import githubLogo from '../../assets/img/github-logo.png';
import './style.scss';

interface BoxProps {
	githubResponse: any;
}

export const Box: React.SFC<BoxProps> = ({ githubResponse }) => {
	const [ color, setColor ] = useState('');

	useEffect(() => {
		setColor(randomColor());
	}, []);

	const handleGoRepository = useCallback(
		() => {
			window.open(githubResponse.html_url);
		},
		[ githubResponse ]
	);

	return (
		<div className="box-container" onClick={handleGoRepository}>
			<div className="box-img" style={{ backgroundColor: color }}>
				<img src={githubLogo} alt="octo-logo" />
			</div>
			<div className="box-info">
				<div className="box-info-r1">
					<span id="title">{githubResponse.name}</span>
					<span id="stats">{githubResponse.forks_count} ⭐ </span>
				</div>
				<div className="box-info-r2">
					<span>{githubResponse.owner.login}</span>
					<span id="stats">{githubResponse.language || ''}</span>
				</div>
				<div className="box-info-r3">
					<p>{githubResponse.description}</p>
				</div>
			</div>
		</div>
	);
};

const randomColor = () => {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
