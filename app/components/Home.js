var React = require('react');
var ServersContainer = require('../containers/ServersContainer');
var Results = require('./Results');
var data = require('../../data/services.json');

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<div className="jumbotron col-sm-12 text-center">
					<h1>Sup List</h1>
					<p className='lead'>Use the drop down list to find UseNet providers. Pretty cool, right?</p>							
				</div>
				<ServersContainer />
				<Results />
			</div>
		)
	}
});

module.exports = Home;