'use strict';

const io = require('socket.io')();

class SocketioModule {

    constructor() {

        // Default port for the Socket.io server
        this.port = 8000;

    }

    create(broker, configuration) {
        this.broker = broker;
        this.configuration = configuration;

        // Update port if provided as a configuration argument
        if (this.configuration && this.configuration.port) {
            this.port = this.configuration.port;
        }

        // Attach socket.io to a port
        io.attach(this.port);
        console.log(`Started Socket.io server on port ${this.port}`);

        return true;
    }

    receive(message) {

        // Convert data into an object
        let data = JSON.parse(Buffer.from(message.content));

        // Emit a message via socket.io
        io.emit('message', data);

    }

    destroy() {

        // Close socket on destroy
        console.log(`socketio.destroy`);
        io.close();

    }

}

module.exports = new SocketioModule();