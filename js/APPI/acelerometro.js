var ac = {
    watchID: null,
    options: {frecuency:500},
    init: function(){
//        alert("Iniciar");
        if(!ac.watchID)
            ac.watchID = navigator.accelerometer.watchAcceleration(ac.success, ac.error, ac.options);
    },
    stop: function(){
        //alert("detener");
        if(ac.watchID != null){
			navigator.accelerometer.clearWatch(ac.watchID);
            ac.watchID = null;
            $('#acelerometro .scroll h2').html('Detenido');
        }
        
    },
    success: function(a){
		$('#acelerometro .scroll h2').html('X: ' + a.x +
										   'Y: ' + a.y +
										   'Z: ' + a.z);
	},
	error: function(err){
		alert(err.code);
	}
};