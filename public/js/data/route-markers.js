
let startIcon = new H.map.Icon('http://localhost:5000/imgs/green-flag-icon.png',
                {size: {w:45,h: 45}})
// Route Cities
let starterCordenates = { lat: -8.3678162, lng: -35.0315702 };
let starterMarker = new H.map.Marker(starterCordenates,{icon: startIcon});
starterMarker.setData("<h2>Ipojuca–PE</h2>");
starterMarker.addEventListener("tap", (event) => {
  let bubble = new H.ui.InfoBubble(event.target.getGeometry(), {
    content: event.target.getData(),
  });
  ui.addBubble(bubble);
});
let midleIcon = new H.map.Icon('http://localhost:5000/imgs/yellow-flag-icon.png',
                {size: {w:40,h: 40}})
let midleCordenates = { lat: -16.723477129827657, lng: -43.85451872859102 };
let midleMarker = new H.map.Marker(midleCordenates,{icon : midleIcon});
midleMarker.setData("<h2>Monte Carlos-MG</h2>");
midleMarker.addEventListener("tap", (event) => {
  let bubble = new H.ui.InfoBubble(event.target.getGeometry(), {
    content: event.target.getData(),
  });
  ui.addBubble(bubble);
});
let finalIcon = new H.map.Icon('http://localhost:5000/imgs/red-flag-icon.png',
                {size: {w:45,h: 45}})
let finalCordenates = { lat: -23.1019916, lng: -46.9665265 };
let finalMarker = new H.map.Marker(finalCordenates,{icon: finalIcon});
finalMarker.setData("<h2>Louveira–SP</h2>");
finalMarker.addEventListener("tap", (event) => {
  let bubble = new H.ui.InfoBubble(event.target.getGeometry(), {
    content: event.target.getData(),
  });
  ui.addBubble(bubble);
});
