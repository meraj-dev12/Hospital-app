const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const port = 4000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:5173", "http://localhost:5175"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  }
});

let patients = [];
let currentQueueNumber = 0;

// Use cors middleware
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5175'] }));
app.use(express.json());

app.post('/api/patients', (req, res) => {
  const { name, queueNumber } = req.body;
  patients.push({ name, queueNumber });
  io.emit('updateQueue', patients);
  res.status(201).send();
});

app.get('/api/patients', (req, res) => {
  res.json(patients);
});

app.post('/api/currentQueue', (req, res) => {
  currentQueueNumber = req.body.queueNumber;
  const currentPatient = patients.find(p => p.queueNumber === currentQueueNumber) || {};
  io.emit('updateCurrentQueue', { queueNumber: currentQueueNumber, name: currentPatient.name || 'No Patient' });
  res.status(200).send();
});

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.emit('updateQueue', patients);
  const currentPatient = patients.find(p => p.queueNumber === currentQueueNumber) || {};
  socket.emit('updateCurrentQueue', { queueNumber: currentQueueNumber, name: currentPatient.name || 'No Patient' });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => console.log(`Server running on port ${port}`));
