import React from 'react';
import './Button.css';

const Button = ({ title, onClick, className }) => {
	return (
		<button className={className} onClick={onClick}>
			{title}
		</button>
	);
};

export default Button;
