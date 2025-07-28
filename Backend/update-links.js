const mongoose = require('mongoose');
const Project = require('./models/Project');
require('dotenv').config();

async function updateProjectLinks() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('Connected to MongoDB');

    // Update Portfolio Website link
    const portfolioUpdate = await Project.findOneAndUpdate(
      { title: 'Portfolio Website' },
      { link: 'https://github.com/Fahad220997/my-portfolio' },
      { new: true }
    );

    // Update Authentication Service link
    const authUpdate = await Project.findOneAndUpdate(
      { title: 'Authentication Service' },
      { link: 'https://github.com/Fahad220997/Authentication-service' },
      { new: true }
    );

    console.log('Portfolio Website updated:', portfolioUpdate);
    console.log('Authentication Service updated:', authUpdate);

    console.log('All project links updated successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error updating project links:', error);
    process.exit(1);
  }
}

updateProjectLinks(); 