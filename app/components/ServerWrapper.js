var React = require('react');
var PropTypes = React.PropTypes;

function ServerWrapper (props) {	
	return (
		<li value={props.name}>{props.name}</li>
	)
}

ServerWrapper.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	service: PropTypes.string.isRequired,
}

module.exports = ServerWrapper;