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

function setMarkersStrep(site, lat, lng, amp, strep) {   
        var infocontent = "<p><strong>Site number: </strong>" + site+"</p> " + "<p><strong>Latitude:</strong>" + " " + lat + " </p>" + 
                          "<p><strong>Longitude: </strong>" + lng + "</p> <p><strong>Ampicillin resistance: </strong>" + amp + 
                          "</p> <p><strong>Streptomycin resistance: </strong>" + strep + "</p";
            if ((strep == 0.0)) {
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
            } else if ((strep > 0.0) && (strep < 0.10)) {
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
            } else if ((strep >=0.10) && (strep < 0.35)) {
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
            } else if ((strep >= 0.35) && (strep < 0.85)) {
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
            } else if ((strep >= 0.85)) {
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
       
        setMarkersStrep(1, 40.36863, -104.67575, 0.46819096, 0.103590042);
        setMarkersStrep(2, 40.2040467, -104.82344, 0.396916702, 0.101398651); 
        setMarkersStrep(3,40.176035, -104.93851, 0.508075158, 0.227258574);
        setMarkersStrep(4, 40.156515, -105.0047, 0.284117795, 0.160667698);
        setMarkersStrep(5, 40.086065, -105.05411, 0.444290657, 0.165592721);
        setMarkersStrep(6, 40.0419267, -105.12514, 0.462536778, 0.118283136);
        setMarkersStrep(7, 40.0221733, -105.22279, 0.62072455, 0.038089456);
        setMarkersStrep(8, 40.0068617, -105.2583, 0.551027023, 0.124871795);
        setMarkersStrep(9, 40.0084733, -105.28393, 0.887253721, 0.068437038);
        setMarkersStrep(10, 40.0024233, -105.37473, 0.480437855, 0.049353496);
        setMarkersStrep(11, 40.0038217, -105.32299, 0.785315713, 0.046656685);
        setMarkersStrep(12, 39.9593933, -105.50009, 0.187041773, 0.019607843);
        setMarkersStrep(13, 40.600292, -105.836378, 0.14457831, 0.0);
        setMarkersStrep(14, 40.520936, -105.89256, 0.42857143, 0.0);
        setMarkersStrep(15, 40.520793, -105.892021, 0.18918919, 0.02702703);
        setMarkersStrep(16, 40.540468, -105.869501, 0.80, 0.0);
        setMarkersStrep(17, 40.670422, -105.230509, 0.23655914, 0.0);
        setMarkersStrep(18, 40.22544, -104.848794, 0.956284153005464, 0.0);
        setMarkersStrep(19, 40.22544, -104.849244, 0.272727272727273, 0.0);
        setMarkersStrep(20, 40.215947, -104.81567, 1.0, 0.014); 
        setMarkersStrep(21, 40.363443, -104.640019, 0.138888888888889, 0.0);
        setMarkersStrep(22, 39.951781, -105.595511, 0.670454545, 0.011363636);
        setMarkersStrep(23, 40.03075, -105.535186, 1.0, 0.263157895);
        setMarkersStrep(24, 40.08198, -105.540428, 0.752066116, 0.123966942);
        setMarkersStrep(25, 40.048459, -105.185153, 0.224025974, 0.029220779);
        setMarkersStrep(26, 40.027363, -105.223892, 0.27016129,  0.0);
        setMarkersStrep(27, 40.014554, -105.295979, 0.268558952, 0.006550218);
        setMarkersStrep(28, 39.987529, -104.831306, 0.241758242, 0.071428571);
        setMarkersStrep(29, 40.306677, -104.618705, 0.276470588, 0.005882353);
        setMarkersStrep(30, 40.312012, -104.618051, 0.260869565, 0.065217391);
        setMarkersStrep(31, 40.5565434, -105.0194397, 0.33333333, 0.21212121);
        setMarkersStrep(32, 40.5597782, -105.0216263, 0.23529412, 0.02941176);
        setMarkersStrep(33, 40.5643424, -105.0291096, 0.2585034, 0.05442177);
        setMarkersStrep(34, 39.1178, -106.4454, 0.0, 0.0);
        setMarkersStrep(35, 39.152096, -106.412628, 0.06666667, 0.0);
        setMarkersStrep(36, 39.105771, -106.395302, 1.08955224, 0.0);
        setMarkersStrep(37, 42.201433, -104.560413, 0.084, 0.0);
        setMarkersStrep(38, 42.057578, -104.193162, 0.18309859, 0.0);
        setMarkersStrep(39, 42.210255, -104.533483, 0.07407407, 0.0);
        setMarkersStrep(40, 39.613512, -105.02399, 0.10958904, 0.0);
        setMarkersStrep(41, 39.6122107, -105.02101,0.18518519, 0.0);
        setMarkersStrep(42, 39.6114508, -105.0246749, 0.100, 0.0);
        setMarkersStrep(43, 40.248780, -105.308178, 0.1250,  0.0875);
        setMarkersStrep(44, 40.247904, -105.288914, 0.230769231, 0.076923077);
        setMarkersStrep(45, 40.362410, -105.546089, 0.111111111, 0.0);
        setMarkersStrep(46, 40.389809, -105.464204, 0.05882353, 0.01960784);
        setMarkersStrep(47, 40.375062, -105.499745, 0.34814815, 0.17777778);
        setMarkersStrep(48, 40.378507, -105.513787, 0.368421053, 0.02631579);
        setMarkersStrep(49, 40.345667, -105.532496, 0.03703704, 0.03703704);
        setMarkersStrep(50, 39.222676, -106.379113, 0.3076923077, 0.0384615385);
        setMarkersStrep(51, 39.285744, -106.279945, 0.56, 0.0);
        setMarkersStrep(52, 39.360264, -106.197382, 0.416666666667, 0.0);
        setMarkersStrep(53, 39.459308, -106.142776, 0.0, 0.0);
        setMarkersStrep(54, 39.715148, -105.694472, 0.2272727273, 0.0);
        setMarkersStrep(55, 40.6969931, -105.611347, 1.18604651163, 0.0697674419);
        setMarkersStrep(56, 40.6999169, -105.5686194, 0.52, 0.0);
        setMarkersStrep(57, 40.6989206, -105.5409828, 0.45, 0.0);
        setMarkersStrep(58, 40.691927, -105.5046175, 0.7142857143, 0.0);
        setMarkersStrep(59, 40.6914838, -105.5051208, 1, 0.16666666667);
        setMarkersStrep(60, 40.6762641, -105.4798485, 0.142857143, 0.07142857143);
        setMarkersStrep(61, 40.6844353, -105.452364, 0.4090909091, 0.2272727273);
        setMarkersStrep(62, 40.6944887, -105.4341501, 0.371428571, 0.171428571);
        setMarkersStrep(63, 40.6838141, -105.4077675, 1, 0.23076923077);
        setMarkersStrep(64, 40.6852243, -105.3786606, 0.17073170732, 0.19512195122);
        setMarkersStrep(65, 40.6875014, -105.365587, 0.34782608696, 0);
        setMarkersStrep(66, 40.6882283, -105.3129422, 0.89041095891, 0.150684932);
        setMarkersStrep(67, 40.6901821, -105.2889251, 1.5, 0.05);
        setMarkersStrep(68, 40.6956443, -105.2647192, 0.5961538462, 0.1442307692);
        setMarkersStrep(69, 40.6947941, -105.2422126, 0.2424242424,   0.18181818182);
        setMarkersStrep(70, 40.670356, -105.2304153, 0.11392405063, 0.088607595);
}

function email() {
        var link = "mailto:andrew-martin-1@colorado.edu"
             + "&subject=" + escape("Local Antibiotic Resistance")
             + "&body=" + escape(document.getElementById('emailmessage').value)
    ;

    window.location.href = link;
}
