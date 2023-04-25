/* eslint-disable no-underscore-dangle */
const express = require('express');

const userRouter = express.Router();

const CreateUSer = require('../models/user.model');

userRouter.post('/new-user', async (req, res) => {
  const CreateNewUser = new CreateUSer(req.body);
  try {
    CreateNewUser.save();
    res.status(200).send(CreateNewUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.get('/new-user', async (req, res) => {
  try {
    const getUser = await CreateUSer.find({});
    res.status(200).send(getUser);
  } catch (error) {
    res.status(500).send({ error: "Can't find users" });
  }
});
userRouter.get('/new-user/:id', async (req, res) => {
  const getUerById = req.params.id;
  try {
    const user = await CreateUSer.findById(getUerById);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: 'User not found' });
  }
});
module.exports = userRouter;
