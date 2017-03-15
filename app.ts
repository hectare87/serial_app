import serialport = require('serialport');
class Main
{
    constructor()
    {
        console.log("hello! node.js × Typescript");
        var sp = new serialport.SerialPort();
        sp.list(function(ports, err){
            ports.foreach(function(port){
                console.log(port);
            });
        });
    }
}
var main:Main = new Main();