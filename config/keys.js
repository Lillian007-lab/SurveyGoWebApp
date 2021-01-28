// keys.js - figure out what ser of credentials to return

if (process.env.NODE_ENV === 'production'){
    // if app is running on Heroku, it will be automatically 'production'
    // we are in production - return the prod set of keys
    module.exports = require('./prod');

} else {
    // app running locally
    // we are in development - return the dev keys
    module.exports = require('./dev');
}