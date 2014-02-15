var fs = require('fs');
var path = require('path');

module.exports = {

  save: function() {
    var dir = '~/.asimov-deploy';
    dir = path.resolve(process.env.HOME, dir.substr(2));

    if (!fs.existsSync(path)) {
      fs.mkdirSync(dir);
    }

    var file = path.join(dir, 'token');
    fs.writeFileSync(file, 'hello');
  }
};