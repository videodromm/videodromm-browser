"use strict";
(function initSocket() { 
    var timer;
    window.socket = new ws('ws://' + window.location.hostname + ':8088');
    window.socket.on('frag', function(evt) {
        $('#code').val(evt.data);
        $('#code').trigger('change', [false]);
        var shaderText = evt.data;
        shaderText = shaderText.replace(/3 iR/gm, '2 u_r');
        shaderText = shaderText.replace(/iR/gm, 'u_r');
        shaderText = shaderText.replace(/iChannel/gm, 'u_tex');
        shaderText = shaderText.replace(/4 iMouse/gm, '2 u_mouse');
        shaderText = shaderText.replace(/iM/gm, 'u_m');
        shaderText = shaderText.replace(/iGlobalTime/gm, 'u_time');
        window.glslEditor.setContent(shaderText);
        return;
    });

    window.socket.sendCanvas = function(fps) {
        var cvn = document.getElementsByClassName('ge_canvas')[0];
        var shader64Str = cvn.toDataURL('image/jpeg');
        window.socket.emit('canvas', shader64Str);
        if (timer) clearInterval(timer);
        timer = setInterval(window.socket.sendCanvas, 1000 / fps, fps);
        return;
    }

    window.socket.stopSendCanvas = function() {
        if (timer) clearInterval(timer);
        return;
    }
})();