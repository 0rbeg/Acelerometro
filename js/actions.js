//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});
var fn = {
    ready: function(){
		document.addEventListener("deviceReady",fn.init,false);  
    },
    init: function () {
        $('#acelerometro .individual li').tap(fn.acTap);
        $('#brujula .individual li').tap(fn.brTap);
    },
    acTap: function(){
        if($(this).index() == 0)
            ac.init();
                else
                    ac.stop();
    },
    brTap: function(){
        if($(this).index() == 0)
            br.init();
                else
                    br.stop();
    }
};
$(fn.ready);