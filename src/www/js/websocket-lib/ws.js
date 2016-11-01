'use strict'
var websocket = function(uri) {
    ws = new WebSocket(uri);
    ws.onmessage = function(evt) {
        var messageData = JSON.parse(evt.data);
        var customEvt = new CustomEvent(messageData.event);
        customEvt.data = messageData.message;
        ws.dispatchEvent(customEvt);
    };
    this.emit = function(evt, data) {
        ws.send(JSON.stringify({event:evt, message: data}));
    };
    this.on = function(evt, func) {
        ws.addEventListener(evt, func);
    };
    ws.onerror = function(e) {console.log('error: ' + e)};
    ws.onopen = function(evt) {console.log('Socket opened')};
    ws.onclose = function(evt) {console.log('Socket closed')};
};
window.ws = websocket;
// TODO: Refactor using namespaces / Self-executing functions
