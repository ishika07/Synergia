const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const http = require('http');
const socketio = require('socket.io');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./ChatRoom/users');
const router = require('./ChatRoom/router');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());
app.use(cors());
app.use(router);

// --------------------------------------ChatRoom-----------------------------
// The constant io is listening for a connection from the client
io.on('connect', (socket) => {
// When that connection made is, it creates a special socket for that particular connection.
  socket.on('join', ({ name, room }, callback) => { 
/*socket.on listens for any connection from our client with the name "join"
then expects name and room as a parameter*/
    const { error, user } = addUser({ id: socket.id, name, room });
    if(error) return callback(error);
// The callback sends an error if any
    socket.join(user.room);
    //Joint the room
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    //New user entered the room
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    //Broadcast to everyone in the room
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });
    callback();
    /*After we get the message from the client,
     received message is emitted to everyone in the group.*/
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    // emit a disconnection message to every one in the returned user group
    }
  })
});
// ----------------------------------------------

const PORT = process.env.PORT || 5000;

app.use('/uploads', express.static('uploads'));

//Utilities
const uploadData = require('./routes/uploadData')
app.use('/api',uploadData);

//Student Routes
const studentRoute = require('./routes/student/studentUser.route')

app.use('/student', studentRoute)

//Faculty Routes
const facultyRoute = require('./routes/faculty/facultyUser.route')

app.use('/faculty', facultyRoute);

app.use('/forum',require('./routes/Forum/forum'))



app.listen(PORT, () => console.log(`The Server has started on port ${PORT}.`));
server.listen(8000, () => console.log(`Server has started.`));


// JWT_SECRET='6T\Ecj,-z@phUer4,M5?#<9_t46^#c'
mongoose
  .connect('mongodb+srv://Synergy:1231@cluster0.kqwzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('MongoDB started.');
  })
  .catch((err) => {
    console.log(err);
  });
