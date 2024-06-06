const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
