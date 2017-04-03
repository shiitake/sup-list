var data = require('../../data/services.json');

function getServerData(){
	return data;
};

var helpers = {
	getServerNames: function(){
		var services = getServerData();
		var options = [];
		for (service in services) {
			var providers = services[service].Providers;
			var serviceName = services[service].Name;
			for (provider in providers) {
				var option = {
					Name: providers[provider].Name,
					Url: providers[provider].Url,
					Service: serviceName
				}
				options.push(option);
			}
			var resellers = services[service].Resellers;
			for (reseller in resellers) {
				var option = {
					Name: resellers[reseller].Name,
					Url: resellers[reseller].Url,
					Service: serviceName
				}
				options.push(option);
			}
		}
		return options;
	}
}

module.exports = helpers;