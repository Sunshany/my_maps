/**
 * Created by sarah.amairi@epitech.eu on 02/05/2017.
 */

// fonction juste pour le petit titre stylisé

$(document).ready(function () {
    $("h2").lettering()
})

$("input:radio").attr("checked", false)

// outils pour l'autocomplete et la méthode qui pose les bases
// de la recherche

var makeSearch = (map, id, marker, path) => {
    var input = document.getElementById(id)
    var searchBox = new google.maps.places.SearchBox(input)
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)

// pour limiter les resultats de la recherche par rapport a la zone affichée
// la map -> Appelez la méthode setBounds() pour modifier la zone de recherche
// sur un objet Autocomplete existant.

    map.addListener('bounds_changed', () => searchBox.setBounds(map.getBounds()))

    // cet event est call quand on choisit un lieu :

    searchBox.addListener('places_changed', () => {
        var place = searchBox.getPlaces()[0]
        if (place) {
            marker.setPosition(place.geometry.location)
        }
    })
}

function init() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 48.8584, lng: 2.2945},
        zoom: 10,
        mapTypeId: 'roadmap'
    })

    var myLatlng = new google.maps.LatLng()

    var directionsService = new google.maps.DirectionsService
    console.log('coco')
    console.log(directionsService)
    var directionsDisplay = new google.maps.DirectionsRenderer

    directionsDisplay.setMap(map);

    var places = []

    var fitMap = () => {
        var bounds = new google.maps.LatLngBounds()
        places.filter(Boolean).forEach(marker => bounds.extend(marker.position))
        map.fitBounds(bounds)
    }

    var setMarker = position => {
        var marker = new google.maps.Marker({ map, position })

        marker.addListener('position_changed', fitMap)
        // console.log(marker)
        places.push(marker)
        return marker
    }

    makeSearch(map, 'from-input', setMarker({ lat: 0, lng: 0 }))
    makeSearch(map, 'to-input', setMarker({ lat: 0, lng: 0 }))

    document.getElementById('trajet-court').addEventListener("click", function () {
        directionPath()
    })

    document.getElementById('checkbox-geolocalisation').addEventListener("click", function () {
        myPosition()
    })
}

function directionPath(directionsService, directionDisplay) {

    var testOk = document.getElementById('from-input').value

    directionsService.route({
        origin: document.getElementById('from-input').value,
        destination: document.getElementById('to-input').value,
        travelMode: 'DRIVING'
    }, function (response, status) {
        alert('oook')
        if (status === 'Ok') {
            directionsDisplay.setDirections(response)
        } else {
            window.alert('Directions request failed due to ' + status)
        }
    })
}

function myPosition() {



        var inputFrom = document.getElementById('from-input').value

        console.log(inputFrom)



//    deux cahiers
//    une tasse de voyage
//    nails art
//    gourde
//    étui à lunette
//    gobelet
//    feed
//    porte feuille
//    boucle doreille x3
//    porte monnaie pour chalexia
//    écouteurs
//

    var inputValue = document.getElementById('from-input').value

    if (inputValue = null) {
        alert('vide')
    } else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }

                var text = document.getElementById('from-input')



            })
        } else {
            // Browser doesn't support Geolocation
            alert('Browser doesn\'t support Geolocation')
        }
    }

}