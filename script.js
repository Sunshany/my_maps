/**
 * Created by sarah.amairi@epitech.eu on 02/05/2017.
 */

function initMap() {

    var url = window.location.href;
    if (url) {
        var name = url.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) {
            var paris = {lat: 48.895173, lng: 2.287865};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: paris,
                fullscreenControl: true
            });
            var marker = new google.maps.Marker({
                position: paris,
                map: map
            });
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
        }
    }
}

function checkParams() {


}

function AutoComplete() {

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-33.8902, 151.1759),
        new google.maps.LatLng(-33.8474, 151.2631));

    var frominput = document.getElementById('from-input');
    var toinput = document.getElementById('to-input');
    var options = {
        bounds: defaultBounds,
        types: ['establishment']
    };

    autocomplete = new google.maps.places.Autocomplete(frominput, options);
}
