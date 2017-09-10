import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
	if (!props.if) {
		if (props.else) {
			return props.else;
		}
		else {
			return null;
		}
	}
	
	const Tag = props.tag;
	const className = props.className;
	const childrenCount = React.Children.count(props.children);
	
	if (childrenCount < 2) {
		return props.children;
	}

	return <Tag {...props.other} className={className}>{ props.children }</Tag>;
}

Display.defaultProps = {
	tag: 'div',
	className: null
};

Display.propTypes = {
	tag: PropTypes.string,
	className: PropTypes.string,
	if: PropTypes.bool,
	else: PropTypes.func
};

export default Display;