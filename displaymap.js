var centerPin, map, myLat, myLng, location;
var mapOptions = {
        zoom: 10,
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
                icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
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
        if ((amp >= 0.0) && (amp < 0.20)) {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: "Site " + site,
                        icon: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
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
        } else if ((amp >=0.20) && (amp < 0.40)) {
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
        } else if ((amp >= 0.40) && (amp < 0.60)) {
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
        } else if ((amp >= 0.60) && (amp < 0.80)) {
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
        else {
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
        // if (xhr.readyState == 4 && xhr.status == 200) {
                // location_list = JSON.parse(xhr.responseText);
                // for (i = 0; i < location_list.length; i++) {
        // setMarkers(location_list[i].site, location_list[i].lat, 
        //         location_list[i].lng, location_list[i].amp, 
        //         location_list[i].strep);

        setMarkersAmp(1, 40.36863, -104.67575, 0.46819096, 0.103590042);
        setMarkersAmp(2, 40.2040467, -104.82344, 0.396916702, 0.101398651); 
        setMarkersAmp(3,40.176035, -104.93851, 0.508075158, 0.227258574);
        setMarkersAmp(4, 40.156515, -105.0047, 0.284117795, 0.160667698);
        setMarkersAmp(5, 40.086065, -105.05411, 0.444290657, 0.165592721);
        setMarkersAmp(6, 40.0419267, -105.12514, 0.462536778, 0.118283136);
        setMarkersAmp(7, 40.0221733, -105.22279, 0.62072455, 0.038089456);
        setMarkersAmp(8, 40.0068617, -105.2583, 0.551027023, 0.124871795);
        setMarkersAmp(9, 40.0084733, -105.28393, 0.887253721, 0.068437038);
        setMarkersAmp(10, 40.0024233, -105.37473, 0.480437855, 0.049353496);
        setMarkersAmp(11, 40.0038217, -105.32299, 0.785315713, 0.046656685);
        setMarkersAmp(12, 39.9593933, -105.50009, 0.187041773, 0.019607843);


        
}

