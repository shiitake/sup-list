var React = require('react');
var PropTypes = React.PropTypes;

function ServerWrapper (props) {
	return (
		<li key={props.name} value={props.name}><a href="#">{props.name}</a></li>
	)
}

ServerWrapper.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	service: PropTypes.string.isRequired,
}

module.exports = ServerWrapper;