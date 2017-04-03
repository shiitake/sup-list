var React = require('react');
var Servers = require('../components/Servers');
var serviceHelpers = require('../utils/serviceHelpers');

var ServersContainer = React.createClass({
	getInitialState: function() {
		return {
			servers: []
		}		
	},
	componentDidMount: function() {
		var servers = serviceHelpers.getServerNames();		
		this.setState({	servers: servers,});
	},
	render: function() {
		return(
			<Servers servers={this.state.servers} />
		)
	}
});

module.exports = ServersContainer;