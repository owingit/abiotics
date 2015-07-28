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
        setMarkersWorld(22, 38.718719, -9.138746, "http://femsle.oxfordjournals.org/content/351/1/64.full", "_blank");
        setMarkersWorld(23, 17.524875, 78.262956, "http://aem.asm.org/content/79/23/7256.full", "_blank");
        setMarkersWorld(24, 38.709800, -9.153030, "http://femsre.oxfordjournals.org/content/38/4/761.full", "_blank");
        setMarkersWorld(25, 64.421614, -17.164201, "http://femsre.oxfordjournals.org/content/35/5/901", "_blank");
        setMarkersWorld(26, -22.901785, -43.186149, "http://www.ncbi.nlm.nih.gov/pubmed/24821495", "_blank");
        setMarkersWorld(27, 42.553543, -71.342789, "http://www.ncbi.nlm.nih.gov/pubmed/18388292", "_blank");
        setMarkersWorld(28, 46.606967, -95.921009, "http://www.ncbi.nlm.nih.gov/pubmed/18388292", "_blank");
        setMarkersWorld(29, 42.230811, -71.015834, "http://www.ncbi.nlm.nih.gov/pubmed/18388292", "_blank");
        setMarkersWorld(30, 40.695068, -77.757645, "http://www.ncbi.nlm.nih.gov/pubmed/18388292", "_blank");
        setMarkersWorld(31, 40.479404, -79.114001, "http://www.ncbi.nlm.nih.gov/pubmed/18388292", "_blank");
        setMarkersWorld(32, 42.353863, -71.069787, "http://www.ncbi.nlm.nih.gov/pubmed/18388292", "_blank");
        setMarkersWorld(33, 23.130491, -82.411202, "http://pubs.acs.org/doi/full/10.1021/es102473z", "_blank");
        setMarkersWorld(34, -19.382309, -43.529682, "http://www.funpecrp.com.br/gmr/year2007/vol3-6/gmr0373_full_text.html", "_blank");
        setMarkersWorld(35, -37.754762, 145.398007, "http://www.ncbi.nlm.nih.gov/pubmed/10196762", "_blank");
        setMarkersWorld(36, 45.459144, -123.845480, "http://aem.asm.org/content/36/3/450.short", "_blank");
        setMarkersWorld(37, 43.076342, -89.411055, "http://onlinelibrary.wiley.com/doi/10.1111/j.1462-2920.2004.00664.x/full", "_blank");
        setMarkersWorld(38, 42.685010, 25.384427, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(39, 56.041721, 9.784897, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(40, 53.061565, -8.224890, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(41, 43.135266, 12.189089, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(42, 51.419278, 10.256365, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(43, 38.869911, -5.163195, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(44, 59.144413, 13.522014, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(45, 52.340709, 4.872876, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(46, 40.444996, 29.638342, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(47, 54.428104, -1.949183, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(48, 28.966410, 116.704470, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(49, 22.307244, 114.195800, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");  
        setMarkersWorld(50, 43.004392, 141.341634, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(51, 36.499981, 128.096161, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(52, 3.110000, 101.861801, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(53, 24.920523, 121.625350, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(54, 60.531858, -142.163693, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(55, -34.116212, -71.132153, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(56, 14.132915, -16.499164, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(57, 6.344338, 12.937847, "http://www.researchgate.net/profile/Gianpiero_Manes/publication/49711792_Worldwide_H._pylori_antibiotic_resistance_a_systematic_review/links/0fcfd5093f8bdcec54000000.pdf", "_blank");
        setMarkersWorld(58, 26.198582, 91.221375, "http://www.sciencedirect.com/science/article/pii/S1473309910701432", "_blank");
        setMarkersWorld(59, 28.205127, 70.626710, "http://www.sciencedirect.com/science/article/pii/S1473309910701432", "_blank");
        setMarkersWorld(60, 21.020354, 79.899171, "http://www.sciencedirect.com/science/article/pii/S1473309910701432", "_blank");
        setMarkersWorld(61, 54.845935, -6.593421, "http://www.sciencedirect.com/science/article/pii/S1473309910701432", "_blank");
        setMarkersWorld(62, 53.459955, -1.789074, "http://www.sciencedirect.com/science/article/pii/S1473309910701432", "_blank");
        setMarkersWorld(63, -68.311362, 101.953128, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(64, -76.043488, -103.710940, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(65, 77.468966, -69.223909, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(66, 67.106525, -50.034831, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(67, 63.273000, -145.253847, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(68, 38.664662, 72.107219, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(69, 31.943540, 105.569889, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(70, 32.284218, 101.656536, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(71, 36.580981, 137.571721, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");
        setMarkersWorld(72, -46.571421, -73.726216, "http://onlinelibrary.wiley.com/doi/10.1111/1758-2229.12011/full", "_blank");

}  

function email() {
        var link = "mailto:andrew-martin-1@colorado.edu"
             + "&subject=" + escape("Local Antibiotic Resistance")
             + "&body=" + escape(document.getElementById('emailmessage').value)
    ;

    window.location.href = link;
}
