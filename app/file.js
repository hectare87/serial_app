const {BrowserWindow, dialog} = require("electron").remote;

let subWindow = null;

function openWindow(){
    subWindow = new BrowserWindow(
        {
            x:500, y:500, width:300, height:300
        }
    );
    subWindow.loadURL("file://" + __dirname + "/app/index.html");

    subWindow.on("closed", function(){
        subWindow = null;
    });
}

function load(){
    var serialport = require('serialport');

    serialport.list((err, ports) => {
        ports.forEach((port) => {
            console.log(port);
        });
    });
}