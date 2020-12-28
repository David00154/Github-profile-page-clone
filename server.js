var liveServer = require("live-server");
 
var params = {
    port: process.env.PORT || 8181, // Set the server port. Defaults to 8080.
    root: "./dist", // Set root directory that's being server. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    wait: 1000 // Waits for all changes, before reloading. Defaults to 0 sec.
};
liveServer.start(params);
