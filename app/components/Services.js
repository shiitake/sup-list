var React = require('react');
var data = require('../../data/services.json');

var Services = React.createClass({
	render: function() {
		return (
			<div><pre>{JSON.stringify(data, null,2)}</pre></div>
		)
	}
});

module.exports = Services;
