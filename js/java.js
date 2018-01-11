
 $(function() {
  console.log("map fired");
  var myCenter = new google.maps.LatLng(53.654206,-1.768466);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
})
