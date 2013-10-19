youtube-remote-player
=====================

A client-server-client for controlling a youtube player from a mobile device.

Pre-requirements
---------------
1. Nodejs
2. Grunt-cli
3. Bower

Installation
------------
During development the client is run via grunt server and the server requests are proxied to the node server. 
This causes socket.io to work very slowly due to the XHR fallback.

  1. Clone the repo
  2. cd into the main directory
  3. npm install
  4. bower install
  5. node server.js

In a different console:
  1. cd into the main directory
  2. grunt server
  3. browse to http://localhost:9000
  
To deploy the client: 
  1. cd into the main directory
  2. grunt build --force  //the tests are failing since I didn't have time to implement them...
  3. browse to http://localhost:3000
