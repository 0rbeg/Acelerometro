var br = {
	watchID: null,
	options: {frequency:500},
	init: function(){
		if(!br.watchID)
			br.watchID = navigator.compass.watchHeading(br.success, br.error, br.options);
	},
	stop: function(){
		if(br.watchID != null){
			navigator.compass.clearWatch(br.watchID);
			br.watchID = null;
			$('#brujula .scroll h2').html('Detenido');
		}
	},
	success: function(h){
		$('#brujula .scroll h2').html('Grados: ' + h.magneticHeading);
	},
	error: function(err){
		alert(err.code);
	}
};