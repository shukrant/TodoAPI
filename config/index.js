var configValues = require('./config');

module.exports = {

    getDbConnectionString: function (){
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
         '@ds163721.mlab.com:63721/nodetodosample'; 
    }
}