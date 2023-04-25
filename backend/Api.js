const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRouter = require('./src/routes/user');

const api = express();

// moddlewares
api.use(express.json());
api.use(express.urlencoded({ extended: true }));
api.use(cors());

// db connection
require('./src/config/databse');

// routes
api.use('/', userRouter);
// listen
api.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT ${process.env.PORT}`);
});
