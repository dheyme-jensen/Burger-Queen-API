const express = require('express');
const app = express();
const db = require('./models/index');

app.use(express.json());

app.listen(4667, console.log('servidor rodando'));
app.use('/users', require('./routes/user'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));

db.sequelize.sync();
