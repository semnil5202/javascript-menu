const Controller = require('./controller/Controller');
const Service = require('./service/Service');
const Validation = require('./utils/Validation');

class App {
  play() {
    new Controller(new Service(), new Validation()).startService();
  }
}

module.exports = App;
