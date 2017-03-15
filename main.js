"use strict"

const {electron, app, BrowserWindow} = require("electron");

let mainWindow = null;

app.on("ready", function(){
    mainWindow = new BrowserWindow(
        {
            x: 500, y: 500, width: 600, height: 600
        }
    );
    mainWindow.loadURL("file://" + __dirname + "/app/index.html");
});

app.on("window-all-closed", function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }
})