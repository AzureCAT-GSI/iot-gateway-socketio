const Gateway = require('azure-iot-gateway');
const config_path = './gateway.json';

// Instantiate gateway
const gw = new Gateway(config_path);

// Run gateway
gw.run();
