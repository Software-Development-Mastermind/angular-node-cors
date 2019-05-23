const express = require('express')
const app = express()
const port = 3000

app.get('/api/message', (request, response) => {
    response.send({ message: 'Hello world!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))