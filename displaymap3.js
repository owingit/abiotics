var centerPin, map, myLat, myLng, location;
var mapOptions = {
        zoom: 2,
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

function setMarkersWorld(site, lat, lng, link, target) {   
        var infocontent = "<p><strong>Site number: </strong>" + site+"</p> " + "<p><strong>Latitude:</strong>" + " " + lat + " </p>" + 
                          "<p><strong>Longitude: </strong>" + lng + "</p><p>" + "<a href = " + link + " target = " + target + "><strong>Article</strong></a></p>";
        
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


function checkButton() {
        // if (xhr.readyState == 4 && xhr.status == 200) {
                // location_list = JSON.parse(xhr.responseText);
                // for (i = 0; i < location_list.length; i++) {
        // setMarkers(location_list[i].site, location_list[i].lat, 
        //         location_list[i].lng, location_list[i].amp, 
        //         location_list[i].strep);
       setMarkersWorld(1, 56.879317, 14.814398, "http://www.ncbi.nlm.nih.gov/pubmed/14514147", "_blank");
       setMarkersWorld(2, 59.328933, 18.024122, "http://sjp.sagepub.com/content/43/3/302.short", "_blank");
       setMarkersWorld(3, 53.131879, -1.778736, "http://online.liebertpub.com/doi/abs/10.1089/mdr.1997.3.263", "_blank");
       setMarkersWorld(4, 33.565911, 119.338151, "http://link.springer.com/article/10.1007/s11356-015-4636-y", "_blank");
       setMarkersWorld(5, 20.926216, 77.768269, "http://www.nytimes.com/2014/12/04/world/asia/superbugs-kill-indias-babies-and-pose-an-overseas-threat.html?_r=0", "_blank");
       setMarkersWorld(6, -33.941448, 18.461783, "http://www.sciencedirect.com/science/article/pii/S1075996414001553", "_blank");

        
}

function email() {
        var link = "mailto:andrew-martin-1@colorado.edu"
             + "&subject=" + escape("Local Antibiotic Resistance")
             + "&body=" + escape(document.getElementById('emailmessage').value)
    ;

    window.location.href = link;
}
