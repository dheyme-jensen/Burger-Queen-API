const express = require('express');
const app = express();
const db = require('./models/index');

app.listen(4667, console.log('servidor rodando'));
app.use('/users', require('./routes/user'));

db.sequelize.sync();
