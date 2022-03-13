function addVehicleRoute(points){

    let linestring = new H.geo.LineString();
    points.forEach(function(point) {
        linestring.pushPoint(point);
    });

    let customStyle = {
        lineWidth: 4, 
        strokeColor: 'rgba(9,92,18,1)'
    }

    // Initialize a polyline with the linestring:
    var polyline = new H.map.Polyline(linestring, { style: customStyle});

    // Add the polyline to the map:
    map.addObject(polyline);

    // Zoom the map to fit the rectangle:
    map.getViewModel().setLookAtData({bounds: polyline.getBoundingBox()});
} 

