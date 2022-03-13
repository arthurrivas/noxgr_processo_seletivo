function onSuccess(result) {
  var route = result.routes[0];

  addRouteShapeToMap(route);
}

function onError(error) {
  alert("Can't reach the remote server");
}
