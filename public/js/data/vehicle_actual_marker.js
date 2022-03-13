let vehicleIcon = new H.map.Icon('http://localhost:5000/imgs/car-icon.png',
                {size: {w:45,h: 45}})


let vehicleCordenates = { lat: -12.439900000, lng: -39.229400000};
let vehicleMarker = new H.map.Marker(vehicleCordenates,{icon: vehicleIcon});
vehicleMarker.setData("<h2>veiculo : carro</h2><p>placa :xxx 1212</p>");
vehicleMarker.addEventListener("tap", (event) => {
  let bubble = new H.ui.InfoBubble(event.target.getGeometry(), {
    content: event.target.getData(),
  });
  ui.addBubble(bubble);
});