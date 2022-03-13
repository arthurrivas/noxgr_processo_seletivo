function calculateRouteFromAtoB(platform,originCordenate,destinyCordenate) {
    var router = platform.getRoutingService(null, 8),
        routeRequestParams = {
            routingMode: 'fast',
            transportMode: 'car',
            origin: `${originCordenate.lat},${originCordenate.lng}`, 
            destination: `${destinyCordenate.lat},${destinyCordenate.lng}`,
            return: 'polyline,turnByTurnActions,actions,instructions'
        };

    router.calculateRoute(
        routeRequestParams,
        onSuccess,
        onError
    );
}
