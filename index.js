
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
import controller from './controller.js';

const app = express();


app.use(express.json());



mongoose.connect(process.env.DATA_BASE, {

  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log(' Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error(' MongoDB connection error:', error);
  });

app.use('/api', controller);


app.get('/', (req, res) => {
  res.send('Server is running!');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});