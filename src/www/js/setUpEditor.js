"use strict";
(function setUpEditor() {
    window.glslEditor = new GlslEditor('#glsl_editor', {
        canvas_width: 320,
        canvas_height: 240,
        canvas_draggable: true,
        canvas_resizable: true,
        theme: 'monokai',
        multipleBuffers: true,
        watchHash: true,
        fileDrops: true,
        imgs: ['img/videodromm-logo.png', 'img/anim131.jpg'],
        menu: true
    });

    $('.CodeMirror').on('change keyup paste', function(evt, resend) {
        resend = resend === undefined ? true : false;
        if (resend && window.socket) {
            var shaderText = window.glslEditor.getSuccessfullyCompilingContent();
            if (shaderText.length > 0) {
                console.log('frag is valid, sending');
                window.socket.emit('frag', shaderText);
            } else {
                clearInterval(timer);
                console.log('frag is not valid, not sending');
            }
        }
    });

    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( /* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    document.body.style.backgroundColor = window.getComputedStyle(glslEditor.editor.getWrapperElement(), null).getPropertyValue('background-color');
})();