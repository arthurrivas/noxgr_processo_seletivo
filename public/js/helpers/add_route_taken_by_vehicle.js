

function addRouteTakenByVehicle(points){
    let linestring = new H.geo.LineString();
    points.forEach(function(point) {
        linestring.pushPoint(point);
    });

    // Initialize a polyline with the linestring:
    var polyline = new H.map.Polyline(linestring, { style: { lineWidth: 12 }});

    // Add the polyline to the map:
    map.addObject(polyline);

    // Zoom the map to fit the rectangle:
    map.getViewModel().setLookAtData({bounds: polyline.getBoundingBox()});
}