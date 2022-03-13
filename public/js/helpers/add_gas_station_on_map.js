

function addGasStationOnMap(gasStationInfos) {

  let gasStationIcon = new H.map.Icon('http://localhost:5000/imgs/gas_station_icon.png',
                              {size: {w: 30, h: 30}});

  let gasStationMarker = new H.map.Marker({
    lat: gasStationInfos.lat,
    lng: gasStationInfos.lng,
  }, {icon : gasStationIcon});
  gasStationMarker.setData(`<h4>${gasStationInfos.posto}</h4>
                        <p>${gasStationInfos.cidade}, ${gasStationInfos.endereco}</p>
                        <p>${gasStationInfos.fone}</p>`);

  gasStationMarker.addEventListener("tap", (event) => {
    let bubble = new H.ui.InfoBubble(event.target.getGeometry(), {
      content: event.target.getData(),
    });
    ui.addBubble(bubble);
  });
  map.addObject(gasStationMarker)
}
