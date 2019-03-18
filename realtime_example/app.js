const express = require('express')
const app = express()


//middlewares
app.use(express.static('public'))


//Listen on port 3000
server = app.listen(3000);

const blogComments = [ {
	                "blog": "My blog",
	                "day": "Day 1",
	                "value": 3,
	                "userColor": "#ffd600"
	            }, {
	                "blog": "My blog",
	                "day": "Day 2",
	                "value": 7,
	                "userColor": "#ffd600"
	            }, {
	                "blog": "My blog",
	                "day": "Day 3",
	                "value": 12,
	                "userColor": "#ffd600"
	            }, {
	                "blog": "My blog",
	                "day": "Day 4",
	                "value": 15,
	                "userColor": "#ffd600"
	            }, {
	                "blog": "My blog",
	                "day": "Day 5",
	                "value": 6,
	                "userColor": "#ffd600"
	            } ];


function swap(arr){
 return  [arr[0], arr[1], arr[2], arr[3], arr[4] ] = [arr[4], arr[3], arr[2], arr[1], arr[0]];
}


const io = require("socket.io")(server)


io.on('connection', function (socket) {

         setInterval(function() {
          var data = swap(blogComments)
           //send data to the client
           socket.broadcast.emit('updateChart', data);
         	
	     }, 4000);	
});



