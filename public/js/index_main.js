//Initialize the Platform object:
const platform = new H.service.Platform({
  apikey: "ZyS_v2aBrTs0WmdBI3kf7XfIKAyExCIuwFAdmuL9wLc",
});

// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
const map = new H.Map(
  document.getElementById("mapContainer"),
  defaultLayers.vector.normal.map,
  {
    zoom: 20,
    center: { lng: -46.94987, lat: -23.089533 },
  }
);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, defaultLayers);

//add gas stations markers
gasStations.forEach(function(element){
  addGasStationOnMap(element)
})


// add cities markers
map.addObject(starterMarker);
map.addObject(midleMarker);
map.addObject(finalMarker);

// Now use the map as required...
calculateRouteFromAtoB(platform, starterCordenates, midleCordenates);
calculateRouteFromAtoB(platform, midleCordenates, finalCordenates);

// Add risk areas:
map.addObject(riskAreaOne);
map.addObject(riskAreaTwo);

// add safety areas
map.addObject(safetyArea)

// add actual vehicle cordenates
map.addObject(vehicleMarker)

addRouteTakenByVehicle(points);



