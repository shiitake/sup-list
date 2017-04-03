var React = require('react');
var PropTypes = React.PropTypes;
var ServerWrapper = require('./ServerWrapper');

function puke(obj){
	return<pre>{JSON.stringify(obj,2,' ')}</pre>
}

function Servers(props){	
	return (
		<div className='dropdown'>
				<button className='btn btn-default dropdown-toggle' 
					type='button'
					data-toggle='dropdown'> Choose Current Provider
					<span className="caret"></span>
				</button>
			<ul className='dropdown-menu'>
				{props.servers.map(function(listvalue){
				return <ServerWrapper key={listvalue.Name} name={listvalue.Name} />;
				})}					
			</ul>
		</div>
	)	
}

Servers.proptypes = {
	servers: PropTypes.array.isRequired,
}


module.exports = Servers;