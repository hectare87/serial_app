"use strict";
exports.__esModule = true;
var serialport = require("serialport");
var Main = (function () {
    function Main() {
        console.log("hello! node.js × Typescript");
        var sp = new serialport.SerialPort();
        sp.list(function (ports, err) {
            ports.foreach(function (port) {
                console.log(port);
            });
        });
    }
    return Main;
}());
var main = new Main();
