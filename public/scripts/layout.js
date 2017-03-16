
function getserviceList(provider, callback){		
	$.getJSON( "services")
	.done(function( data) {
		if (data != null){
		return callback(provider, data);
		}		
	});
};

function handleServices(provider, data){	
	var services = data;
	//we need to get a list of retailers but exclude others that are using the same provider
	var backBones = [];
	for (service in services) {
		var tempBack;
		var providerList = services[service].Providers;
		var backBoneList = services[service].Backbones;
		for (var i = 0; i < providerList.length; i++)
		{
			if (providerList[i].Name == provider)
			{
				for (backbone in backBoneList){
					backBones.push(backBoneList[backbone]);
				}				
			}
		}		
	  }
	  console.log(backBones);
	//find providers who don't share this backbone
	for (backbone in backBones)
	{

	}
};

function excludeService(exclude, data){
	//this will generate a list of providers, retailers from all services except the excluded one
	var services = data;
	var providerList = [];
	for (service in services) {
		if (services[service].Name != exclude)
		{
			var providers = services[service].Providers;
			for (provider in providers)
			{
				var option = 
				{
					Name: _.upperFirst(providers[provider].Name),
					Url: providers[provider].Url,
					Service: serviceName
				}
				providerList.push(option);
			}
			var resellers = services[service].Resellers;
			for (reseller in resellers)
			{
				var option = {
					Name: _.upperFirst(resellers[reseller].Name),
					Url: resellers[reseller].Url,
					Service: serviceName
				}
				providerList.push(option);
			}
		}
	}
	populateDropdrown("#backupprovider", providerList);
};




function generateblocklist(provider){  
      getserviceList(provider, handleServices);      
    };

function selectprimary(event){      
      var x = event;      
      var selected = document.getElementById('primary');      
      var service = x.parentNode.attributes['service'].value;
      var url = x.parentNode.attributes['url'].value;
      var provider = x.parentNode.attributes['value'].value;
      var html = '<h3>Service Provider</h3><p>' + service + '</p>';
      html += '<h3>Reseller Name</h3><p>' + provider + '</p>';
      html += '<h3>Url</h3><p><a href="' + url + '">' + url + '</a></p>';
      selected.innerHTML = html;
      generateblocklist(provider);
    };

function sortProviders(){
	getserviceList("#serviceoption", populateProviders);
};

function populateProviders(id, data){
	var services = data;
	var options = [];
	for (service in services){
		var providers = services[service].Providers;
		var serviceName = services[service].Name;
		for (provider in providers){
			var option = {
				Name: _.upperFirst(providers[provider].Name),
				Url: providers[provider].Url,
				Service: serviceName
			}
			options.push(option);
		}
		var resellers = services[service].Resellers;
		for (reseller in resellers){
			var option = {
				Name: _.upperFirst(resellers[reseller].Name),
				Url: resellers[reseller].Url,
				Service: serviceName
			}
			options.push(option);			
		}
	}
	buildDropdown(id, options);
	/*var sortedOptions = sortOptions(options, 'Name');
	var dropDown = $(id);
	for (option in sortedOptions)
	{
		var opt = sortedOptions[option];
		dropDown.append('<li url=' + opt.Url + ' value="' + opt.Name + '" service="' + opt.Service +'"><a href="#" onclick="return selectprimary(this)">' + opt.Name + '</a></li>');
		
	}*/
};

function sortOptions(options, sortby){
	return _.orderBy(options, [sortby], ['asc']);	
};

function buildDropdown(id, options){
	var sortedOptions = sortOptions(options, 'Name');
	var dropDown = $(id);
	for (option in sortedOptions)
	{
		var opt = sortedOptions[option];
		dropDown.append('<li url=' + opt.Url + ' value="' + opt.Name + '" service="' + opt.Service +'"><a href="#" onclick="return selectprimary(this)">' + opt.Name + '</a></li>');		
	}

}

function buildTable(id, options){
	//get table headings
	var headingsList = Object.keys(option[0]);
	var headings = "<tr>";
	for (heading in headingsList){
		headings += '<th>' + headingsList[heading] +'</th>';
	}
	headings += '</tr>';
	//build rows
	var rows = "";
	for (option in options){
		var opt = options[option];
		var row = '<tr>';
		for (var i = 0; i < headingsList.length; i++){
			var heading = headingsList[i];
			row += '<td>' + opt.heading + '</td>';
		}
	}
}

$(window).load(function(){	
	sortProviders();
});

