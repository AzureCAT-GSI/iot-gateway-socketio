# iot-gateway-socketio

This module extends the [Azure IoT Gateway](https://github.com/Azure/azure-iot-gateway-sdk) by receiving gateway messages and publishing to a websocket via [Socket.io](https://socket.io/)

# Installation
To download this module, first install [NodeJS LTS](https://nodejs.org/en/download/) and from the command line run:

```
npm install iot-gateway-socketio --save
```

# Usage
Add the following module to the modules section of your gateway JSON configuration file:

```json
{
    "modules": [
        {
            "name": "node_socketio",
            "loader": {
                "name": "node",
                "entrypoint": {
                    "main.path": "./node_modules/iot-gateway-socketio/socketio.js"
                }
            },
            "args": null
        },
        ...
```

And in the **links** section, add the name value from earlier, `node_socketio`, as a sink:

```json
"links": [
        {
            "source": "node_sensor",
            "sink": "node_socketio"
        }
    ]
```

# Sample
A sample is provided in the **/sample** directory, complete with a web based user interface showcasing live sample data.

# To Do
* Add ability to receive messages from a client over a websocket and publish to a gateway pipeline.