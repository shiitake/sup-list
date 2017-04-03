var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Services = require('../components/Services');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component = {Main} >
			<IndexRoute  component = {Home} />
		</Route>
		<Route path='services' component = {Services} />
	</Router>
);

module.exports = routes;