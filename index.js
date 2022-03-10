import { readFileSync } from 'fs'

const { config } = JSON.parse(readFileSync('../Postos.json'))

console.log(config)

/*

//Initialize the Platform object:
var platform = new H.service.Platform({
    'apikey': '{YOUR_API_KEY}'
});

// Get the default map types from the Platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate the map:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 10,
        center: { lng: 13.4, lat: 52.51 }
    });

// Create the default UI:
var ui = H.ui.UI.createDefault(map, defaultLayers);

var mapSettings = ui.getControl('mapsettings');
var zoom = ui.getControl('zoom');
var scalebar = ui.getControl('scalebar');



mapSettings.setAlignment('top-left');
zoom.setAlignment('top-left');
scalebar.setAlignment('top-left');
*/
