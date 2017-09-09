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
	
	const {
		tag,
		className
	} = props;
	
	const childrenCount = React.Children.count(props.children);
	
	if (childrenCount < 2) {
		return props.children;
	}
	
  return <tag {...props.other} className={className}>{ props.children }</tag>;
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