const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3001;

app.use(cors());

io.on('connection', (socket) => {
  socket.on('join', (roomId) => {
    socket.join(roomId);
    
    socket.to(roomId).emit('userJoined', socket.id);

    socket.on('message', (message) => {
      io.to(roomId).emit('message', { user: socket.id, message });
    });

    socket.on('disconnect', () => {
      socket.to(roomId).emit('userLeft', socket.id);
    });
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
