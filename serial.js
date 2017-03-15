//node-pre-gyp install --fallback-to-build

var serialport = require('serialport');

// var portName = "COM3";

// var sp = new serialport.SerialPort(
//     portName, {
//         BaudRate: 115200
//     });

serialport.list((err, ports) => {
  ports.forEach((port) => {
      console.log(port);
  });
});