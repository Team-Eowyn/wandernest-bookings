const express = require('express');
const app = express();
const port = 3002;

app.get('/api/bookings')

app.listen(port, () => console.log(`listening on port ${port}`));