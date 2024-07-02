let h2= document.querySelector('h2');

var map;

function success(pos){
    h2.textContent = `Latitude: ${pos.coords.latitude
    }, 
    Longitude:${pos.coords.longitude}`
     if(map === undefined){
            map = L.map('mapid').setView([
            pos.coords.latitude,
            pos.coords.longitude]
            , 12);
     } else {
        map.remove();
            map = L.map('mapid').setView([
            pos.coords.latitude,
            pos.coords.longitude]
           , 12);
     }


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([
        pos.coords.latitude,
        pos.coords.longitude
    ]).addTo(map)
    .bindPopup('EU ESTOU AQUI!')
    .openPopup();
}

function error(error){
    console.log(error)
    h2.textContent = 'solicitação recusada'
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000,
});


//navigator.geolocation.clearWatch(watchID);

