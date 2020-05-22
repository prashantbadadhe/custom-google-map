njitMapApp.controller('MapController', function($scope, $rootScope, $compile) {

        function initialize() {

        	//Create Map
            $scope.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain']
                  },
                center: { lat: 40.730610, lng: -73.935242}
            });
            
            //Load Data
            $scope.data =myData;

            //Create Info Window
            $scope.infowindow = new google.maps.InfoWindow({
                content: ''
            });
      

            //Create Marker for each data
            
            for (var i = 0; i < $scope.data.length; i++) {
            	var name='N/A';       	
            	if($scope.data[i].person_names.length!=0){
            		name=$scope.data[i].person_names[0].person_name;
            	}
            	var speech=$scope.data[i].speech;
            	if(speech.length==0){
            		speech="N/A"
            	}
            	var lat=$scope.data[i].lat;
            	var long=$scope.data[i].long;
            	
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, long),
                    map: $scope.map,
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                      },
                    //title: $scope.data[i].name
                });
                
                
				var content = '<div><table><tr><td><img src="img/name.png" width=30px; height=30px;></img></td>'+
					'<td>'+name +'</td></tr>'+
					'<tr><td><img src="img/speech.png" width=30px; height=30px;></img></td>'+	
					'<td>'+speech+'</td></tr>'+
					'<tr><td><img src="img/lat.png" width=30px; height=30px;></img></td>'+
					'<td>Lat: '+lat+'</td></tr>'+
					'<tr><td><img src="img/lat.png" width=30px; height=30px;></img></td>'+
					'<td>Long: '+long+'</td></tr>'+
					'<tr><td><img src="img/img1.jpg" width=60px; height=60px;></img></td>'+
					'<td><img src="img/img2.jpg" width=60px; height=60px;></img></td></tr>'+
					'</table></div>';
                var compiledContent = $compile(content)($scope)

                google.maps.event.addListener(marker, 'click', (function(marker, content, scope) {
                    return function() {
                        scope.infowindow.setContent(content);
                        scope.infowindow.open(scope.map, marker);
                    };
                })(marker, compiledContent[0], $scope));

            }

        }

        google.maps.event.addDomListener(window, 'load', initialize);

    });