
	var padb = {
	
		resource: { eventNetwork : {} , eventMap : {}, egoNetwork : {}, locationNetwork : {} },
		
		export: {},
		
		home: {},
		
		list: {},
		
		entireNetwork: {},
		
		add: {},	
			
		countries : ["http://dbpediadia.org/resource/Afghanistan","http://dbpedia.org/resource/%C3%85land_Islands>","<http://dbpedia.org/resource/Albania","http://dbpedia.org/resource/Algeria","http://dbpedia.org/resource/American_Samoa","http://dbpedia.org/resource/Andorra","http://dbpedia.org/resource/Angola","http://dbpedia.org/resource/Anguilla","http://dbpedia.org/resource/Antarctica","http://dbpedia.org/resource/Antigua_and_Barbuda","http://dbpedia.org/resource/Argentina","http://dbpedia.org/resource/Armenia","http://dbpedia.org/resource/Aruba","http://dbpedia.org/resource/Australia","http://dbpedia.org/resource/Austria","http://dbpedia.org/resource/Azerbaijan","http://dbpedia.org/resource/Bahamas","http://dbpedia.org/resource/Bahrain","http://dbpedia.org/resource/Bangladesh","http://dbpedia.org/resource/Barbados","http://dbpedia.org/resource/Belarus","http://dbpedia.org/resource/Belgium","http://dbpedia.org/resource/Belize","http://dbpedia.org/resource/Benin","http://dbpedia.org/resource/Bermuda","http://dbpedia.org/resource/Bhutan","http://dbpedia.org/resource/Bolivia,_Plurinational_State_of","http://dbpedia.org/resource/Bonaire,_Sint_Eustatius_and_Saba","http://dbpedia.org/resource/Bosnia_and_Herzegovina","http://dbpedia.org/resource/Botswana","http://dbpedia.org/resource/Bouvet_Island","http://dbpedia.org/resource/Brazil","http://dbpedia.org/resource/British_Indian_Ocean_Territory","http://dbpedia.org/resource/Brunei_Darussalam","http://dbpedia.org/resource/Bulgaria","http://dbpedia.org/resource/Burkina_Faso","http://dbpedia.org/resource/Burundi","http://dbpedia.org/resource/Cambodia","http://dbpedia.org/resource/Cameroon","http://dbpedia.org/resource/Canada","http://dbpedia.org/resource/Cape_Verde","http://dbpedia.org/resource/Cayman_Islands","http://dbpedia.org/resource/Central_African_Republic","http://dbpedia.org/resource/Chad","http://dbpedia.org/resource/Chile","http://dbpedia.org/resource/China","http://dbpedia.org/resource/Christmas_Island","http://dbpedia.org/resource/Cocos_(Keeling)_Islands","http://dbpedia.org/resource/Colombia","http://dbpedia.org/resource/Comoros","http://dbpedia.org/resource/Republic_of_the_Congo","http://dbpedia.org/resource/Congo,_the_Democratic_Republic_of_the","http://dbpedia.org/resource/Cook_Islands","http://dbpedia.org/resource/Costa_Rica","http://dbpedia.org/resource/C%C3%B4te_d%27Ivoire","http://dbpedia.org/resource/Croatia","http://dbpedia.org/resource/Cuba","http://dbpedia.org/resource/Cura%C3%A7ao","http://dbpedia.org/resource/Cyprus","http://dbpedia.org/resource/Czech_Republic","http://dbpedia.org/resource/Denmark","http://dbpedia.org/resource/Djibouti","http://dbpedia.org/resource/Dominica","http://dbpedia.org/resource/Dominican_Republic","http://dbpedia.org/resource/Ecuador","http://dbpedia.org/resource/Egypt","http://dbpedia.org/resource/El_Salvador","http://dbpedia.org/resource/Equatorial_Guinea","http://dbpedia.org/resource/Eritrea","http://dbpedia.org/resource/Estonia","http://dbpedia.org/resource/Ethiopia","http://dbpedia.org/resource/Falkland_Islands_(Malvinas)","http://dbpedia.org/resource/Faroe_Islands","http://dbpedia.org/resource/Fiji","http://dbpedia.org/resource/Finland","http://dbpedia.org/resource/France","http://dbpedia.org/resource/French_Guiana","http://dbpedia.org/resource/French_Polynesia","http://dbpedia.org/resource/French_Southern_Territories","http://dbpedia.org/resource/Gabon","http://dbpedia.org/resource/Gambia","http://dbpedia.org/resource/Georgia_(country)","http://dbpedia.org/resource/Germany","http://dbpedia.org/resource/Ghana","http://dbpedia.org/resource/Gibraltar","http://dbpedia.org/resource/Greece","http://dbpedia.org/resource/Greenland","http://dbpedia.org/resource/Grenada","http://dbpedia.org/resource/Guadeloupe","http://dbpedia.org/resource/Guam","http://dbpedia.org/resource/Guatemala","http://dbpedia.org/resource/Guernsey","http://dbpedia.org/resource/Guinea","http://dbpedia.org/resource/Guinea-Bissau","http://dbpedia.org/resource/Guyana","http://dbpedia.org/resource/Haiti","http://dbpedia.org/resource/Heard_Island_and_McDonald_Islands","http://dbpedia.org/resource/Vatican_City_State","http://dbpedia.org/resource/Honduras","http://dbpedia.org/resource/Hong_Kong","http://dbpedia.org/resource/Hungary","http://dbpedia.org/resource/Iceland","http://dbpedia.org/resource/India","http://dbpedia.org/resource/Indonesia","http://dbpedia.org/resource/Iran,_Islamic_Republic_of","http://dbpedia.org/resource/Iraq","http://dbpedia.org/resource/Ireland","http://dbpedia.org/resource/Isle_of_Man","http://dbpedia.org/resource/Israel","http://dbpedia.org/resource/Italy","http://dbpedia.org/resource/Jamaica","http://dbpedia.org/resource/Japan","http://dbpedia.org/resource/Jersey","http://dbpedia.org/resource/Jordan","http://dbpedia.org/resource/Kazakhstan","http://dbpedia.org/resource/Kenya","http://dbpedia.org/resource/Kiribati","http://dbpedia.org/resource/Korea,_Democratic_People%27s_Republic_of","http://dbpedia.org/resource/Korea,_Republic_of","http://dbpedia.org/resource/Kuwait","http://dbpedia.org/resource/Kyrgyzstan","http://dbpedia.org/resource/Lao_People%27s_Democratic_Republic","http://dbpedia.org/resource/Latvia","http://dbpedia.org/resource/Lebanon","http://dbpedia.org/resource/Lesotho","http://dbpedia.org/resource/Liberia","http://dbpedia.org/resource/Libya","http://dbpedia.org/resource/Liechtenstein","http://dbpedia.org/resource/Lithuania","http://dbpedia.org/resource/Luxembourg","http://dbpedia.org/resource/Macao","http://dbpedia.org/resource/Republic_of_Macedonia","http://dbpedia.org/resource/Madagascar","http://dbpedia.org/resource/Malawi","http://dbpedia.org/resource/Malaysia","http://dbpedia.org/resource/Maldives","http://dbpedia.org/resource/Mali","http://dbpedia.org/resource/Malta","http://dbpedia.org/resource/Marshall_Islands","http://dbpedia.org/resource/Martinique","http://dbpedia.org/resource/Mauritania","http://dbpedia.org/resource/Mauritius","http://dbpedia.org/resource/Mayotte","http://dbpedia.org/resource/Mexico","http://dbpedia.org/resource/Micronesia,_Federated_States_of","http://dbpedia.org/resource/Moldova,_Republic_of","http://dbpedia.org/resource/Monaco","http://dbpedia.org/resource/Mongolia","http://dbpedia.org/resource/Montenegro","http://dbpedia.org/resource/Montserrat","http://dbpedia.org/resource/Morocco","http://dbpedia.org/resource/Mozambique","http://dbpedia.org/resource/Myanmar","http://dbpedia.org/resource/Namibia","http://dbpedia.org/resource/Nauru","http://dbpedia.org/resource/Nepal","http://dbpedia.org/resource/Netherlands","http://dbpedia.org/resource/New_Caledonia","http://dbpedia.org/resource/New_Zealand","http://dbpedia.org/resource/Nicaragua","http://dbpedia.org/resource/Niger","http://dbpedia.org/resource/Nigeria","http://dbpedia.org/resource/Niue","http://dbpedia.org/resource/Norfolk_Island","http://dbpedia.org/resource/Northern_Mariana_Islands","http://dbpedia.org/resource/Norway","http://dbpedia.org/resource/Oman","http://dbpedia.org/resource/Pakistan","http://dbpedia.org/resource/Palau","http://dbpedia.org/resource/Palestinian_Territory,_Occupied","http://dbpedia.org/resource/Panama","http://dbpedia.org/resource/Papua_New_Guinea","http://dbpedia.org/resource/Paraguay","http://dbpedia.org/resource/Peru","http://dbpedia.org/resource/Philippines","http://dbpedia.org/resource/Pitcairn","http://dbpedia.org/resource/Poland","http://dbpedia.org/resource/Portugal","http://dbpedia.org/resource/Puerto_Rico","http://dbpedia.org/resource/Qatar","http://dbpedia.org/resource/R%C3%A9union","http://dbpedia.org/resource/Romania","http://dbpedia.org/resource/Russian_Federation","http://dbpedia.org/resource/Rwanda","http://dbpedia.org/resource/Saint_Barth%C3%A9lemy","http://dbpedia.org/resource/Saint_Helena,_Ascension_and_Tristan_da_Cunha","http://dbpedia.org/resource/Saint_Kitts_and_Nevis","http://dbpedia.org/resource/Saint_Lucia","http://dbpedia.org/resource/Saint_Martin_(French_part)","http://dbpedia.org/resource/Saint_Pierre_and_Miquelon","http://dbpedia.org/resource/Saint_Vincent_and_the_Grenadines","http://dbpedia.org/resource/Samoa","http://dbpedia.org/resource/San_Marino","http://dbpedia.org/resource/Sao_Tome_and_Principe","http://dbpedia.org/resource/Saudi_Arabia","http://dbpedia.org/resource/Senegal","http://dbpedia.org/resource/Serbia","http://dbpedia.org/resource/Seychelles","http://dbpedia.org/resource/Sierra_Leone","http://dbpedia.org/resource/Singapore","http://dbpedia.org/resource/Sint_Maarten_(Dutch_part)","http://dbpedia.org/resource/Slovakia","http://dbpedia.org/resource/Slovenia","http://dbpedia.org/resource/Solomon_Islands","http://dbpedia.org/resource/Somalia","http://dbpedia.org/resource/South_Africa","http://dbpedia.org/resource/South_Georgia_and_the_South_Sandwich_Islands","http://dbpedia.org/resource/South_Sudan","http://dbpedia.org/resource/Spain","http://dbpedia.org/resource/Sri_Lanka","http://dbpedia.org/resource/Sudan","http://dbpedia.org/resource/Suriname","http://dbpedia.org/resource/Svalbard_and_Jan_Mayen","http://dbpedia.org/resource/Swaziland","http://dbpedia.org/resource/Sweden","http://dbpedia.org/resource/Switzerland","http://dbpedia.org/resource/Syrian_Arab_Republic","http://dbpedia.org/resource/Taiwan","http://dbpedia.org/resource/Tajikistan","http://dbpedia.org/resource/Tanzania,_United_Republic_of","http://dbpedia.org/resource/Thailand","http://dbpedia.org/resource/Timor-Leste","http://dbpedia.org/resource/Togo","http://dbpedia.org/resource/Tokelau","http://dbpedia.org/resource/Tonga","http://dbpedia.org/resource/Trinidad_and_Tobago","http://dbpedia.org/resource/Tunisia","http://dbpedia.org/resource/Turkey","http://dbpedia.org/resource/Turkmenistan","http://dbpedia.org/resource/Turks_and_Caicos_Islands","http://dbpedia.org/resource/Tuvalu","http://dbpedia.org/resource/Uganda","http://dbpedia.org/resource/Ukraine","http://dbpedia.org/resource/United_Arab_Emirates","http://dbpedia.org/resource/United_Kingdom","http://dbpedia.org/resource/United_States","http://dbpedia.org/resource/United_States_Minor_Outlying_Islands","http://dbpedia.org/resource/Uruguay","http://dbpedia.org/resource/Uzbekistan","http://dbpedia.org/resource/Vanuatu","http://dbpedia.org/resource/Venezuela,_Bolivarian_Republic_of","http://dbpedia.org/resource/Viet_Nam","http://dbpedia.org/resource/Virgin_Islands,_British","http://dbpedia.org/resource/Virgin_Islands,_U.S.","http://dbpedia.org/resource/Wallis_and_Futuna","http://dbpedia.org/resource/Western_Sahara","http://dbpedia.org/resource/Yemen","http://dbpedia.org/resource/Zambia","http://dbpedia.org/resource/Zimbabwe"]
					
		
	};



	padb.resource.initialize = function(){
		
 		if(!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect){
			alert('Sorry, this page has visualizations uses the SVG standard, most modern browsers support SVG. If you would like to see this visualization please view this page in another browser such as Google Chrome, Firefox, Safari, or Internet Explorer 9+');	
		}
		
		
		
		//the resource page will have diffrent elements for diffrent types of resources
		if (dataResourceType == 'participant'){
		
			// did we download a same file ? it will be an array if so
			if (dataSameAs instanceof Array ){
				padb.resource.buildSameAs();
			}else{
				$("#resourceSameAs").html('-No External Data Sources Found');
			}
			
			
			//is this a DBpedia record?
			if (dataDbpedia.hasOwnProperty('error')){
				$("#resourceLDAbstract").html('-No Bio Found');
			}else{
			
				//add the abstract into the DOM
				for (x in dataDbpedia[dataAuth]['http://www.w3.org/2000/01/rdf-schema#comment']){
					if (dataDbpedia[dataAuth]['http://www.w3.org/2000/01/rdf-schema#comment'][x].lang == 'en'){
						$("#resourceLDAbstract").html(dataDbpedia[dataAuth]['http://www.w3.org/2000/01/rdf-schema#comment'][x].value);
						//add the source link to wikipedia
						$("#resourceLDAbstract").append(
							$("<a>")
								
								.attr("href",dataDbpedia[dataAuth]['http://www.w3.org/ns/prov#wasDerivedFrom'][0].value.substr(0, dataDbpedia[dataAuth]['http://www.w3.org/ns/prov#wasDerivedFrom'][0].value.search(/\?/)))
								.text(" More..")
								.attr("target","_blank")
						);
						
					}
					
				}
				
 				
			}
			
			
			
			
			
			
			
			//load the event data for the event able
			$.get(window.location.href.replace('.html','') + '/event/data.json',function(data){
				//store the data
				padb.resource.orgJson = data;
				padb.resource.buildEventTable();
			})
			.error(function() { alert('Internal Server Error'); });
 			
		
			var baseUri = window.location.href.split('/')[window.location.href.split('/').length-1];
		
			//load the ego network
			$.get('/json/egoNetwork/' + baseUri.replace('.html','') +'.json',function(data){
				//store the data
				padb.resource.egoNetwork.data =  data;
				
				//we need to enable high alpha rendering because of the controls, but we don't want to lag out on the inital rendering so hide it for a few secs
				padb.resource.egoNetwork.hideRender = true;
				setTimeout(function(){ padb.resource.egoNetwork.hideRender = false; },2000);
				padb.resource.egoNetwork.set();
				
				
			})
			.error(function() { alert('Internal Server Error'); });			
			//bind dom
			
	
			//events search filter
			$("#resourceEventsSearch").popover({ placement : 'top', trigger : 'hover', content : 'You can use either and/or for example "new york and 1965" or "1960 or 1961"'})
			
			
			//render events network button
			$("#resourceRenderEventNetwork").click(function(){padb.resource.renderEventsNetwork()});
			
			//render events network button
			$("#resourceRenderEventMap").click(function(){padb.resource.renderEventsMap()});
			
			
			// $("#resourceDownloadEventGephi").click(function(){padb.resource.downloadEventGephi()});
			$("#resourceDownloadEventGephi").remove()





			
			
			
			
		}else if (dataResourceType == 'event'){
		
			var baseUri = window.location.href.split('/')[window.location.href.split('/').length-1];
		
			$.get('/json/eventDetails/' + baseUri.replace('.html','.json'),function(data){
				
				padb.resource.resourceEventPagePopulate(data);
				
				
			})
			.error(function() { alert('Internal Server Error'); });	
			
			
			
			
			
			
						
		}else if (dataResourceType == 'location'){
		
			var baseUri = window.location.href.split('/')[window.location.href.split('/').length-1];
		
		
			$.get('/json/locationDetails/' + baseUri.replace('.html','.json'),function(data){
				
				
				var cityCountry = data.city.replace(/_/gi,' ').replace('http://dbpedia.org/resource/','') + ", " + data.country.replace(/_/gi,' ').replace('http://dbpedia.org/resource/','');

 
				if (data.address != '' && data.address != null){
					var address = ", " + "<a target=\"_blank\" href=\"https://maps.google.com/maps?q=" + cityCountry.replace(/\s/ig,'+') + "+" + data.address.replace(/\s/ig,'+') + "\">" +  data.address + "</a>";
				}else{
					var address = "";
				}
				
				
				
				
				
				$("#resourceEventPageLocation").html(	
					 cityCountry + address
				);	
				
				if (data.authority!=''){
					
						 
						
						$("#resourceLocationAuthority").text('Linked Data: ').append(
							$("<a>")
								.addClass('label label-info')
								.attr('href', 'http://' + data.authority.replace(/<|>/gi,''))
								.text(data.authority.replace("http://",'').split('/')[0].replace(/_/gi,' ').replace('<',''))
						);
						
				}
				
				padb.resource.locationNetwork.data = data;
				
				padb.resource.locationNetwork.set();				
				
			})
			.error(function() { alert('Internal Server Error'); });				
		}
			
		
		
		
	}
	
	
	
	
	
	padb.resource.resourceEventPagePopulate = function(data){
		
		
		$("#resourceEventPageDate").text(data.date.replace(/00/g,'??'));
		
		$("#resourceEventPageComments").text(data.comments);
		
		$("#resourceEventPageLocation").html(	
			'<a href="/resource/' + data.locationUri + '.html">' + data.locationTitle  + '</a>, ' + data.city.replace(/_/gi,' ').replace('http://dbpedia.org/resource/','') + ", " + data.country.replace(/_/gi,' ').replace('http://dbpedia.org/resource/','')
		);
		
		for (x in data.participants){
		
			$("#resourceEventPageParticipants").append(
				$("<tr>").append(
					$("<td>")
						.html('<a href="/resource/' + data.participants[x].url + '.html">' + data.participants[x].name + '</a>')
					)
				)
					
			
		}
		
		
		
	}
	
	
	
	
	
	
	padb.resource.downloadEventGephi = function(){

		var useIds = [];
		
		//build array of ids to ask for based on whats filtered
		
		for (x in padb.resource.filteredEvents){
			useIds.push(padb.resource.filteredEvents[x].eventUri.replace('http://padb.net/resource/',''));	
		}		
		
		$.post('/json/event/gephi',{ids : useIds, name : dataName}, function(data) {
			
 			
			window.location = '/gephi/' + data.filename;
 
		});		
		
		
	}
	
	//
	//
	//		START LOCATION network
	//
	//
	
	
	//rebinds the controls sets values, dispays modal, makes data call
	padb.resource.locationNetwork.set = function(){
		
		//reset the network constants
		padb.resource.locationNetwork.charge = $("#resourceLocationNetworkCharge").data('def');
		padb.resource.locationNetwork.gravity =  $("#resourceLocationNetworkGravity").data('def');
		padb.resource.locationNetwork.distance =  $("#resourceLocationNetworkDistance").data('def');
		padb.resource.locationNetwork.strength =  $("#resourceLocationNetworkStrength").data('def');
	
		$("#resourceLocationNetworkCharge").val(padb.resource.locationNetwork.charge);
		$("#resourceLocationNetworkGravity").val(padb.resource.locationNetwork.gravity);
		$("#resourceLocationNetworkDistance").val(padb.resource.locationNetwork.distance);
		$("#resourceLocationNetworkStrength").val(padb.resource.locationNetwork.strength);
		
		$("#resourceLocationNetworkCharge, #resourceLocationNetworkGravity, #resourceLocationNetworkDistance, #resourceLocationNetworkStrength").unbind()
			.change(function(){
				
			padb.resource.locationNetwork.force.stop();
	
			padb.resource.locationNetwork.charge = $("#resourceLocationNetworkCharge").val();
			padb.resource.locationNetwork.gravity =  $("#resourceLocationNetworkGravity").val();
			padb.resource.locationNetwork.distance =  $("#resourceLocationNetworkDistance").val();
			padb.resource.locationNetwork.strength =  $("#resourceLocationNetworkStrength").val();				
			
			padb.resource.locationNetwork.force.charge(padb.resource.locationNetwork.charge);
			padb.resource.locationNetwork.force.gravity(padb.resource.locationNetwork.gravity)
			padb.resource.locationNetwork.force.nodes(padb.resource.locationNetwork.nodes)
			padb.resource.locationNetwork.force.distance(padb.resource.locationNetwork.distance)
			padb.resource.locationNetwork.force.linkStrength(padb.resource.locationNetwork.strength)			
			padb.resource.locationNetwork.force.start();
 			
			
			});
			
		$("#resourceLocationNetworkLabelsButton").unbind().click(function(){
			
			if ($(".eventNetworkLabel").first().css('visibility') == 'hidden'){
				$(".eventNetworkLabel").css('visibility','visible');
			}else{
				$(".eventNetworkLabel").css('visibility','hidden');
			}
			
			
		});
		
		padb.resource.locationNetwork.filterText = '';
		padb.resource.locationNetwork.timeout = null;
 		
		if (padb.resource.locationNetwork.data.nodes.length > 120){
			padb.resource.locationNetwork.liveRender = false;
			
			
		}else{
			
			$("#resourceLocationNetworkLiveButton").button('toggle');			
			padb.resource.locationNetwork.liveRender = true;
		}
		
		
		$("#resourceLocationNetworkLiveButton").unbind().click(function(){
			
			if ($("#resourceLocationNetworkLiveButton").hasClass('active')){
				
				padb.resource.locationNetwork.liveRender = false;
 
				
			}else{
				
				padb.resource.locationNetwork.liveRender = true;
			}
			
		});
		
		
		$("#resourceLocationNetworkSearch").unbind().keydown(function(event){
			
			clearTimeout(padb.resource.locationNetwork.timeout);
			
			if ($("#resourceLocationNetworkSearch").val() == ''){
				
				$("#resourceLocationClearFilter").css("visibility","hidden");
				padb.resource.locationNetwork.init(); 
			}else{
				$("#resourceLocationClearFilter").css("visibility","visible");	
			}
			
			
			padb.resource.locationNetwork.timeout = setTimeout(function(){ 
			
				padb.resource.locationNetwork.filterText = $("#resourceLocationNetworkSearch").val(); 
				padb.resource.locationNetwork.init(); 
				clearTimeout(padb.resource.locationNetwork.timeout);
				
			},1000);




			
		});
		

		$("#resourceLocationClearFilter").unbind().click(function(){
			
			padb.resource.locationNetwork.filterText = '';
			$("#resourceLocationNetworkSearch").val('');
			padb.resource.locationNetwork.init(); 
			$("#resourceLocationClearFilter").css("visibility","hidden");
			
		});


		$("#resourceDownloadLocationGephi").unbind().click(function(){
						
			var baseUri = window.location.href.split('/')[window.location.href.split('/').length-1];

			// if (padb.resource.locationNetwork.filterText==''){
			// 	window.location = '/gephi/location/' + baseUri + '/none';
			// }else{
			// 	window.location = '/gephi/location/' + baseUri +'/' + padb.resource.locationNetwork.filterText;
			// }
			window.location = '/resource/' + baseUri.replace('.html','') + '/location/' + baseUri.replace('.html','') + '.gexf';
		});
		
		for (i in padb.resource.locationNetwork.data.events){
	
			var aEvent = padb.resource.locationNetwork.data.events[i];
			
			//console.log(aEvent);
			
			$("#resourceLocationEventsRows").append(
			
				$("<tr>")
					
					.append(
						
						$("<td>")
							.text(aEvent['date'].replace(/00/g,'??'))
					)
					.append(
						
						$("<td>").append(
						
							$("<a>")
 							.text(aEvent['title'])
							.attr('href', aEvent['url']+'.html')
							
							
						)		
	
					)							
				
			
					
	
					.append(
						
						$("<td>").append(
						
							$("<i>")
								.addClass('icon-group')
							
						).append(
						
							$("<span>")
								.text(' ' + aEvent['participants'].length)
							
						)
						.attr("rel","popover")
						.attr("data-placement","left")
						.attr("data-trigger","hover")
						.attr("data-html","true")
						.attr("data-content", function(){
							
							var text = '';
						
							for (z in aEvent['participants']){
								
								//return the label, stored in the global obj by uri
								text = text + aEvent['participants'][z]  + '<br>' ;
								
							}
							
							return text;
						
						}
						)
						.popover()
						
						
						
						
					)											
				
			)		
		}
		
		padb.resource.locationNetwork.init();
	}
	
	
	//Sets up the network force object
	padb.resource.locationNetwork.init = function(){
		
		
		
		
		d3.select("#locationNetwork svg").remove();
		
		padb.resource.locationNetwork.tooltip = d3.select("body")
			.append("div")
			.attr('class','d3ToolTip');		
					
		padb.resource.locationNetwork.width = $("#locationNetwork").width() - 3;
		padb.resource.locationNetwork.height = $("#locationNetwork").height() - 3;
		padb.resource.locationNetwork.fill = d3.scale.category20();
		
		
		if (padb.resource.locationNetwork.filterText == ''){
			
			$("#resourceLocationClearFilter").css("visibility","hidden");
		
		}
		
		if (padb.resource.locationNetwork.filterText==''){
			
			padb.resource.locationNetwork.nodes = padb.resource.locationNetwork.data.nodes;
			padb.resource.locationNetwork.links = padb.resource.locationNetwork.data.edges;		
			
			for (x in padb.resource.locationNetwork.nodes){
				padb.resource.locationNetwork.nodes[x].display = true;	
			}
			 	
		}else{
		
			padb.resource.locationNetwork.nodes = [];
			
			padb.resource.locationNetwork.nodes = padb.resource.locationNetwork.data.nodes;
			padb.resource.locationNetwork.links = []; 
			
			var okayNodes = [];	
			
			for (x in padb.resource.locationNetwork.data.edges){
			
				var filter = padb.resource.locationNetwork.filterText;
				var searchStr = '';
				
				for (z in padb.resource.locationNetwork.data.edges[x].cities){
					searchStr = searchStr + padb.resource.locationNetwork.data.edges[x].cities[z] + ' ';
				}
				for (z in padb.resource.locationNetwork.data.edges[x].dates){
					searchStr = searchStr + padb.resource.locationNetwork.data.edges[x].dates[z] + ' ';
				}	
				for (z in padb.resource.locationNetwork.data.edges[x].countries){
					searchStr = searchStr + padb.resource.locationNetwork.data.edges[x].countries[z] + ' ';
				}	
				
				searchStr = searchStr + padb.resource.locationNetwork.data.edges[x].sourceName + ' ';			
				searchStr = searchStr + padb.resource.locationNetwork.data.edges[x].targetName + ' ';
				
				
				var add = false;
		
				//using or logic?
				if (filter.search(' or ') != -1){
					
					var searchTerms = filter.split(' or ');
					
					for (q in searchTerms){
						if (searchStr.search(searchTerms[q]) != -1){
							add = true;	
						}
					}
				
				//using and logic?
				}else if (filter.search(' and ') != -1){
					
					var searchTerms = filter.split(' and ');
					
					//if one part of the and query fails noGo = true meaning don't add it
					var noGo = false;
					
					for (q in searchTerms){
						if (searchStr.search(searchTerms[q]) != -1){
							add = true;	
						}else{
							noGo = true;	
						}
					}
					
					if (noGo){add = false;}
					
				}else{
						if (searchStr.search(filter) != -1){
							add = true;	
						}
					
				}
				
				if (add){
				
					padb.resource.locationNetwork.links.push(padb.resource.locationNetwork.data.edges[x]);
					
					okayNodes.push(padb.resource.locationNetwork.data.edges[x].target.index);
					okayNodes.push(padb.resource.locationNetwork.data.edges[x].source.index);
					
				}
				
				
			}
 			
			
 			
			for (x in padb.resource.locationNetwork.nodes){
			
				if (okayNodes.indexOf(padb.resource.locationNetwork.nodes[x].index) == -1){
					
					padb.resource.locationNetwork.nodes[x].display = false;
						
				}else{
					
					padb.resource.locationNetwork.nodes[x].display = true;
					
				}
				
				
			}
			
			
			
		}
		
		
				
				
		padb.resource.locationNetwork.rootNode = '';
		
		//quickly figure out the center node
		for (x in padb.resource.locationNetwork.data.nodes){
			if (padb.resource.locationNetwork.data.nodes[x].name == dataName){	 padb.resource.locationNetwork.rootNode = x;}
 		}
		
		
		padb.resource.locationNetwork.vis = d3.select("#locationNetwork").append("svg")
			.attr("width", padb.resource.locationNetwork.width)
			.attr("height", padb.resource.locationNetwork.height)
			.style("fill", "none")
			.call(d3.behavior.zoom() 

			  .on("zoom", function() { 

				padb.resource.locationNetwork.vis.attr("transform", "translate(" + d3.event.translate + 

				 ")scale(" + d3.event.scale*.8 + ")"); 
 
			  })); 		
			
		padb.resource.locationNetwork.vis.append("rect")
			.attr("width", padb.resource.locationNetwork.width)
			.attr("height", padb.resource.locationNetwork.height);
			

			  

		padb.resource.locationNetwork.vis = padb.resource.locationNetwork.vis.append("g"); 

		padb.resource.locationNetwork.vis.attr('transform','scale('+.8+')');
		
	
	var curve = d3.svg.line()
			  .interpolate("cardinal-closed")
			  .tension(.85);	

					
		padb.resource.locationNetwork.force = d3.layout.force()
 			.charge(padb.resource.locationNetwork.charge)
			.gravity(padb.resource.locationNetwork.gravity)
			.nodes(padb.resource.locationNetwork.nodes)
			.distance(padb.resource.locationNetwork.distance)
			.linkStrength(padb.resource.locationNetwork.strength)
			.theta(1.5)
			.links(padb.resource.locationNetwork.links)
			.size([padb.resource.locationNetwork.width, padb.resource.locationNetwork.height]);			
		
		
			
		
		
		padb.resource.locationNetwork.force.on("tick", function() {
		
		
		if(padb.resource.locationNetwork.force.alpha() > 0.05 && padb.resource.locationNetwork.liveRender === false){return false;}
		if (padb.resource.locationNetwork.hideRender){return false;}
			
		  padb.resource.locationNetwork.vis.selectAll(".egoLink")
		  .attr("d", function(d) {
			var dx = d.target.x - d.source.x,
				dy = d.target.y - d.source.y,
				dr = Math.sqrt(dx * dx + dy * dy);
			return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
			});
			
			
		  padb.resource.locationNetwork.vis.selectAll(".node")
			  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
		
		 if (padb.resource.locationNetwork.rootNode!=''){
				padb.resource.locationNetwork.nodes[padb.resource.locationNetwork.rootNode].x  = padb.resource.locationNetwork.width/2;
				padb.resource.locationNetwork.nodes[padb.resource.locationNetwork.rootNode].y  = padb.resource.locationNetwork.height/2;
		  }
		  
		  
		});		
		
		
		padb.resource.locationNetwork.restart();
			
	}
	
	
	
	//starts/restarts the force network layout 
	padb.resource.locationNetwork.restart = function(){
		
	  
	
	  padb.resource.locationNetwork.vis.selectAll(".egoLink")
		.data(padb.resource.locationNetwork.links)
		.enter().append('path')
		  .attr("class", "egoLink")
		  .attr("x1", function(d) { return d.source.x; })
		  .attr("y1", function(d) { return d.source.y; })
		  .attr("x2", function(d) { return d.target.x; })
		  .attr("y2", function(d) { return d.target.y; });
	
	  
      var node = padb.resource.locationNetwork.vis.selectAll(".node")
          .data(padb.resource.locationNetwork.nodes)
        .enter().append("g")
          .attr("class", "node")
		  .attr("display", function(d) { return (d.display) ? 'block' : 'none'})
          .call(padb.resource.locationNetwork.force.drag)
		  .on("mouseover", function(d){ padb.resource.locationNetwork.tooltip.style("visibility", "visible"); padb.resource.locationNetwork.tooltip.text(d.name); })
		  .on("mousemove", function(d){return padb.resource.locationNetwork.tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
		  .on("mouseout", function(d){return padb.resource.locationNetwork.tooltip.style("visibility", "hidden");})
		  .attr("x", function(d, i) { return padb.resource.locationNetwork.width / 2 + i; })
		  .attr("y", function(d, i) { return padb.resource.locationNetwork.width / 2 + i; });
		  
		node.append("circle")
			.call(padb.resource.locationNetwork.force.drag)
			.attr("class", function(d){ 
			 
				if (d.name == dataName){return "eventNetworkNodeRoot";}
				return "eventNetworkNode";
			
			}) 

			.attr("r", function(d) { 
				
				return 7;
				
			
			});  
			
	node.append("text")
      .attr("x", function(d) { return 0; })
	  .attr("y", function(d) { return 15; })
	  .attr("class", "eventNetworkLabel")
	  	
	  .attr("text-anchor", function(d) { return "middle";})
	
      .text(function(d) { return d.name; });					  


		padb.resource.locationNetwork.force.start();
			
	}	


	
	//
	//
	//		End LOCATION Network
	//
	//
	

	//
	//
	//		START Event map display
	//
	//	
	
	
	
	//toggles modal makes data call
	padb.resource.renderEventsMap = function(){
		
		
		$("#resourceEventMapModal").modal('toggle');
	
		
		var useIds = [];
		
		//build array of ids to ask for based on whats filtered
		
		for (x in padb.resource.filteredEvents){
			useIds.push(padb.resource.filteredEvents[x].eventUri.replace('http://padb.net/resource/',''));	
		}		
		
		var baseUri = window.location.href.split('/')[window.location.href.split('/').length-1];


		$.get('/json/event/map/'+baseUri.replace('.html','')+'_event_map.json',function(data) {
			
 			$("#resourceEventMapModal").on('shown',function(){padb.resource.eventMap.init(data)});

		});
		
	}
	
	
	padb.resource.eventMap.init = function(data){
	 
	 
		d3.select("#eventMap svg").remove();
		
	 	padb.resource.eventMap.tooltip = d3.select("body")
			.append("div")
			.attr('class','d3ToolTip')
			.style('text-transform', 'capitalize');	
	
		padb.resource.eventMap.width = $("#eventMap").width() - 3;
		padb.resource.eventMap.height = $("#eventMap").height() - 3;
	
		padb.resource.eventMap.projection = d3.geo.equirectangular()
			.scale(230)
			.translate([500,350]);
	
		padb.resource.eventMap.path = d3.geo.path()
			.projection(padb.resource.eventMap.projection);
	
		padb.resource.eventMap.graticule = d3.geo.graticule();
	
		padb.resource.eventMap.svg = d3.select("#eventMap").append("svg")
			.attr("width", padb.resource.eventMap.width)
			.attr("height", padb.resource.eventMap.height)
			.call(d3.behavior.zoom()
			.translate(padb.resource.eventMap.projection.translate())
			.scale(padb.resource.eventMap.projection.scale())
			.on("zoom", redraw));
		
		
		padb.resource.eventMap.circles = padb.resource.eventMap.svg.append("svg:g")
			.attr("id", "circles");		
		
	
		
		
		d3.json("/js/world-110m.json", function(error, world) {
		
		  padb.resource.eventMap.svg.insert("path", ".graticule")
			  .datum(topojson.object(world, world.objects.land))
			  .attr("class", "land")
			  .attr("d", padb.resource.eventMap.path);
		
		  padb.resource.eventMap.svg.insert("path", ".graticule")
			  .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a.id !== b.id; }))
			  .attr("class", "boundary")
			  .attr("d", padb.resource.eventMap.path);
			  
	  	padb.resource.eventMap.dataAry = [];
		
		
		padb.resource.eventMap.maxcCount = 0;
		
	  	for (x in data){
			
			padb.resource.eventMap.dataAry.push(data[x]);
			if (data[x].count > padb.resource.eventMap.maxcCount){padb.resource.eventMap.maxcCount = data[x].count}
			
		}
	  
	  
	  	mapSpots();
	  
	  
		});			  
	  

		function mapSpots(){
		
			d3.selectAll(".mapPoint").remove();
			
		
			padb.resource.eventMap.svg.selectAll("asdfds")
				.data(padb.resource.eventMap.dataAry)
				.enter().append("svg:circle")
				.attr("class", "mapPoint")
				.attr("cx", function(d, i) { return padb.resource.eventMap.projection([d.lng,d.lat])[0]; })
				.attr("cy", function(d, i) { return padb.resource.eventMap.projection([d.lng,d.lat])[1]; })
				.attr("r", function(d, i) { return d.count / padb.resource.eventMap.maxcCount * 15 +  (Math.sqrt(padb.resource.eventMap.projection.scale())/4); })
				.on("mouseover", function(d){ padb.resource.eventMap.tooltip.style("visibility", "visible"); padb.resource.eventMap.tooltip.text(d.city.replace(/_/gi,' ').toLowerCase().replace('http://dbpedia.org/resource/','') + ': ' + d.count + ' Events' ); })
				.on("mousemove", function(d){return padb.resource.eventMap.tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
				.on("mouseout", function(d){return padb.resource.eventMap.tooltip.style("visibility", "hidden");});				
				
			
		}
		
		
		function redraw() {
			
			if (d3.event) {
			  padb.resource.eventMap.projection
				  .translate(d3.event.translate)
				  .scale(d3.event.scale);
			}
			padb.resource.eventMap.svg.selectAll("path").attr("d", padb.resource.eventMap.path);
		 	mapSpots();
			
			//var t = padb.resource.eventMap.projection.translate();
			//xAxis.attr("x1", t[0]).attr("x2", t[0]);
			//yAxis.attr("y1", t[1]).attr("y2", t[1]);
	
		}
		
	}
	




	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	//
	//
	//		START EGO network
	//
	//
	
	
	//rebinds the controls sets values, dispays modal, makes data call
	padb.resource.egoNetwork.set = function(){
		
		//reset the network constants
		padb.resource.egoNetwork.charge = $("#resourceEgoNetworkCharge").data('def');
		padb.resource.egoNetwork.gravity =  $("#resourceEgoNetworkGravity").data('def');
		padb.resource.egoNetwork.distance =  $("#resourceEgoNetworkDistance").data('def');
		padb.resource.egoNetwork.strength =  $("#resourceEgoNetworkStrength").data('def');
	
		$("#resourceEgoNetworkCharge").val(padb.resource.egoNetwork.charge);
		$("#resourceEgoNetworkGravity").val(padb.resource.egoNetwork.gravity);
		$("#resourceEgoNetworkDistance").val(padb.resource.egoNetwork.distance);
		$("#resourceEgoNetworkStrength").val(padb.resource.egoNetwork.strength);
		
		$("#resourceEgoNetworkCharge, #resourceEgoNetworkGravity, #resourceEgoNetworkDistance, #resourceEgoNetworkStrength").unbind()
			.change(function(){
				
			padb.resource.egoNetwork.force.stop();
	
			padb.resource.egoNetwork.charge = $("#resourceEgoNetworkCharge").val();
			padb.resource.egoNetwork.gravity =  $("#resourceEgoNetworkGravity").val();
			padb.resource.egoNetwork.distance =  $("#resourceEgoNetworkDistance").val();
			padb.resource.egoNetwork.strength =  $("#resourceEgoNetworkStrength").val();				
			
			padb.resource.egoNetwork.force.charge(padb.resource.egoNetwork.charge);
			padb.resource.egoNetwork.force.gravity(padb.resource.egoNetwork.gravity)
			padb.resource.egoNetwork.force.nodes(padb.resource.egoNetwork.nodes)
			padb.resource.egoNetwork.force.distance(padb.resource.egoNetwork.distance)
			padb.resource.egoNetwork.force.linkStrength(padb.resource.egoNetwork.strength)			
			padb.resource.egoNetwork.force.start();
 			
			
			});
			
		$("#resourceEgoNetworkLabelsButton").unbind().click(function(){
			
			if ($(".eventNetworkLabel").first().css('visibility') == 'hidden'){
				$(".eventNetworkLabel").css('visibility','visible');
			}else{
				$(".eventNetworkLabel").css('visibility','hidden');
			}
			
			
		});
		padb.resource.egoNetwork.filterText = '';
		padb.resource.egoNetwork.timeout = null;
 		
		if (padb.resource.egoNetwork.data.nodes.length > 120){
			padb.resource.egoNetwork.liveRender = false;
			
			
		}else{
			
			$("#resourceEgoNetworkLiveButton").button('toggle');			
			padb.resource.egoNetwork.liveRender = true;
		}
		
		
		$("#resourceEgoNetworkLiveButton").unbind().click(function(){
			
			if ($("#resourceEgoNetworkLiveButton").hasClass('active')){
				
				padb.resource.egoNetwork.liveRender = false;
 
				
			}else{
				
				padb.resource.egoNetwork.liveRender = true;
			}
			
		});
		
		
		$("#resourceEgoNetworkSearch").unbind().keydown(function(event){
			
			clearTimeout(padb.resource.egoNetwork.timeout);
			
			if ($("#resourceEgoNetworkSearch").val() == ''){
				
				$("#resourceEgoClearFilter").css("visibility","hidden");
				padb.resource.egoNetwork.init(); 
			}else{
				$("#resourceEgoClearFilter").css("visibility","visible");	
			}
			
			
			padb.resource.egoNetwork.timeout = setTimeout(function(){ 
			
				padb.resource.egoNetwork.filterText = $("#resourceEgoNetworkSearch").val(); 
				padb.resource.egoNetwork.init(); 
				clearTimeout(padb.resource.egoNetwork.timeout);
				
			},1000);




			
		});
		

		$("#resourceEgoClearFilter").unbind().click(function(){
			
			padb.resource.egoNetwork.filterText = '';
			$("#resourceEgoNetworkSearch").val('');
			padb.resource.egoNetwork.init(); 
			$("#resourceEgoClearFilter").css("visibility","hidden");
			
		});


		$("#resourceDownloadEgoGephi").unbind().click(function(){
			
			var baseUri = window.location.href.split('/')[window.location.href.split('/').length-1].replace('.html','');

			// if (padb.resource.egoNetwork.filterText==''){
			// 	window.location = window.location.href + '/ego/json/none';
			// }else{
			// 	window.location = window.location.href + '/ego/json/' + padb.resource.egoNetwork.filterText;
			// }
			window.location = window.location.href.replace('.html','') + '/ego/'+baseUri+'.gexf';

		});

		padb.resource.egoNetwork.init();
	}
	
	
	//Sets up the network force object
	padb.resource.egoNetwork.init = function(){
		
		
		d3.select("#egoNetwork svg").remove();
		
		padb.resource.egoNetwork.tooltip = d3.select("body")
			.append("div")
			.attr('class','d3ToolTip');		
					
		padb.resource.egoNetwork.width = $("#egoNetwork").width() - 3;
		padb.resource.egoNetwork.height = $("#egoNetwork").height() - 3;
		padb.resource.egoNetwork.fill = d3.scale.category20();
		
		
		if (padb.resource.egoNetwork.filterText == ''){
			
			$("#resourceEgoClearFilter").css("visibility","hidden");
		
		}
		
		if (padb.resource.egoNetwork.filterText==''){
			
			padb.resource.egoNetwork.nodes = padb.resource.egoNetwork.data.nodes;
			padb.resource.egoNetwork.links = padb.resource.egoNetwork.data.edges;		
			
			for (x in padb.resource.egoNetwork.nodes){
				padb.resource.egoNetwork.nodes[x].display = true;	
			}
			 	
				
			
		}else{
		
			padb.resource.egoNetwork.nodes = [];
			
			
			padb.resource.egoNetwork.nodes = padb.resource.egoNetwork.data.nodes;
			padb.resource.egoNetwork.links = []; 
			
			var okayNodes = [];	
			
			for (x in padb.resource.egoNetwork.data.edges){
			
				var filter = padb.resource.egoNetwork.filterText;
				var searchStr = '';
				
				for (z in padb.resource.egoNetwork.data.edges[x].cities){
					searchStr = searchStr + padb.resource.egoNetwork.data.edges[x].cities[z] + ' ';
				}
				for (z in padb.resource.egoNetwork.data.edges[x].dates){
					searchStr = searchStr + padb.resource.egoNetwork.data.edges[x].dates[z] + ' ';
				}	
				for (z in padb.resource.egoNetwork.data.edges[x].countries){
					searchStr = searchStr + padb.resource.egoNetwork.data.edges[x].countries[z] + ' ';
				}	
				
				searchStr = searchStr + padb.resource.egoNetwork.data.edges[x].sourceName + ' ';			
				searchStr = searchStr + padb.resource.egoNetwork.data.edges[x].targetName + ' ';
				
				
				var add = false;
		
				//using or logic?
				if (filter.search(' or ') != -1){
					
					var searchTerms = filter.split(' or ');
					
					for (q in searchTerms){
						if (searchStr.search(searchTerms[q]) != -1){
							add = true;	
						}
					}
				
				//using and logic?
				}else if (filter.search(' and ') != -1){
					
					var searchTerms = filter.split(' and ');
					
					//if one part of the and query fails noGo = true meaning don't add it
					var noGo = false;
					
					for (q in searchTerms){
						if (searchStr.search(searchTerms[q]) != -1){
							add = true;	
						}else{
							noGo = true;	
						}
					}
					
					if (noGo){add = false;}
					
				}else{
						if (searchStr.search(filter) != -1){
							add = true;	
						}
					
				}
				
				if (add){
				
					padb.resource.egoNetwork.links.push(padb.resource.egoNetwork.data.edges[x]);
					
					okayNodes.push(padb.resource.egoNetwork.data.edges[x].target.index);
					okayNodes.push(padb.resource.egoNetwork.data.edges[x].source.index);
					
				}
				
				
			}
 			
			
 			
			for (x in padb.resource.egoNetwork.nodes){
			
				if (okayNodes.indexOf(padb.resource.egoNetwork.nodes[x].index) == -1){
					
					padb.resource.egoNetwork.nodes[x].display = false;
						
				}else{
					
					padb.resource.egoNetwork.nodes[x].display = true;
					
				}
				
				
			}
			
			
			
		}
		
		
				
				
		padb.resource.egoNetwork.rootNode = '';
		
		//quickly figure out the center node
		for (x in padb.resource.egoNetwork.data.nodes){
			if (padb.resource.egoNetwork.data.nodes[x].name == dataName){	 padb.resource.egoNetwork.rootNode = x;}
 		}
		
		
		padb.resource.egoNetwork.vis = d3.select("#egoNetwork").append("svg")
			.attr("width", padb.resource.egoNetwork.width)
			.attr("height", padb.resource.egoNetwork.height)
			.style("fill", "none")
			.call(d3.behavior.zoom() 

			  .on("zoom", function() { 

				padb.resource.egoNetwork.vis.attr("transform", "translate(" + d3.event.translate + 

				 ")scale(" + d3.event.scale*.8 + ")"); 
 
			  })); 		
			
		padb.resource.egoNetwork.vis.append("rect")
			.attr("width", padb.resource.egoNetwork.width)
			.attr("height", padb.resource.egoNetwork.height);
			

			  

		padb.resource.egoNetwork.vis = padb.resource.egoNetwork.vis.append("g"); 

		padb.resource.egoNetwork.vis.attr('transform','scale('+.8+')');
		
	
	var curve = d3.svg.line()
			  .interpolate("cardinal-closed")
			  .tension(.85);	

					
		padb.resource.egoNetwork.force = d3.layout.force()
 			.charge(padb.resource.egoNetwork.charge)
			.gravity(padb.resource.egoNetwork.gravity)
			.nodes(padb.resource.egoNetwork.nodes)
			.distance(padb.resource.egoNetwork.distance)
			.linkStrength(padb.resource.egoNetwork.strength)
			.theta(1.5)
			.links(padb.resource.egoNetwork.links)
			.size([padb.resource.egoNetwork.width, padb.resource.egoNetwork.height]);			
		
		
			
		
		
		padb.resource.egoNetwork.force.on("tick", function() {
		
		
		if(padb.resource.egoNetwork.force.alpha() > 0.05 && padb.resource.egoNetwork.liveRender === false){return false;}
		if (padb.resource.egoNetwork.hideRender){return false;}
			
		  padb.resource.egoNetwork.vis.selectAll(".egoLink")
		  .attr("d", function(d) {
			var dx = d.target.x - d.source.x,
				dy = d.target.y - d.source.y,
				dr = Math.sqrt(dx * dx + dy * dy);
			return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
			});
			
			
		  padb.resource.egoNetwork.vis.selectAll(".node")
			  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
		
		 if (padb.resource.egoNetwork.rootNode!=''){
				padb.resource.egoNetwork.nodes[padb.resource.egoNetwork.rootNode].x  = padb.resource.egoNetwork.width/2;
				padb.resource.egoNetwork.nodes[padb.resource.egoNetwork.rootNode].y  = padb.resource.egoNetwork.height/2;
		  }
		  
		  
		});		
		
		
		padb.resource.egoNetwork.restart();
			
	}
	
	
	
	//starts/restarts the force network layout 
	padb.resource.egoNetwork.restart = function(){
		
	  
	
	  padb.resource.egoNetwork.vis.selectAll(".egoLink")
		.data(padb.resource.egoNetwork.links)
		.enter().append('path')
		  .attr("class", "egoLink")
		  .attr("x1", function(d) { return d.source.x; })
		  .attr("y1", function(d) { return d.source.y; })
		  .attr("x2", function(d) { return d.target.x; })
		  .attr("y2", function(d) { return d.target.y; });
	
	  
      var node = padb.resource.egoNetwork.vis.selectAll(".node")
          .data(padb.resource.egoNetwork.nodes)
        .enter().append("g")
          .attr("class", "node")
		  .attr("display", function(d) { return (d.display) ? 'block' : 'none'})
          .call(padb.resource.egoNetwork.force.drag)
		  .on("mouseover", function(d){ padb.resource.egoNetwork.tooltip.style("visibility", "visible"); padb.resource.egoNetwork.tooltip.text(d.name); })
		  .on("mousemove", function(d){return padb.resource.egoNetwork.tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
		  .on("mouseout", function(d){return padb.resource.egoNetwork.tooltip.style("visibility", "hidden");})
		  .attr("x", function(d, i) { return padb.resource.egoNetwork.width / 2 + i; })
		  .attr("y", function(d, i) { return padb.resource.egoNetwork.width / 2 + i; });
		  
		node.append("circle")
			.call(padb.resource.egoNetwork.force.drag)
			.attr("class", function(d){ 
			 
				if (d.name == dataName){return "eventNetworkNodeRoot";}
				return "eventNetworkNode";
			
			}) 

			.attr("r", function(d) { 
				
				return 7;
				
			
			});  
			
	node.append("text")
      .attr("x", function(d) { return 0; })
	  .attr("y", function(d) { return 10; })
	  .attr("class", "eventNetworkLabel")
	  	
	  .attr("text-anchor", function(d) { return "middle";})
	
      .text(function(d) { return d.name; });					  


		padb.resource.egoNetwork.force.start();
			
	}	


	
	//
	//
	//		End EGO Network
	//
	//
	
		
	
	
	
	
	
	
	
	
	//
	//
	//		START Event force network
	//
	//
	
	
	//rebinds the controls sets values, dispays modal, makes data call
	padb.resource.renderEventsNetwork = function(){
		
		//reset the network constants
		padb.resource.eventNetwork.charge = $("#resourceEventNetworkCharge").data('def');
		padb.resource.eventNetwork.gravity =  $("#resourceEventNetworkGravity").data('def');
		padb.resource.eventNetwork.distance =  $("#resourceEventNetworkDistance").data('def');
		padb.resource.eventNetwork.strength =  $("#resourceEventNetworkStrength").data('def');
	
		$("#resourceEventNetworkCharge").val(padb.resource.eventNetwork.charge);
		$("#resourceEventNetworkGravity").val(padb.resource.eventNetwork.gravity);
		$("#resourceEventNetworkDistance").val(padb.resource.eventNetwork.distance);
		$("#resourceEventNetworkStrength").val(padb.resource.eventNetwork.strength);
		
		$("#resourceEventNetworkCharge, #resourceEventNetworkGravity, #resourceEventNetworkDistance, #resourceEventNetworkStrength").unbind()
			.change(function(){
				
			padb.resource.eventNetwork.force.stop();
	
			padb.resource.eventNetwork.charge = $("#resourceEventNetworkCharge").val();
			padb.resource.eventNetwork.gravity =  $("#resourceEventNetworkGravity").val();
			padb.resource.eventNetwork.distance =  $("#resourceEventNetworkDistance").val();
			padb.resource.eventNetwork.strength =  $("#resourceEventNetworkStrength").val();				
			
			padb.resource.eventNetwork.force.charge(padb.resource.eventNetwork.charge);
			padb.resource.eventNetwork.force.gravity(padb.resource.eventNetwork.gravity)
			padb.resource.eventNetwork.force.nodes(padb.resource.eventNetwork.nodes)
			padb.resource.eventNetwork.force.distance(padb.resource.eventNetwork.distance)
			padb.resource.eventNetwork.force.linkStrength(padb.resource.eventNetwork.strength)			
			padb.resource.eventNetwork.force.start();
 			
			
			});
			
		$("#resourceEventNetworkLabelsButton").unbind().click(function(){
			
			if ($(".eventNetworkLabel").first().css('visibility') == 'hidden'){
				$(".eventNetworkLabel").css('visibility','visible');
			}else{
				$(".eventNetworkLabel").css('visibility','hidden');
			}
			
			
		});
		
		 $("#resourceEventNetworkModal").modal('toggle');
		
		var useIds = [];
		
		//build array of ids to ask for based on whats filtered
		for (x in padb.resource.filteredEvents){
			useIds.push(padb.resource.filteredEvents[x].eventUri.replace('http://padb.net/resource/',''));	
		}
		var baseUri = window.location.href.split('/')[window.location.href.split('/').length-1];

		$.get('/json/event/network/'+baseUri.replace('.html','')+'_two_mode_event.json',function(data) {
		     $("#eventNetwork").empty();
			 $("#resourceEventNetworkModal").on('shown',function(){padb.resource.eventNetwork.init(data.nodes,data.edges)});
		})
		.error(function() { alert('Internal Server Error'); });
		 
		
		
	}
	
	
	//Sets up the network force object
	padb.resource.eventNetwork.init = function(nodes,links){
		
		
		d3.select("#eventNetwork svg").remove();
		
		padb.resource.eventNetwork.tooltip = d3.select("body")
			.append("div")
			.attr('class','d3ToolTip');		
					
		padb.resource.eventNetwork.width = $("#eventNetwork").width() - 3;
		padb.resource.eventNetwork.height = $("#eventNetwork").height() - 3;
		padb.resource.eventNetwork.fill = d3.scale.category20();
		padb.resource.eventNetwork.nodes = nodes;
		padb.resource.eventNetwork.links = links;			
				
		padb.resource.eventNetwork.rootNode = '';
		
		//quickly figure out the center node
		for (x in nodes){
			if (nodes[x].name == dataName){	 padb.resource.eventNetwork.rootNode = x;}
		}
		
		
		padb.resource.eventNetwork.vis = d3.select("#eventNetwork").append("svg")
			.attr("width", padb.resource.eventNetwork.width)
			.attr("height", padb.resource.eventNetwork.height)
			.style("fill", "none")
			.call(d3.behavior.zoom() 

			  .on("zoom", function() { 

				padb.resource.eventNetwork.vis.attr("transform", "translate(" + d3.event.translate + 

				 ")scale(" + d3.event.scale*.9 + ")"); 
 
			  })); 		
			
		padb.resource.eventNetwork.vis.append("rect")
			.attr("width", padb.resource.eventNetwork.width)
			.attr("height", padb.resource.eventNetwork.height);
			

			  

		padb.resource.eventNetwork.vis = padb.resource.eventNetwork.vis.append("g"); 

		padb.resource.eventNetwork.vis.attr('transform','scale('+.9+')');

					
		padb.resource.eventNetwork.force = d3.layout.force()
 			.charge(padb.resource.eventNetwork.charge)
			.gravity(padb.resource.eventNetwork.gravity)
			.nodes(padb.resource.eventNetwork.nodes)
			.distance(padb.resource.eventNetwork.distance)
			.linkStrength(padb.resource.eventNetwork.strength)
			.links(padb.resource.eventNetwork.links)
			//.linkStrength(function(d){return d.target.strength;})
			.size([padb.resource.eventNetwork.width, padb.resource.eventNetwork.height]);			
		
		
			
		
		
		padb.resource.eventNetwork.force.on("tick", function() {
		  padb.resource.eventNetwork.vis.selectAll("line.link")
			  .attr("x1", function(d) { return d.source.x; })
			  .attr("y1", function(d) { return d.source.y; })
			  .attr("x2", function(d) { return d.target.x; })
			  .attr("y2", function(d) { return d.target.y; });
		 
		  padb.resource.eventNetwork.vis.selectAll(".node")
			  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
		
		  if (padb.resource.eventNetwork.rootNode!=''){
				padb.resource.eventNetwork.nodes[padb.resource.eventNetwork.rootNode].x  = padb.resource.eventNetwork.width/2;
				padb.resource.eventNetwork.nodes[padb.resource.eventNetwork.rootNode].y  = padb.resource.eventNetwork.height/2;
		  }
		  
		  
		});		
		
		
		padb.resource.eventNetwork.restart();
			
	}
	
	
	
	//starts/restarts the force network layout 
	padb.resource.eventNetwork.restart = function(){
		
	  
	
	  padb.resource.eventNetwork.vis.selectAll("line.link")
		.data(padb.resource.eventNetwork.links)
		.enter().insert("line", "line.link")
		  .attr("class", "link")
		  .attr("x1", function(d) { return d.source.x; })
		  .attr("y1", function(d) { return d.source.y; })
		  .attr("x2", function(d) { return d.target.x; })
		  .attr("y2", function(d) { return d.target.y; });
	
	
      var node = padb.resource.eventNetwork.vis.selectAll(".node")
          .data(padb.resource.eventNetwork.nodes)
        .enter().append("g")
          .attr("class", "node")
          .call(padb.resource.eventNetwork.force.drag)
		  .on("mouseover", function(d){ padb.resource.eventNetwork.tooltip.style("visibility", "visible"); padb.resource.eventNetwork.tooltip.text(d.name); })
		  .on("mousemove", function(d){return padb.resource.eventNetwork.tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
		  .on("mouseout", function(d){return padb.resource.eventNetwork.tooltip.style("visibility", "hidden");});	
		  
		node.append("circle")
			.call(padb.resource.eventNetwork.force.drag)
			.attr("class", function(d){ 
				
				if (d.type == 'event'){return "eventNetworkNodeEvent";}
				
				if (d.name == dataName){return "eventNetworkNodeRoot";}
				
			
				return "eventNetworkNode";
			
			}) 
			.attr("x", function(d) { return d.x; })
			.attr("y", function(d) { return d.y; })
			.attr("r", function(d) { 
				
				
				if (d.type == 'event' || d.nane == dataName){return 10;}
				if (d.type == 'person'){return 5;}
				
			
			});  
			
	node.append("text")
      .attr("x", function(d) { return 0; })
	  .attr("y", function(d) { return 10; })
	  .attr("class", "eventNetworkLabel")
	  	
	  .attr("text-anchor", function(d) { return "middle";})
	
        .text(function(d) { return d.name; });					  
		  
	/*
	  padb.resource.eventNetwork.vis.selectAll("circle.node")
		  .data(padb.resource.eventNetwork.nodes)
		  .enter().insert("circle", "circle.node")
		  .attr("class", function(d){ 
		  
		  					if (d.type == 'event'){return "node eventNetworkNodeEvent";}

 		  					if (d.name == dataName){return "node eventNetworkNodeRoot";}
							
							
		  					return "eventNetworkNode node";
						
						}) 
		  .attr("cx", function(d) { return padb.resource.eventNetwork.width / 2; })
		  .attr("cy", function(d) { return padb.resource.eventNetwork.height / 2; })
		  .attr("r", function(d) { 
		  		
							
							if (d.type == 'event' || d.nane == dataName){return 10;}
							if (d.type == 'person'){return 5;}
		  	
		  					
		  				; })
		  .call(padb.resource.eventNetwork.force.drag)
		  .on("mouseover", function(d){ padb.resource.eventNetwork.tooltip.style("visibility", "visible"); padb.resource.eventNetwork.tooltip.text(d.name); })
		  .on("mousemove", function(d){return padb.resource.eventNetwork.tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
		  .on("mouseout", function(d){return padb.resource.eventNetwork.tooltip.style("visibility", "hidden");})
		  .append("title").text(function(d) { return d.name; });
	*/
	
		
		padb.resource.eventNetwork.force.start();
			
	}	


	
	//
	//
	//		End Event Force Network
	//
	//
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	padb.resource.buildEventTable = function(){
	
		//first find the rang of years //not really used anymore
		var yearRange = [];
		
		padb.resource.allEvents = [];
		padb.resource.allParticipants = {};
		padb.resource.filteredEvents = [];
		
		for (x in padb.resource.orgJson){
			
			//console.log(padb.resource.orgJson[x]);
		
		
			for (aObj in padb.resource.orgJson[x]){
			
				//does this obj have the event typ?
				if (padb.resource.orgJson[x][aObj]['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'] == "http://purl.org/NET/c4dm/event.owl#Event"){
					
					var eventObj = padb.resource.orgJson[x][aObj];
					
					if (eventObj['http://purl.org/NET/c4dm/event.owl#agent'].length==0){
						continue;
					}
					
					
					var year = eventObj['http://www.w3.org/2001/XMLSchema#date'].substr(0,4);
					
					if (yearRange.indexOf(year) == -1){
						yearRange.push(year);	
					}
					
 					 		
					//build a search string for later
					eventObj.searchStr = 
						
						eventObj['http://simile.mit.edu/2005/05/ontologies/location#city'].replace(/_/gi,' ').toLowerCase().replace('http://dbpedia.org/resource/','') + ' ' +
						eventObj['http://simile.mit.edu/2005/05/ontologies/location#country'].replace(/_/gi,' ').toLowerCase().replace('http://dbpedia.org/resource/','') + ' ' +
						aObj.replace(/_/gi,' ').toLowerCase().replace('http://padb.net/resource/','').toLowerCase() + ' ' +
						eventObj['http://purl.org/NET/c4dm/event.owl#place'].toLowerCase().replace(/_/gi,' ').toLowerCase().replace('http://padb.net/resource/','')  + ' ' +
						eventObj['http://www.w3.org/2001/XMLSchema#date'].toLowerCase();
						
					//the particpants names to the search string	
					for (y in eventObj['http://purl.org/NET/c4dm/event.owl#agent']){
						
						eventObj.searchStr = eventObj.searchStr  + ' ' + eventObj['http://purl.org/NET/c4dm/event.owl#agent'][y].replace(/_/gi,' ').toLowerCase().replace('http://padb.net/resource/','').toLowerCase()
							
					}
					
					eventObj.eventUri = aObj;
					
					
					
					padb.resource.allEvents.push(eventObj);
					
				}
				
				
				//participants
				if (padb.resource.orgJson[x][aObj]['http://www.w3.org/1999/02/22-rdf-syntax-ns#type'] == "http://xmlns.com/foaf/0.1/Person"){
					
					var personObj = padb.resource.orgJson[x][aObj];
					
					
					//if (padb.resource.allParticipants.hasOwnProperty)
					padb.resource.allParticipants[aObj] = personObj['http://www.w3.org/2000/01/rdf-schema#label'];
					 
 					
				}			
				
					
				
				
				
				
			}
			
		}
		
		//sort by date asc
		yearRange.sort(function(a, b) { return a > b });
		
		padb.resource.allEvents.sort(function(a, b) { 
			
			 if (a['http://www.w3.org/2001/XMLSchema#date'] < b['http://www.w3.org/2001/XMLSchema#date'])
				 return -1;
			 if (a['http://www.w3.org/2001/XMLSchema#date'] > b['http://www.w3.org/2001/XMLSchema#date'])
				return 1;
				
			 return 0;	
		
			
		});
		
		
		$("#resourceEventCount").text(" (" + padb.resource.allEvents.length + ")");



		yearRange.unshift('All');

		//build the years
		/*
		for (y in yearRange){
			
			$("#resourceEventsYearListHolder").append(
				$("<a>")
					.text(yearRange[y])
					.addClass('resourceEventsYearListYear')
					.addClass(function(){ return $(this).text() == 'All' ? 'resourceEventsYearListYearInset' : ''})
					.attr("href","#")
					.click(function(event){
						
						$(".resourceEventsYearListYear").removeClass('resourceEventsYearListYearInset');
						
						
						
						
						$(this).addClass('resourceEventsYearListYearInset');
						
						
						padb.resource.buildEventTableRows('^' + $(this).text());
						
						event.preventDefault();
						return false;
					})

			);
		}
		*/
		
		
		//build inital display
		padb.resource.buildEventTableRows('');
		
		
		
		//bind the search box
		
		$("#resourceEventsSearch").keyup(function(){
		
			$(this).val($(this).val().toLowerCase());
			padb.resource.buildEventTableRows($(this).val());	
				
			
		})
		
		
		//bind the clear filter button
		$("#resourceEventsClearFilter").click(function(){
		
			$("#resourceEventsSearch").val('');
			padb.resource.buildEventTableRows('');
			$(".resourceEventsYearListYear").removeClass('resourceEventsYearListYearInset');
			$(".resourceEventsYearListYear").first().addClass('resourceEventsYearListYearInset');
			$(this).css("visibility","hidden");
		
		});
		
		
		//console.log(yearRange,padb.resource.allEvents, padb.resource.allParticipants);
		
		
		
		
	}
	
	//Build the events table and populate the data
	padb.resource.buildEventTableRows = function(filter){
		
		//stores the active displayed events
		padb.resource.filteredEvents = [];
		
		$("#resourceEventsEventsRows").empty();
		
		
		
		for (x in padb.resource.allEvents){
			
			aEvent = padb.resource.allEvents[x];
			
			var add=false;
			
			//Filter logic ------------------
			
			//Empy query, 
			if (filter.trim() == ''){
				add = true;	
				$("#resourceEventsSearch").val('');
				
			//Text Filter 
			}else if (filter.trim() != ''){
				
				//clear filter button
				$("#resourceEventsClearFilter").css("visibility","visible");	
				
				//using or logic?
				if (filter.search(' or ') != -1){
					
					var searchTerms = filter.split(' or ');
					
					for (q in searchTerms){
						if (aEvent.searchStr.search(searchTerms[q]) != -1){
							add = true;	
						}
					}
				
				//using and logic?
				}else if (filter.search(' and ') != -1){
					
					var searchTerms = filter.split(' and ');
					
					//if one part of the and query fails noGo = true meaning don't add it
					var noGo = false;
					
					for (q in searchTerms){
						if (aEvent.searchStr.search(searchTerms[q]) != -1){
							add = true;	
						}else{
							noGo = true;	
						}
					}
					
					if (noGo){add = false;}
					
 				}else{
						if (aEvent.searchStr.search(filter) != -1){
							add = true;	
						}
					
				}
				
				
				
				
				//oh too fancy!
				if (filter.search(' or ') != -1 && filter.search(' and ') != -1){
  					filter = '';
					alert('Too fancy for me! Please only only one kind of search operator.');	
				}
				
			}
				
			//^^^^^^^^^Filter Logic
			
			
			//----------Buld the event table DOM
			
			if (add){
				
				padb.resource.filteredEvents.push(aEvent);
			
				$("#resourceEventsEventsRows").append(
				
					$("<tr>")
						
						.append(
							
							$("<td>")
								.text(aEvent['http://www.w3.org/2001/XMLSchema#date'].replace(/00/g,'??'))
						)
						.append(
							
							$("<td>").append(
							
								$("<a>")
							
								.attr("href",aEvent.eventUri+'.html')
								.text(aEvent['http://www.w3.org/2000/01/rdf-schema#label'])
								.attr("rel","popover")
								.attr("data-placement","top")
								.attr("data-trigger","hover")
								.attr("data-html","true")
								.attr("data-content", function(){ 
									return 	aEvent['http://www.w3.org/2000/01/rdf-schema#comment']; 
								 })
								.popover()	
								
							)		
	
						)							
						.append(
							
							$("<td>").append(
							
								$("<a>")
									
									.text(function(){
								
										var locTitle=aEvent['http://purl.org/NET/c4dm/event.owl#place'].replace('http://padb.net/resource/','').replace(/_/gi,' ').trim();
									
    									return locTitle.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
										
									})
									.attr("href",aEvent['http://purl.org/NET/c4dm/event.owl#place']+'.html')
									.attr("rel","popover")
									.attr("data-placement","top")
									.attr("data-trigger","hover")
									.attr("data-html","true")
									.attr("data-content", function(){ 
										return 	aEvent['http://simile.mit.edu/2005/05/ontologies/location#city'].replace('http://dbpedia.org/resource/','').replace(/_/gi,' ').trim() + ', ' + 	aEvent['http://simile.mit.edu/2005/05/ontologies/location#country'].replace('http://dbpedia.org/resource/','').replace(/_/gi,' ').trim(); 
 										})
									.popover()	
									
							)
									
						)	
				
						
	
						.append(
							
							$("<td>").append(
							
								$("<i>")
							 		.addClass('icon-group')
								
							).append(
							
								$("<span>")
							 		.text(' ' + aEvent['http://purl.org/NET/c4dm/event.owl#agent'].length)
								
							)
							.attr("rel","popover")
							.attr("data-placement","left")
							.attr("data-trigger","hover")
							.attr("data-html","true")
							.attr("data-content", function(){
								
								var text = '';
							
								for (z in aEvent['http://purl.org/NET/c4dm/event.owl#agent']){
									
									//return the label, stored in the global obj by uri
									text = text + padb.resource.allParticipants[aEvent['http://purl.org/NET/c4dm/event.owl#agent'][z]]  + '<br>' ;
									
								}
								
								return text;
							
							}
							)
							.popover()
							
							
							
							
						)											
					
				)
				
				
			}
			
			
			
			//^^^^^^^ Build the event table DOM
			
			
			
		}
		
		
		
	}
	
	
	padb.resource.buildSameAs = function(){
		
		
		if (dataSameAs[0]['numDuplicates'] == '1'){
			$("#resourceSameAs").html('-No External Data Sources Found');
			return true;
		}
				
		var domains = {};
		
		for (x in dataSameAs[0]['duplicates']){
			
			var url = dataSameAs[0]['duplicates'][x];
			
			urlAry = url.split('/');
			
			var base = urlAry[2];
			base = base.replace('www.','').replace('www1.','').replace('www2.','').replace('www3.','').replace('www4.','').replace('data.','').replace('rdf.','');
			
			if (domains.hasOwnProperty(base) == false){
				domains[base] = url;
			}
			
			
		}
		
		for (x in domains){
		
			$("#resourceSameAs").append(
			
				$("<a>")
					.attr('href',domains[x])
					.text(x)
					.attr('target','_blank')
					.addClass('label')
					.addClass( function(){ return x.search('wikipedia') == -1 ? '' : 'label-success'; })
					.addClass( function(){ return x.search('freebase') == -1 ? '' : 'label-warning'; })
					.addClass( function(){ return x.search('viaf') == -1 ? '' : 'label-info'; })
				
					.mouseover(function(){
						$(this).addClass('label-inverse');
						
					})
					.mouseout(function(){
						$(this).removeClass('label-inverse');
						
					})

			).append(
			
				$("<span>")
					.text(' ')
			);
 		}
		
	}
	
	
	
	
	
	
	
	
	
	
	/////////////////////////////////////ADD DATA/////////////////////////////////////////
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	//
	//	The add object /add/ URL
	//
	padb.add.initialize = function(){
			
			//vars
			
			
			padb.add.disambigType = 'person';	//what type of entity are we disambiguating 
			padb.add.disambigSearchTimer = null;
			padb.add.disambigSearchTimeout = 1500;
			padb.add.locationTitles = []; 	//holds the returned auto compelte location titles
			padb.add.participants = [];
			
			$(document).keypress(function(e) {
			  if(e.ctrlKey)
			  	if (e.keyCode == 13){
					padb.add.submit();
				}
			});
			
			//Binds
			$(".addPersonName").focus(function(){ padb.add.addNameFields($(this));});
			$("#addPersonName1, #addPersonAuthority1, #addEventLocationAuthoirty, #addEventLocationCity")
			.keypress(function(e) { 
			
				
				if (e.keyCode == 192 || e.keyCode == 96 ){
				
					if ($(this).attr("id") == 'addPersonName1' || $(this).attr("id") == 'addPersonAuthority1'){
				
						padb.add.disambigType = 'person';
					
					}else if ($(this).attr("id") == 'addEventLocationAuthoirty'){
						
						padb.add.disambigType = 'location';
												
					}else if ($(this).attr("id") == 'addEventLocationCity'){
						
						padb.add.disambigType = 'city';
						
					}
					
					
					padb.add.disambigInput = 1;
					padb.add.disambigShow();
					
				}
			});
			$("#disambigP1, #addEventLocationAuthoirtyButton, #addEventLocationCityButton")	
				.click(function(){
					 
					
					if ($(this).attr("id") == 'disambigP1'){
				
						padb.add.disambigType = 'person';
					
					}else if ($(this).attr("id") == 'addEventLocationAuthoirtyButton'){
						
						padb.add.disambigType = 'location';
												
					}else if ($(this).attr("id") == 'addEventLocationCityButton'){
						
						padb.add.disambigType = 'city';
						
					}
					
					
					padb.add.disambigInput = 1;
					padb.add.disambigShow();
				
			});
			
			//focus to the text box on modal show
			$('#disambigModal').on('shown', function () {
				$("#disambigSearch").focus();
			});
			
			
			//in the disambiguate modal box, init the search when they stop typing
			$('#disambigSearch').keyup(function(){
				if (padb.add.disambigSearchTimer == null){
					padb.add.disambigSearchTimer = setTimeout(padb.add.disambigSearch, padb.add.disambigSearchTimeout);
				}
			});			
			
			$('#disambigSearch').keydown(function(){
  			  clearTimeout(padb.add.disambigSearchTimer);
			  padb.add.disambigSearchTimer = null;
			  
			});
			
			
			//Submit the event
			$("#addSubmitEvent").click(function(event){
				
				padb.add.submit();
				
			});
			
			
			//the country textbox type ahead
			$('#addEventLocationCountry').typeahead({source : padb.countries});
			
			//the city type ahead
			$('#addEventLocationCity').typeahead({
				
				source: function (query,process) {
					
					//console.log(typeahead);
					//process(["okayaaaaa","aaaaaaaaaa","bbbbbbbbbb"]);
					//return typeahead.process({options: ["okay","aaaa","bbbb"]});
					$.get('http://disambiguate.padb.net/padb/', { location: query }, function (data) {
						process(data);
					});
				},
				minLength : 5,
				items : 20
			});	
			
			
			//the location title type ahead
			$('#addEventLocationTitle').typeahead({
				source: function (query,processLocationTitle) {
					$.get('/json/locationTitle/query', { query: query }, function (data) {
						padb.add.locationTitles = data;
						processLocationTitle(data);
					});
				},
				minLength : 2,
				items : 20
			});			
			
			//the 1st participant's name type ahead
			$('#addPersonName1').typeahead({
				source: function (query,processParticipants) {
					$.get('/json/participants/query', { query: query }, function (data) {
						padb.add.participants = data;
						processParticipants(data);
					});
				},
				minLength : 2,
				items : 20
			});				
			
			
			
			//When the location title is entered check for previous stored data
			$('#addEventLocationTitle').change(function(event){
				if (padb.add.locationTitles.indexOf($(this).val()) != -1){
					var jqxhr = $.get("/json/locationData/query", { query: $(this).val()}, function(data) {
 						$("#addEventLocationStreet").val(data[0].address);
						$("#addEventLocationCity").val(data[0].city);
						$("#addEventLocationCountry").val(data[0].country);
						$("#addEventLocationAuthoirty").val(data[0].authority);
						$("#addPersonName1").focus();
					});
					
				}
			});
			
			//The first participants entry name field
			$('#addPersonName1').change(function(event){
				if (padb.add.participants.indexOf($(this).val()) != -1){
					var jqxhr = $.get("/json/participantData/query", { query: $(this).val()}, function(data) {
 						$("#addPersonAuthority1").val(data[0].authority);
						$("#addPersonName2").focus();
					});
				}
			});			
					
					
			//the mint URI button
			$("#disambigResultsMintButton").click(function(){
				
				
				var text = prompt('Enter artist name',$("#disambigSearch").val());
				
				var uri = "http://padb.net/resource/" + text.replace(/\s/g,'_');
				
				$("#disambigModal").modal('toggle'); 
				 
				$("#addPersonName"+padb.add.disambigInput).val(text);
				$("#addPersonAuthority"+padb.add.disambigInput).val(uri);				
				
				event.preventDefault();
				return false;				
				
			});
						
						 
						
			
	}
	
	
	
	padb.add.disambigSearch = function(){
		
		//add loding text
		$("#disambigResults").empty();
		$("#disambigResults").append($("<option>").text("Searching..."));		
		
		
		
		$.getJSON('https://www.googleapis.com/freebase/v1/search?query=' + $('#disambigSearch').val() + '&indent=true' + padb.add.disambigFilter + "&callback=?", null, function(data) {
			
			var name = 'Could not retrive name';
			
			$("#disambigResults").popover('destroy');
			
			
			if (data.status != '200 OK'){
				alert('Error talking to freebase :(');	
				return
			}
			 
			
			$("#disambigResults").empty();
			
			for(i in data.result) {
				
				var notable = '';
				 
				if (data.result[i].hasOwnProperty('notable')){
					notable =  " (" + data.result[i].notable.name + ")";
				}
				
				$("#disambigResults")
					.append(
						$("<option>")
							.text(data.result[i].name + notable)
							.val(data.result[i].mid)
							
				);
			
			}
			
			
			$("#disambigResults").unbind();
			
			$("#disambigResults").change(function(event){
				
				$("#disambigResults").popover('destroy');
				$("#disambigResults").popover({'placement': 'right', 'trigger': 'manual', 'content': 'Loading Abstract'});
				$('#disambigResults').popover('show');
				
				
				$("#disambigResultsURIs").empty(); 
				 
				$.getJSON('https://www.googleapis.com/freebase/v1/text' + $('#disambigResults').val() + "?encode=false&callback=?", null, function(data) {

					if (data.hasOwnProperty('result')){
						
						$("#disambigResults").popover('destroy');
						$("#disambigResults").popover({'placement': 'right', 'trigger': 'manual', 'content': data.result});
						$('#disambigResults').popover('show');								
								
					}else{
						
						$("#disambigResults").popover('destroy');
						$("#disambigResults").popover({'placement': 'right', 'trigger': 'manual', 'content': data.error.message});
						$('#disambigResults').popover('show');								
							
						
					}
					
				});
				 
				$("#disambigResultsURIs").empty(); 
				 
				$.getJSON('https://www.googleapis.com/freebase/v1/topic' + $('#disambigResults').val() + "?encode=false&callback=?", null, function(data) {
					
 					
					//grab the name of the person first off
					if (data.property.hasOwnProperty('/type/object/name')){
						
						name = data.property['/type/object/name'].values[0].text;
					
					}
					
 					
					
					if (data.property.hasOwnProperty('/type/object/key')){
					
 						
						var nonENOptions = [];
 					
						for (i in data.property['/type/object/key'].values){
							
								
							//we want to grab the wikipedia links
							var splitKey = data.property['/type/object/key'].values[i].value.split('/');
							
							
							//it might have unicode, but not \u0000 format, freebase passes it as $0000
							//I tried a number of ways to get them coverted but this is the only way I found it working  (in chrome)
							
							if (typeof splitKey[3] != 'undefined'){
								if (splitKey[3].indexOf('$') != -1){
									
									//pull out the unicodes
									var unicodes = splitKey[3].match(/\$[0-9|A|B|C|D|E|F]{4}/gi) 	
			
									for (x in unicodes){
									
										var aCode = unicodes[x].substring(1);
										
										//convert to unicode string
										aCode = String.fromCharCode(parseInt(aCode,16));
										
										//replace it in the uri
										splitKey[3] = splitKey[3].replace(unicodes[x],aCode);
										
									
										
									}
									
								}
							}
							
							
							// so /wikipedia/en/something
							if (splitKey[1] == 'wikipedia' && splitKey[2].length== 2){
 								
								var optionItem = 
									
									$("<option>")
										.text('dbPedia   ' + splitKey[2] + '    ' + splitKey[3])
										.val(function(){
											
											//build the dbpedia url right here
											var url = 'http://';
											
											if (splitKey[2]!='en'){
												url = url + splitKey[2] + '.';
											}
											
											url = url + 'dbpedia.org/resource/' + splitKey[3];
											
											return url;
										})
										.dblclick(function(){ window.open($(this).val()); });

								
								//add the engligh in first, then the others
								
									
								if (splitKey[2]=='en'){
									$("#disambigResultsURIs").append(optionItem);
								}else{
									nonENOptions.push(optionItem);
								}
								
								
							}
							
							//add in the freebase
							if (splitKey[1] == 'en'){
								
								var optionItem = 
									
									$("<option>")
										.text('freebase   ' + splitKey[2])
										.val(function(){
											
											//build the dbpedia url right here
											var url = 'http://';
											
											url = url + 'freebase.com/en/' + splitKey[2];
											
											return url;
										})
										.dblclick(function(){ window.open($(this).val()); });
							
								nonENOptions.push(optionItem);
							}
							
						}
						
						//add in the non enligh dbpedia
						for (i in nonENOptions){
							$("#disambigResultsURIs").append(nonENOptions[i]);	
						}
						
						//add the non wikipedia possiblities
						
						if (typeof data.property['/common/topic/topic_equivalent_webpage'] != 'undefined'){
							for (i in data.property['/common/topic/topic_equivalent_webpage'].values){
	
								
								if (data.property['/common/topic/topic_equivalent_webpage'].values[i].value.indexOf('wikipedia')==-1){
								
									
									$("#disambigResultsURIs").append(
							
										$("<option>")
											.text(data.property['/common/topic/topic_equivalent_webpage'].values[i].value)
											.val(data.property['/common/topic/topic_equivalent_webpage'].values[i].value)
											.dblclick(function(){ window.open($(this).val()); })	
																
									);
									
									
								}
	
							}
						}
						
						
					}
					
					
				});
				
 				
			});			
			
			
			
			//when they acutally submit it
			$("#disambigForm").unbind();
			$("#disambigForm").submit(function(event){
				
				
				if ($('#disambigResultsURIs').val() == null){
				
					event.preventDefault();
					return false;	
					
				}
				
				$("#disambigModal").modal('toggle');
				
				if (padb.add.disambigType=='person'){
					//add the full name
					$("#addPersonName"+padb.add.disambigInput).val(name);
					$("#addPersonAuthority"+padb.add.disambigInput).val($('#disambigResultsURIs').val()[0]);				
					$("#addPersonName"+ parseInt(padb.add.disambigInput+1) ).focus();
				
				
				}else if (padb.add.disambigType=='location'){
				
					
					$("#addEventLocationAuthoirty").val($('#disambigResultsURIs').val()[0]);

				
				}else if (padb.add.disambigType=='city'){

					$("#addEventLocationCity").val($('#disambigResultsURIs').val()[0]);

				}
				
				
				
				
				
				
				

				
   				
				event.preventDefault();
				return false;
				
				
			});	
			
			
			
   		});
		
		/*
			
		var jqxhr = $.get("http://disambiguate.padb.net/padb/", { name: $('#disambigSearch').val() }, function(data) {
			
			
			
			
			$("#disambigResults").empty();
			
			//no results
			if (data.length==1){$("#disambigResults").append($("<option>").text("No Results Found")); return}
			
			
			//loop add results
			for (aResult in data){
			
			
				//its rerutning tripels, show the first part
				var item = data[aResult].split(' <');
				
				$("#disambigResults")
					.append(
						$("<option>")
							.text(item[0])
							
				);
				 
				
			}
			
			
			//I don't like binds all over the place, keep everything related to this control in the same function, unbind and define the 
			//the change behavior
			$("#disambigResults").unbind();
			
			$("#disambigResults").change(function(event){
				
				$("#disambigResults").popover('destroy');
				$("#disambigResults").popover({'placement': 'right', 'trigger': 'manual', 'content': 'Loading Abstract'});
				$('#disambigResults').popover('show');
				
				 
				 
				var jqxhrAbstract = $.get("http://disambiguate.padb.net/padb/", { abstract: $('#disambigResults').val()[0] }, function(data) {
					$("#disambigResults").popover('destroy');
					$("#disambigResults").popover({'placement': 'right', 'trigger': 'manual', 'content': data});
					$('#disambigResults').popover('show');					
				});
				
				
				
 				
			});
			
			
			
			$("#disambigResults").focus();
			$("#disambigResults").val($("#disambigResults option:first").val()); 
			$("#disambigResults").change();
			
			
			
			
			
			//when they acutally submit it
			$("#disambigForm").unbind();
			$("#disambigForm").submit(function(event){
				
				//ask for the full name from the disambig service
				var jqxhrFullName = $.get("http://disambiguate.padb.net/padb/", { fullname: $('#disambigResults').val()[0]}, function(data) {
					$("#addPersonName"+padb.add.disambigInput).val(data.split('"')[1]);
					$("#addPersonAuthority"+padb.add.disambigInput).val($('#disambigResults').val()[0]);
				});
				
				
				$("#disambigModal").modal('toggle');

				$("#addPersonName"+ parseInt(padb.add.disambigInput+1) ).focus();

				console.log($("#addPersonName"+ parseInt(padb.add.disambigInput+1) ));
 				
				event.preventDefault();
				return false;
				
				
			});			
			
			
			
		})
		.error(function() {   });
		
		
		*/
		
		
		clearTimeout(padb.add.disambigSearchTimer);
		
	}
	 
	
	//Add a new name authory field set to anticpate adding more names.
	padb.add.addNameFields = function(jqThis){
 
		var newIdNumber = parseInt(jqThis.attr('id').replace('addPersonName',''))+1;
		
		//see if wee need to add another set
		if ($('#addPersonName' + newIdNumber).length == 0){
  			 
			
			$("#addNamesHolder").append(
			
				$("<div>")
					.addClass("controls")
					.addClass("controls-row")
					.addClass("input-append")
					.append(
					
						$("<input>")
							.attr("id","addPersonName" + newIdNumber)
							.attr("type","text")
							.attr("placeholder","Name " + newIdNumber)
							.addClass("span5")
							.addClass("addParticipants")
							.addClass("addPersonName")
							.focus(function(){ padb.add.addNameFields($(this));})							
							.keypress(function(e) { 
								if (e.keyCode == 192 || e.keyCode == 96 ){
									padb.add.disambigType = 'person';
									padb.add.disambigInput = newIdNumber;
									padb.add.disambigShow();
									
								}
							})
							.typeahead({
								source: function (query,processParticipants) {
									$.get('/json/participants/query', { query: query }, function (data) {
										padb.add.participants = data;
										processParticipants(data);
									});
								},
								minLength : 2,
								items : 20
							})				
							.change(function(event){
								if (padb.add.participants.indexOf($(this).val()) != -1){
									var jqxhr = $.get("/json/participantData/query", { query: $(this).val()}, function(data) {
										$("#addPersonAuthority" + newIdNumber).val(data[0].authority);
										$("#addPersonName" + (newIdNumber + 1)).focus();
									});
								}
							})
					
								
					
					).append(
					
						$("<input>")
							.attr("id","addPersonAuthority" + newIdNumber)
							.attr("type","text")
							.attr("placeholder","Authority " + newIdNumber)
							.addClass("span5")
							.addClass("addParticipants")
							.addClass("addPersonAuthority")
							.keypress(function(e) { 
								console.log(e.keyCode);
								if (e.keyCode == 192 || e.keyCode == 96 ){
									padb.add.disambigType = 'person';
									padb.add.disambigInput = newIdNumber;
									padb.add.disambigShow();
								}
							})
							
					
					
					
					
					).append(
						$("<button>")
							.addClass('btn')
							.addClass('btn-inverse')
							.addClass('addParticipantsButton')
							.attr("id","disambigP" + newIdNumber)
							.append(
								$("<i>")
									.addClass('icon-link')
							)
							.click(function(){
								
								padb.add.disambigType = 'person';
								padb.add.disambigInput = newIdNumber;
								padb.add.disambigShow();
								
								
								
							})
							
					
					)
			);
					
			
		}
		 
		
			
	}
	
	
	padb.add.submit = function(){
		
		
		//store the object
		var postObj = {
			
			addEventYear : $('#addEventYear').val(),
			addEventMonth : $('#addEventMonth').val(),
			addEventDay : $('#addEventDay').val(),
			addEventTitle : $('#addEventTitle').val(),
			addEventSource : $('#addEventSource').val(),
			addEventLocationTitle : $('#addEventLocationTitle').val(),
			addEventLocationStreet : $('#addEventLocationStreet').val(),
			addEventLocationCity : $('#addEventLocationCity').val(),
			addEventLocationCountry : $('#addEventLocationCountry').val(),
			addEventLocationAuthoirty : $('#addEventLocationAuthoirty').val(),
			addEventNotes : $('#addEventNotes').val(),
			addEventPerformance : $('#addEventTypePerformance').hasClass('active') ? 1 : 0,
			addEventExhibition : $('#addEventTypeExhibition').hasClass('active') ? 1 : 0,
			addParticipants : []
		};
		
	 
		 
		$('.addParticipants').each(function(index) {
    		
 			if ($(this).hasClass('addPersonName')){
				postObj.addParticipants.push([$(this).val()]);
			}else{
				postObj.addParticipants[postObj.addParticipants.length-1].push($(this).val());
			}
			
		});
		
		//some simple vaidation
		if (
			postObj.addEventYear.length != 4 ||
			postObj.addEventTitle.length == 0 ||
			postObj.addEventSource.length == 0 ||
			postObj.addEventLocationCity.length == 0 ||
			postObj.addEventLocationCountry.length == 0
		)
		{
			alert('some fields are not completed');	
			event.preventDefault();
			return false;			
		}		
		
		
		
		
		$.post('/add/',postObj, function(data) {
			
			if (data.results == false){
			
				alert("Error inserting data");
				return false;	
				
			}
			
			
			
		
			//get ready for the next
			$('#addEventMonth').val('')
			$('#addEventDay').val('')
			$('#addEventTitle').val('')
			$('#addEventLocationTitle').val('')
			$('#addEventLocationStreet').val('')
			$('#addEventLocationCity').val('')
			$('#addEventLocationCountry').val('')
			$('#addEventLocationAuthoirty').val('')
			$('#addEventNotes').val('')		
			
			$('.addParticipants').each(function(index) {
			
				$(this).val('');
				
				if ($(this).attr('id')!='addPersonName1' && $(this).attr('id')!='addPersonAuthority1'){
					$(this).parent().remove();
				}
				
			});
			$('.addParticipantsButton').each(function(index) {
			 
				
				if ($(this).attr('id')!='disambigP1'){
					$(this).remove();
				}
				
			});			
			
			
			
			
			
			
		});
		
		
		
	}

	
	padb.add.disambigShow = function(){
	
		$("#disambigTypeLabel").text(padb.add.disambigType);
		$("#disambigSearch").val('');
		$("#disambigResults").empty();
		
		if (padb.add.disambigType == 'person'){
			padb.add.disambigFilter = '&filter=(all type:/people/person)';
		
		}else{
			
			padb.add.disambigFilter = '';
		}
		
		
		
		$("#disambigModal").modal('show');
	
	}

	
	
	
	
	
	
	
	///////////////////////////// EXPORT //////////////////////////////////
	
	

	padb.export.initialize = function(){
		
		
		//grab the db stats and update the export controls
		
		$.getJSON("/json/dbStats/all", function(data) {
		
			console.log(data);
			
			
			for (x = parseInt(data.yearMin); x <= parseInt(data.yearMax); x = x +1){
			
				console.log(x);
				$("#startYear").append(
					$("<option>")
						.text(x)
						.val(x)
				)
				$("#endYear").append(
					$("<option>")
						.text(x)
						.val(x)
				)				
			}
		
			
			//select the first and last years
			$("#startYear").children().first().attr("selected","selected");
			$("#endYear").children().last().attr("selected","selected");
			
			
		
		});
		
		
		$("#formExport").submit(function(event){
			
			
			window.location = '/export/download/' + $("#startYear").val() + '/' + $("#endYear").val();
			event.preventDefault();
			return false;	
			
			
		});
		
		
		
	}
	
	
	
	///////////////////////////HOME/////////////////
	
	
	padb.home.initialize = function(){
		
		
		
		
	}
	
	////////////////////////LIST///////////////////
	
	padb.list.initialize = function(){
		
		
		
	}
	
	
	/////////////////ENTIRE NETWORK///////////////
	
	
	padb.entireNetwork.initialize = function(){
		
		
		$.get('/json/entireNetwork/data.json',function(data){
				
				padb.entireNetwork.data = {};
				
 				padb.entireNetwork.data.nodes = data.nodes;
				padb.entireNetwork.data.edges = data.edges
				padb.entireNetwork.filterText = '';
				padb.entireNetwork.init();
	
		$("#resourceEntireNetworkSearch").unbind().keydown(function(event){
				
				clearTimeout(padb.entireNetwork.timeout);
				
				if ($("#resourceEntireNetworkSearch").val() == ''){
					
					$("#resourceEntireNetworkClearFilter").css("visibility","hidden");
					padb.entireNetwork.init(); 
				}else{
					$("#resourceEntireNetworkClearFilter").css("visibility","visible");	
				}
				
				
				padb.entireNetwork.timeout = setTimeout(function(){ 
				
					padb.entireNetwork.filterText = $("#resourceEntireNetworkSearch").val().toLowerCase(); 
					padb.entireNetwork.init(); 
					clearTimeout(padb.entireNetwork.timeout);
					
				},1000);
	
	
	
	
				
			});
					
		})
		.error(function() { alert('Internal Server Error'); });	
	
	
		$("#resourceEntireNetworkClearFilter").unbind().click(function(){
				
				$("#resourceEntireNetworkClearFilter").css("visibility","hidden");
				$("#resourceEntireNetworkSearch").val(''); 
				padb.entireNetwork.filterText = ''; 
				padb.entireNetwork.init(); 
		});

		$("#resourceDownloadEntireNetworkGephi").unbind().click(function(){
				
				var filter = (padb.entireNetwork.filterText == '') ? 'none' : padb.entireNetwork.filterText;
				
				// window.location = '/gephi/fullNetwork/' +filter;
				window.location = '/entireNetwork/network.gexf';


		});	
			
		$("#resourceEntireNetworkLabelsButton").unbind().click(function(){
				
				if ($(this).hasClass('active')){
					d3.selectAll('.eventNetworkLabelBg').style('visibility','hidden');
					d3.selectAll('.eventNetworkLabel').style('visibility','hidden');
				}else{
					d3.selectAll('.eventNetworkLabelBg').style('visibility','visible');
					d3.selectAll('.eventNetworkLabel').style('visibility','visible');
				}
				
 		});	
		
		
		
	}
	
	
	//Sets up the network force object
	padb.entireNetwork.init = function(){
		
		
		$("#entireNetwork div").css("display","block");


		d3.select("#entireNetwork svg").remove();
		
		padb.entireNetwork.tooltip = d3.select("body")
			.append("div")
			.attr('class','d3ToolTip');		
					
		padb.entireNetwork.width = $("#entireNetwork").width() - 3;
		padb.entireNetwork.height = $("#entireNetwork").height() - 3;
		padb.entireNetwork.fill = d3.scale.category20();
		
		
		if (padb.entireNetwork.filterText == ''){
			
			$("#resourceEntireNetworkClearFilter").css("visibility","hidden");
		
		}
		
		if (padb.entireNetwork.filterText==''){
			
			padb.entireNetwork.nodes = padb.entireNetwork.data.nodes;
			padb.entireNetwork.links = padb.entireNetwork.data.edges;		
			
			for (x in padb.entireNetwork.nodes){
				padb.entireNetwork.nodes[x].display = true;	
			}
			 	
		}else{
		
			padb.entireNetwork.nodes = [];
			
			padb.entireNetwork.nodes = padb.entireNetwork.data.nodes;
			padb.entireNetwork.links = []; 
			
			var okayNodes = [];	
			
			for (x in padb.entireNetwork.data.edges){
			
				var filter = padb.entireNetwork.filterText;
				var searchStr = '';
				
				for (z in padb.entireNetwork.data.edges[x].cities){
					searchStr = searchStr + padb.entireNetwork.data.edges[x].cities[z].replace(/_/gi,' ').replace('http://dbpedia.org/resource/','') + ' ';
				}
				for (z in padb.entireNetwork.data.edges[x].dates){
					searchStr = searchStr + padb.entireNetwork.data.edges[x].dates[z] + ' ';
				}	
				for (z in padb.entireNetwork.data.edges[x].countries){
					searchStr = searchStr + padb.entireNetwork.data.edges[x].countries[z].replace(/_/gi,' ').replace('http://dbpedia.org/resource/','') + ' ';
				}	
				
				searchStr = searchStr + padb.entireNetwork.data.edges[x].sourceName + ' ';			
				searchStr = searchStr + padb.entireNetwork.data.edges[x].targetName + ' ';
				
				
				var add = false;
		
				//using or logic?
				if (filter.search(' or ') != -1){
					
					var searchTerms = filter.split(' or ');
					
					for (q in searchTerms){
						if (searchStr.search(searchTerms[q]) != -1){
							add = true;	
						}
					}
				
				//using and logic?
				}else if (filter.search(' and ') != -1){
					
					var searchTerms = filter.split(' and ');
					
					//if one part of the and query fails noGo = true meaning don't add it
					var noGo = false;
					
					for (q in searchTerms){
						if (searchStr.search(searchTerms[q]) != -1){
							add = true;	
						}else{
							noGo = true;	
						}
					}
					
					if (noGo){add = false;}
					
				}else{
						if (searchStr.search(filter) != -1){
							add = true;	
						}
					
				}
				
				if (add){
				
					padb.entireNetwork.links.push(padb.entireNetwork.data.edges[x]);
					
					okayNodes.push(padb.entireNetwork.data.edges[x].target.index);
					okayNodes.push(padb.entireNetwork.data.edges[x].source.index);
					
				}
				
				
			}
 			
			
 			
			for (x in padb.entireNetwork.nodes){
			
				if (okayNodes.indexOf(padb.entireNetwork.nodes[x].index) == -1){
					
					padb.entireNetwork.nodes[x].display = false;
						
				}else{
					
					padb.entireNetwork.nodes[x].display = true;
					
				}
				
				
			}
			
			
			
		}
		
		
				

		
		padb.entireNetwork.vis = d3.select("#entireNetwork").append("svg")
			.attr("width", padb.entireNetwork.width)
			.attr("height", padb.entireNetwork.height)
			.style("fill", "none")
			.call(d3.behavior.zoom() 

			  .on("zoom", function() { 

				padb.entireNetwork.vis.attr("transform", "translate(" + [d3.event.translate[0]+400,d3.event.translate[1]+100] + 

				 ")scale(" + d3.event.scale*.4 + ")"); 
 			  })); 		
			
		padb.entireNetwork.vis.append("rect")
			.attr("width", padb.entireNetwork.width)
			.attr("height", padb.entireNetwork.height);
			

			  

		padb.entireNetwork.vis = padb.entireNetwork.vis.append("g"); 

	//	padb.entireNetwork.vis.attr('transform','scale('+.2+')');
	padb.entireNetwork.vis.attr('transform',"translate(" + [400,100	] + ")scale(" +.4 + ")");
	
	var curve = d3.svg.line()
			  .interpolate("cardinal-closed")
			  .tension(.85);	

					
		padb.entireNetwork.force = d3.layout.force()
 			.charge(-1200)
			.gravity(0.1)
			.nodes(padb.entireNetwork.nodes)
			.distance(100)
			.linkStrength(0.2)
			.theta(1.5)
			.links(padb.entireNetwork.links)
			.size([padb.entireNetwork.width, padb.entireNetwork.height]);			
		
		
			
		
		
		padb.entireNetwork.force.on("tick", function() {
		
		


		//  padb.entireNetwork.vis.selectAll(".node")
		//	  .attr("transform", function(d) { return "translate(" + padb.entireNetwork.width + "," + padb.entireNetwork.height + ")"; });
			  
			  		
		
		
		if(padb.entireNetwork.force.alpha() > 0.01){return false;}
		
		$("#entireNetwork div").css("display","none");
		
		if(padb.entireNetwork.force.alpha() > 0.05 && padb.entireNetwork.liveRender === false){return false;}
		if (padb.entireNetwork.hideRender){return false;}
			
		  padb.entireNetwork.vis.selectAll(".egoLink")
		  .attr("d", function(d) {
			var dx = d.target.x - d.source.x,
				dy = d.target.y - d.source.y,
				dr = Math.sqrt(dx * dx + dy * dy);
			return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
			});
			
			
		  padb.entireNetwork.vis.selectAll(".node")
			  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
		
		
			
			padb.entireNetwork.force.stop(); 
		  
		});		
		
		
		padb.entireNetwork.restart();
			
	}
	
	
	
	//starts/restarts the force network layout 
	padb.entireNetwork.restart = function(){
		
	  
	
	  padb.entireNetwork.vis.selectAll(".egoLink")
		.data(padb.entireNetwork.links)
		.enter().append('path')
		  .attr("class", "egoLink")
		  .attr("x1", function(d) { return d.source.x; })
		  .attr("y1", function(d) { return d.source.y; })
		  .attr("x2", function(d) { return d.target.x; })
		  .attr("y2", function(d) { return d.target.y; });
	
	  
      var node = padb.entireNetwork.vis.selectAll(".node")
          .data(padb.entireNetwork.nodes)
        .enter().append("g")
          .attr("class", "node")
		  .attr("display", function(d) { return (d.display) ? 'block' : 'none'})
          .call(padb.entireNetwork.force.drag)
		  .on("mouseover", function(d){ padb.entireNetwork.tooltip.style("visibility", "visible"); padb.entireNetwork.tooltip.text(d.name); })
		  .on("mousemove", function(d){return padb.entireNetwork.tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
		  .on("mouseout", function(d){return padb.entireNetwork.tooltip.style("visibility", "hidden");})
		  .attr("x", function(d, i) { return padb.entireNetwork.width / 2 + i; })
		  .attr("y", function(d, i) { return padb.entireNetwork.width / 2 + i; });
		  
		node.append("circle")
			.call(padb.entireNetwork.force.drag)
			.on("click", function(d){ window.open('/resource/' + d.url+'.html')})
			.style("cursor","pointer")
			.attr("class", function(d){ 
			 
 				return "eventNetworkNode";
			
			}) 

			.attr("r", function(d) { 
				
				return 7;
				
			
			});  
	
	node.append("rect")
      .attr("x", function(d) { return -1 * (d.name.length*2.25); })
	  .attr("y", function(d) { return 7; })
	  .attr("height", function(d) { return 10; })
	  .attr("width", function(d) { return (d.name.length*2.25)*2; })
	  .attr("class", "eventNetworkLabelBg")
	   .style("visibility", "hidden")
 
	  .style("fill","#fff")
	  .on("click", function(d){ window.open('/resource/' + d.url)})
	  .style("stroke","#C63F3F");
	  		
	
			
	node.append("text")
      .attr("x", function(d) { return 0; })
	  .attr("y", function(d) { return 15; })
	  .attr("class", "eventNetworkLabel")
	  .style("visibility", "hidden")
 	  	
	  .attr("text-anchor", function(d) { return "middle";})
	
      .text(function(d) { return d.name; });					  


		padb.entireNetwork.force.start();
			
	}	


	
	//
	//
	//		End Full Network
	//
	//
	
	
	
	
	
	
	
	
	
	