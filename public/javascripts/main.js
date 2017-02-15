// function startMap() {
//
//   var ironhackBCN = {
//   	lat: 41.3977381,
//   	lng: 2.190471916
//   };
//   var map = new google.maps.Map(
//     document.getElementById('map'),
//     {
//       zoom: 15,
//       center: ironhackBCN
//     }
//   );
//   var myMarker = new google.maps.Marker({
//     position: {
//     	lat: 41.3977381,
//     	lng: 2.190471916
//     },
//     map: map,
//     title: "I'm here"
//   });
//
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       const user_location = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };
//
//       // Center map with user location
//       map.setCenter(user_location);
//
//       // Add a marker for your user location
//       var IronHackBCNMarker = new google.maps.Marker({
//         position: {
//           lat: user_location.lat,
//           lng: user_location.lng
//         },
//         map: map,
//         title: "You are here"
//       });
//
//     }, function () {
//       console.log('Error in the geolocation service.');
//     });
//   } else {
//     console.log('Browser does not support geolocation.');
//   }
// }
//
// startMap();

$(document).ready(function(){
      // Create and Initialize Map

      var ironhackBCN = {
        lat: 41,
        lng: 1.2
      };

      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: ironhackBCN
      });

      // Add restaurant markers to map
      let markers = [];
      myPlaces.forEach(function(place){
        let title = place.name
        let position = {
          lat: place.location.coordinates[1],
          lng: place.location.coordinates[0]
        };
        var pin = new google.maps.Marker({ position, map, title  });
        if (place.type === "COFFEE") { pin.setIcon('http://maps.google.com/mapfiles/ms/micons/coffeehouse.png') }
        if (place.type === "BOOKS") { pin.setIcon('http://maps.google.com/mapfiles/kml/pal2/icon14.png') }
        markers.push(pin)
      });
      console.log(markers)


});
