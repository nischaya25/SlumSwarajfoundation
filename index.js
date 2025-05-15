
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
import fs from 'fs';

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

// const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');


// app.use('/auth', authRoutes);
// app.use('/user', userRoutes);


app.get('/', (req, res) => {
  const stream = fs.createReadStream("./static.txt", "utf-8");
  stream.on("data", (chunk) => {
    res.write(chunk);
  });
  stream.on("end", () => {
    res.end();
    console.log("File reading completed.");
  });
});
// console.log("hebhbhiub");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});