let h2= document.querySelector('h2');

function success(watchPosition){
    h2.textContent = `Latitude: ${watchPosition.coords.latitude}, 
    Longitude:${watchPosition.coords.longitude}`
}

function error(error){
    console.log(error)
    h2.textContent = 'solicitação recusada'
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 10000,
});
//navigator.geolocation.clearWatch(watchID);