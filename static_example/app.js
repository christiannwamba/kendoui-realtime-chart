const express = require('express')
const app = express()


//middlewares
app.use(express.static('public'))


//Listen on port 3000
server = app.listen(3000);



