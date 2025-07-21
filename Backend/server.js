const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routes
const projectsRouter = require('./routes/projects');
const contactRouter = require('./routes/contact');
app.use('/api/projects', projectsRouter);
app.use('/api/contact', contactRouter);

app.get('/', (req, res) => {
  res.send('Backend API is running');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  }); 