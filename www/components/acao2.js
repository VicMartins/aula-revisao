// This is a JavaScript file

$(document).on('click',"#mapa",function(){

  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = '';
    states[Connection.ETHERNET] = '';
    states[Connection.WIFI]     = '';
    states[Connection.CELL_2G]  = '';
    states[Connection.CELL_3G]  = '';
    states[Connection.CELL_4G]  = '';
    states[Connection.CELL]     = '';
    states[Connection.NONE]     = '';

    if(networkState!= Connection.NONE){
       navigator.notification.beep(1);
        $('#mapa').hide();
         var onSuccess = function(position) {
           L.mapquest.key = 'rLz8NY4BGFAW9szVgCrLvMoMzQuArS0P';

      // 'map' refers to a <div> element with the ID map
      L.mapquest.map('map', {
        center: [position.coords.latitude , position.coords.longitude],
        layers: L.mapquest.tileLayer('map'),
        zoom: 17
      });
       };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    else{
      alert("Você não está conectado a internet");
      navigator.notification.beep(3);
      navigator.vibrate(6000);
    }
}

checkConnection();

});