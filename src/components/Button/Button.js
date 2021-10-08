import React from 'react';
import './Button.css';

const Button = ({ title, onClick, className }) => {
	return <Button className={className} onClick= {onClick}>{title}</Button>;
};

export default Button;
