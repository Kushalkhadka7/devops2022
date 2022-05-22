const express = require('express');

const app = express();

app.use('/', (req, res, next) => res.json({ message: 'Hello wrold' }));

app.listen(5000, () => console.info(`Application running on port: 5000`));
