var mongoose = require('mongoose')

var db_url = 'mongodb://abdullah rehmani:rehmani2872240@.mlab.com:61255/res-users'
mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });
