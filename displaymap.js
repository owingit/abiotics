var centerPin, map, myLat, myLng, location;
var mapOptions = {
        zoom: 14,
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

// $(document).ready(function() {
//         mapSelector = document.getElementById("map");
//         if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(function(pos) {
//                         myLat = pos.coords.latitude;
//                         myLng = pos.coords.longitude
//                         centerPin = new google.maps.LatLng(myLat, myLng);
//                         mapOptions = {
//                                 zoom: 14,
//                                 center: centerPin,
//                                 panControl: true,
//                                 zoomControl: true,
//                                 scaleControl: true
//                         };
//                         map = new google.maps.Map(mapSelector, mapOptions);
//                         drawMap();
//                 })
//         } else {
//                 alert("Your browser does not support geolocation!");
//                 mapOptions = {
//                         zoom: 0,
//                         center: new google.maps.LatLng(0, 0)
//                 };
//                 map = new google.maps.Map(mapSelector, mapOptions);
//         }
// });

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
        checkReady();
}

function setMarkers(site, lat, lng, amp, strep) {
        var marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(lat,lng),
                title: "Site " + site,
                icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png"
                // if ((amp >= 0.0) && (amp < 0.20)) {
                //         icon: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
                // } else if ((amp >=0.20) && (amp < 0.40)) {
                //         icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                // } else if ((amp >= 0.40) && (amp < 0.60)) {
                //         icon: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                // } else if ((amp >= 0.60) && (amp < 0.80)) {
                //         icon: "http://maps.google.com/mapfiles/ms/icons/orange-dot.png",
                // }
                // else {
                //         icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                // }
        });
        google.maps.event.addListener(marker, 'click', function() {
                info.close();
                info.setContent(site+" " + "Latitude:" + " " + lat + " " + 
                        "Longitude: " + lng + " Ampicillin resistance: " + amp + 
                        " Streptomycin resistance: " + strep);
                info.open(map, marker); 
        });
        marker.setMap(map);
        return;
                // infowindow = new google.maps.InfoWindow;
                // for (var i = 0; i < results.length; i++) {
                //         url = "https://www.google.com/maps";
                //         query = "?saddr=" + myLat + "," + myLng + "&daddr=" + results[i].geometry.location.lat() + "," + results[i].geometry.location.lng();
                //         searchquery = url + query;
                //         info = "Store Name: " + results[i].name + "\n"
                //                 + "Distance: " + haversine(myLat, myLng, results[i].geometry.location.lat(), results[i].geometry.location.lng()).toFixed(2) + " Miles Away\n"
                //                 + "<a href=" + searchquery + " target='_blank'>Get Directions</a>";
                //         marker = new google.maps.Marker({
                //                 position: results[i].geometry.location,
                //                 title: info
                //         });
                //         google.maps.event.addListener(marker, "click", function () {
                //                 infowindow.setContent(this.title);
                //                 infowindow.open(map, this);
                //         });
                //         marker.setMap(map);
                // }
}

function checkReady() {
        // if (xhr.readyState == 4 && xhr.status == 200) {
                // location_list = JSON.parse(xhr.responseText);
                // for (i = 0; i < location_list.length; i++) {
        // setMarkers(location_list[i].site, location_list[i].lat, 
        //         location_list[i].lng, location_list[i].amp, 
        //         location_list[i].strep);
        setMarkers(1, 40.36863, -104.67575, 0.46819096, 0.103590042);
        setMarkers(2, 40.2040467, -104.82344, 0.396916702, 0.101398651); 
        setMarkers(3,40.176035, -104.93851, 0.508075158, 0.227258574);
        setMarkers(4, 40.156515, -105.0047, 0.284117795, 0.160667698);
        setMarkers(5, 40.086065, -105.05411, 0.444290657, 0.165592721);
        setMarkers(6, 40.0419267, -105.12514, 0.462536778, 0.118283136);
        setMarkers(7, 40.0221733, -105.22279, 0.62072455, 0.038089456);
        setMarkers(8, 40.0068617, -105.2583, 0.551027023, 0.124871795);
        setMarkers(9, 40.0084733, -105.28393, 0.887253721, 0.068437038);
        setMarkers(10, 40.0024233, -105.37473, 0.480437855, 0.049353496);
        setMarkers(11, 40.0038217, -105.32299, 0.785315713, 0.046656685);
        setMarkers(12, 39.9593933, -105.50009, 0.187041773, 0.019607843);
        
}

