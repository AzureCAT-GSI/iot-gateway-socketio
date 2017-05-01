'use strict';

const io = require('socket.io')();

class SocketioModule {

    constructor() {
        this.port = 8000;
    }

    create(broker, configuration) {
        this.broker = broker;
        this.configuration = configuration;

        // Update port if provided as a configuration argument
        if (this.configuration.port) {
            this.port = this.configuration.port;
        }

        console.log(this.port);

        // Attach socket.io to a port
        io.attach(this.port);

        return true;
    }

    receive(message) {

        // Emit a message via socket.io
        io.emit('message', message);

    }

    destroy() {
        console.log(`socketio.destroy`);
        io.close();
    }

}

module.exports = new SocketioModule();