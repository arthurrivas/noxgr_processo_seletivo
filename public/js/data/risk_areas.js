

let riskAreasStyles = {

    strokeCollor : "black",
    fillColor: 'rgba(200, 0, 6, 0.8)'

}


// Instantiate a circle object (using the default style):
var riskAreaOne = new H.map.Circle({lat: -23.089533, lng: -46.949870 }, 100000,
    {style: riskAreasStyles});
riskAreaOne.setData('AREA DE RISCO UNILEVER LOUVEIRA 100KM, cidade: LOUVEIRA/SP')
riskAreaOne.addEventListener('tap', event =>{
    alert(event.target.getData())
})
var riskAreaTwo = new H.map.Circle({lat:-8.398104, lng: -35.061195 }, 100000,
    {style: riskAreasStyles});
riskAreaTwo.setData('AREA DE RISCO UNILEVER IPOJUCA 100KM ,cidade: IPOJUCA/PE')
riskAreaTwo.addEventListener('tap', event =>{
    alert(event.target.getData())
})




