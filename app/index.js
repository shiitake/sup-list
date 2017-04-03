var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

var App = React.createClass({
	render: function() {
		return(
			<div>Sup List App</div>
		)
	}
});

ReactDOM.render(
	routes,
	document.getElementById('app')	
);
