var centerPin, map, myLat, myLng, location_list;
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
                infowindow.open(map, this);
        });
        marker.setMap(map);
        // findStores();
}

// function findStores() {
//         request = {
//                 location: centerPin,
//                 radius: 10000,
//                 query: ['grocery', 'store', 'supermarket', 'market']
//         };
//         service = new google.maps.places.PlacesService(map);
//         service.textSearch(request, setPins);
// }

// function setPins(results, status) {
//         if (status == google.maps.places.PlacesServiceStatus.OK) {
//                 infowindow = new google.maps.InfoWindow;
//                 for (var i = 0; i < results.length; i++) {
//                         url = "https://www.google.com/maps";
//                         query = "?saddr=" + myLat + "," + myLng + "&daddr=" + results[i].geometry.location.lat() + "," + results[i].geometry.location.lng();
//                         searchquery = url + query;
//                         info = "Store Name: " + results[i].name + "\n"
//                                 + "Distance: " + haversine(myLat, myLng, results[i].geometry.location.lat(), results[i].geometry.location.lng()).toFixed(2) + " Miles Away\n"
//                                 + "<a href=" + searchquery + " target='_blank'>Get Directions</a>";
//                         marker = new google.maps.Marker({
//                                 position: results[i].geometry.location,
//                                 title: info
//                         });
//                         google.maps.event.addListener(marker, "click", function () {
//                                 infowindow.setContent(this.title);
//                                 infowindow.open(map, this);
//                         });
//                         marker.setMap(map);
//                 }
//         }
// }

// function toRad(num) {
//         return num * Math.PI / 180.0;
// }

// function haversine(lat1, lng1, lat2, lng2) {
//         R = 6371;
//         deltaLat = toRad(lat2 - lat1);
//         deltaLng = toRad(lng2 - lng1);
//         a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
//                 Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
//                 Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
//         return (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * R * 0.6214);
// }