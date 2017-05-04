/**
 * Created by sarah.amairi@epitech.eu on 02/05/2017.
 */

// fonction juste pour le petit titre stylisé

$(document).ready(function () {
    $("h2").lettering()
})

// mes outils de base

var makeSearch = (map, id, marker) => {
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
        center: {lat: -33.8688, lng: 151.2195},
        zoom: 10,
        mapTypeId: 'roadmap'
    })

    var places = []

    var fitMap = () => {
        var bounds = new google.maps.LatLngBounds()
        places.filter(Boolean).forEach(marker => bounds.extend(marker.position))
        map.fitBounds(bounds)
    }

    var setMarker = position => {
        var marker = new google.maps.Marker({ map, position })

        marker.addListener('position_changed', fitMap)

        places.push(marker)
        return marker
    }

    makeSearch(map, 'from-input', setMarker({ lat: 0, lng: 0 }))
    makeSearch(map, 'to-input', setMarker({ lat: 0, lng: 0 }))
}



// function init() {
//
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 4,
//         center: {lat: 48.8584, lng: 2.2945},
//         mapTypeId: 'roadmap',
//         fullscreenControl: true
//     })
//
//     var places = []
//
//     console.log()
//
//     var setMarker = position => {
//
//         alert('setmarker')
//
//         var marker = new google.maps.Marker({ map, position })
//
//         marker.addListener('position_changed', fitMap)
//
//         places.push(marker)
//         return marker
//     }
//
//     var fitMap = () => {
//         var bounds = new google.maps.LatLngBounds()
//         console.log(bounds)
//         places.filter(Boolean).forEach(marker => bounds.extend(marker.position))
//         map.fitBounds(bounds)
//     }
//
//     // makeSearch(map, 'from-input', setMarker({ lat: 0, lng: 0}))
//     // makeSearch(map, 'to-input', setMarker({lat: 0, lng: 0}))
//
// }

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         }
//         var marker = new google.maps.Marker({
//             position: pos,
//             map: map
//         })
//         marker.setPosition(pos)
//     })
// }

// function checkInput() {
//
//     alert('kiak')
//
//     var inputStart = document.getElementById('from-input')
//     // var inputEnd = document.getElementById('to-input')
//
//     // var searchBoxOne = new google.maps.places.SearchBox(inputStart)
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputStart)
//
//     console.log(searchBoxOne)
//
//     map.addEventListener('bounds_changed', function () {
//         searchBoxOne.setBounds(getBounds())
//     })
//
//     var markers = []
//     searchBoxOne.addEventListener('places_changed', function () {
//
//         var places = searchBoxOne.getPlaces()
//
//         if (places.length == 0) {
//             return
//         }
//
//         // Clear out the old markers.
//         markers.forEach(function(marker) {
//             marker.setMap(null)
//         })
//         markers = []
//
//         // For each place, get the icon, name and location.
//         // var bounds = new google.maps.LatLngBounds()
//         places.forEach(function(place) {
//             if (!place.geometry) {
//                 console.log("Returned place contains no geometry")
//                 return
//             }
//             // var icon = {
//             //     url: place.icon,
//             //     size: new google.maps.Size(71, 71),
//             //     origin: new google.maps.Point(0, 0),
//             //     anchor: new google.maps.Point(17, 34),
//             //     scaledSize: new google.maps.Size(25, 25)
//             // }
//             //
//             // // Create a marker for each place.
//             // markers.push(new google.maps.Marker({
//             //     map: map,
//             //     icon: icon,
//             //     title: place.name,
//             //     position: place.geometry.location
//             // }))
//
//             if (place.geometry.viewport) {
//                 // Only geocodes have viewport.
//                 bounds.union(place.geometry.viewport)
//             } else {
//                 bounds.extend(place.geometry.location)
//             }
//         })
//         map.fitBounds(bounds)
//     })
// }

// function AutoComplete() {
//
//     var defaultBounds = new google.maps.LatLngBounds(
//         new google.maps.LatLng(-33.8902, 151.1759),
//         new google.maps.LatLng(-33.8474, 151.2631))
//
//     var frominput = document.getElementById('from-input')
//     var toinput = document.getElementById('to-input')
//     var options = {
//         bounds: defaultBounds,
//         types: ['establishment']
//     }
//
//     autocomplete = new google.maps.places.Autocomplete(frominput, options)
// }