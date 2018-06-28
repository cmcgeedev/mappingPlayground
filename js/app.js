// XMLHttpRequest wrapper using callbacks
var request = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNtMTIzIiwiYSI6ImNqaXoxd204bzAyaDMzcG1tb2RiYjdscnQifQ.6pE7d-kLEjSdr5g-5a0PjA';
    let map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/satellite-v9', //hosted style id
        center: [-91.874, 42.760], // starting position
        zoom: 12 // starting zoom
    });

    let draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
            polygon: true,
            trash: true
        }
    });

    map.addControl(draw);

    map.on('draw.create', updateArea);
    map.on('draw.delete', updateArea);
    map.on('draw.update', updateArea);

    var updateArea = (e) => {
        let data = draw.getAll();
        let answer = document.getElementById('calculated-area');
        if(data.features.length > 0){
            let area = turf.area(data);
            let rounded_area = Math.round(area*100)/100;
            answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p> <p>square meters</p>';
        }else{
            answer.innerHTML = '';
            if(e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
        }
    }
}

request();