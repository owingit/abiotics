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
       setMarkersWorld(7, 29.380702, 47.977937, "http://www.biomedcentral.com/content/pdf/1744-8603-2-6.pdf", "_blank");
       setMarkersWorld(8, 31.146809, 121.605842, "http://www.biomedcentral.com/content/pdf/1744-8603-2-6.pdf", "_blank")
       setMarkersWorld(9, 40.707477, -73.879431, "http://www.biomedcentral.com/content/pdf/1744-8603-2-6.pdf", "_blank")
       setMarkersWorld(10, 52.808134, -2.036394, "http://s.telegraph.co.uk/graphics/projects/antibiotic-resistance/", "_blank");
       setMarkersWorld(11, 38.992997, -76.922314, "http://aem.asm.org/content/70/10/6005.short", "_blank");
       setMarkersWorld(12, 59.910383, 10.784430, "http://journals.cambridge.org/action/displayAbstract?fromPage=online&aid=66683&fileId=S095026880000488X", "_blank");
       setMarkersWorld(13, 46.456165, -94.749792, "http://www.nejm.org/doi/full/10.1056/nejm199905203402001", "_blank");
       setMarkersWorld(14, 60.576683, 24.880732, "http://aac.asm.org/content/35/10/2065.short", "_blank");
       setMarkersWorld(15, 48.983788, 14.475441, "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4448040/", "_blank");
       setMarkersWorld(16, 37.787186, -122.391080, "http://cid.oxfordjournals.org/content/34/4/425.short", "_blank");
       setMarkersWorld(17, 40.342611, -3.778918, "http://www.jstor.org/stable/4481328?seq=1#page_scan_tab_contents", "_blank");
       setMarkersWorld(18, 6.246495, -75.576136, "http://aac.asm.org/content/50/8/2880.short", "_blank");
       setMarkersWorld(19, 53.438593, -113.506048, "http://www.ncbi.nlm.nih.gov/pubmed/19958100", "_blank");
       setMarkersWorld(20, 33.575699, -101.882950, "http://ehp.niehs.nih.gov/1408555/?utm_medium=twitter&utm_source=twitterfeed", "_blank");
       setMarkersWorld(21, 39.726326, -104.982141, "http://www.nrcresearchpress.com/doi/abs/10.1139/w10-060#.VagMtFbYkds", "_blank");
}

function email() {
        var link = "mailto:andrew-martin-1@colorado.edu"
             + "&subject=" + escape("Local Antibiotic Resistance")
             + "&body=" + escape(document.getElementById('emailmessage').value)
    ;

    window.location.href = link;
}
