function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 10.774102, lng: 106.703700 },
        zoom: 8
    });
    var marker = new google.maps.Marker({
        position: { lat: 10.774102, lng: 106.703700 },
        map: map,
        title: "Hello from Saigon!"
    });
    new google.maps.Circle({
        strokeColor: "#ff00ffff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#00ccffff",
        fillOpacity: 0.35,
        map: map,
        center: { lat: 10.774102, lng: 106.703700 },
        radius: 2000 
    });
    map.setOptions({
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    });
}
var button = document.getElementById("questionButton");
button.addEventListener("click", function() {
    alert("If you have questions, contact me at:\nmilw3894@gmail.com");
});
