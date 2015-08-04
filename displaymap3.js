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
       
     $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "world_map.txt",
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
            setMarkersWorld(lines[i][0], lines[i][1], lines[i][2], lines[i][3], lines[i][4]);
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
