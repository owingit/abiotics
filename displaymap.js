var centerPin, map, myLat, myLng, location;
var mapOptions = {
        zoom: 7,
        center: centerPin,
        panControl: true,
        zoomControl: true,
        scaleControl: true
};
function init() {
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        getMyLocation();
}

function getMyLocation() {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                        myLat = position.coords.latitude;
                        myLng = position.coords.longitude;
                        centerPin = new google.maps.LatLng(myLat, myLng);
                        drawMap();
                });
        } else {
                alert("Your browser does not support geolocation!");
        }
}

function drawMap() {
        map.panTo(centerPin);
        marker = new google.maps.Marker({
                position: centerPin,
                title: "You Are Here",
                icon: "house.png"
        });
        
        google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent("Here you are!");
                infowindow.open(map, marker);
        });
        marker.setMap(map);
        checkButton();
}

function setMarkersAmp(site, lat, lng, amp, strep) {   
        var infocontent = "<p><strong>Site number: </strong>" + site+"</p> " + "<p><strong>Latitude:</strong>" + " " + lat + " </p>" + 
                          "<p><strong>Longitude: </strong>" + lng + "</p> <p><strong>Ampicillin resistance: </strong>" + amp + 
                          "</p> <p><strong>Streptomycin resistance: </strong>" + strep + "</p";
            if ((amp == 0.0)) {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: "Site " + site,
                        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                });
                var infowindow = new google.maps.InfoWindow({
                        content: infocontent
                });
                google.maps.event.addListener(marker, 'click', function() {
                        infowindow.close();
                        infowindow.open(map, marker); 
                });    
                google.maps.event.addListener(marker, 'dblclick', function() {
                        infowindow.close();
                });
                marker.setMap(map);
                return;
            } else if ((amp > 0.0) && (amp < 0.10)) {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: "Site " + site,
                        icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                });
                var infowindow = new google.maps.InfoWindow({
                        content: infocontent
                });
                google.maps.event.addListener(marker, 'click', function() {
                        infowindow.close();
                        infowindow.open(map, marker); 
                });    
                google.maps.event.addListener(marker, 'dblclick', function() {
                        infowindow.close();
                });
                marker.setMap(map);
                return;
        } else if ((amp >=0.10) && (amp < 0.35)) {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: "Site " + site,
                        icon: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                });
                var infowindow = new google.maps.InfoWindow({
                        content: infocontent
                });
                google.maps.event.addListener(marker, 'click', function() {
                        infowindow.close();
                        infowindow.open(map, marker);
                });    
                google.maps.event.addListener(marker, 'dblclick', function() {
                        infowindow.close();
                });
                marker.setMap(map);
                return;
        } else if ((amp >= 0.35) && (amp < 0.85)) {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: "Site " + site,
                        icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                });
                var infowindow = new google.maps.InfoWindow({
                        content: infocontent
                });
                google.maps.event.addListener(marker, 'click', function() {
                        infowindow.close();
                        infowindow.open(map, marker); 
                });  
                google.maps.event.addListener(marker, 'dblclick', function() {
                        infowindow.close();
                });  
                marker.setMap(map);
                return;
        }
        else if ((amp >= 0.85)) {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: "Site " + site,
                        icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                });
                var infowindow = new google.maps.InfoWindow({
                        content: infocontent
                });
                google.maps.event.addListener(marker, 'click', function() {
                        infowindow.close();
                        infowindow.open(map, marker); 
                });   
                google.maps.event.addListener(marker, 'dblclick', function() {
                        infowindow.close();
                }); 
                marker.setMap(map);
                return;
        }
}


function checkButton() {
	$(document).ready(function() {
	    $.ajax({
	        type: "GET",
	        url: "web_data.txt",
	        dataType: "text",
	        success: function(data) {processData(data);}
	     });
	});

	function processData(allText) {
	    var allTextLines = allText.split(/\r\n|\n/);
	    var headers = allTextLines[0].split(',');
	    var lines = [];

	    for (var i=1; i<allTextLines.length; i++) {
	        var data = allTextLines[i].split(',');
	        if (data.length == headers.length) {

	            var tarr = [];
	            for (var j=0; j<headers.length; j++) {
	                tarr.push(data[j]);
	            }
	            lines.push(tarr);
	        }
	    }
	    for (i = 0; i < lines.length; i++) {
			setMarkersAmp(lines[i][0], lines[i][1], lines[i][2], lines[i][3], lines[i][4]);
		}
	}

	


}

function email() {
        var link = "mailto:andrew-martin-1@colorado.edu"
             + "&subject=" + escape("Local Antibiotic Resistance")
             + "&body=" + escape(document.getElementById('emailmessage').value)
    ;

    window.location.href = link;
}
