"use strict";
(function addCustomButtons() {
    $(document).ready(function() {
        var fps = 60;
        $('ul.ge_menu_bar').append('<li class="ge_menu"><div id="fps_slider" class="slider-handle min-slider-handle round" role="slider" aria-valuemin="0" aria-valuemax="20" aria-valuenow="3" tabindex="0" style="left: 15%;"></div></li>');
        $('ul.ge_menu_bar').append('<li class="ge_menu"><button id="btn_stream" class="ge_menu_button">☉ Stop</button></li>');
        $('#fps_slider').slider({
                tooltip: 'show',
                tooltip_split: false,
                min: 1,
                max: 60,
                value: 60
            })
            .on('slide', function(evt) {
                window.socket.stopSendCanvas();
            })
            .on('slideStop', function(evt) {
                fps = evt.value || fps;
                window.socket.sendCanvas(fps);
            });
        $('#btn_stream').click(function(evt) {
            window.socket.stopSendCanvas();
            return;
        });
    });
})();