import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import CreateUsersService from '../services/CreateUserService';

const usersRouter = Router();

/** This route gonna be deleted */
usersRouter.get('/', async (request, response) => {
  const userRepository = getRepository(User);

  const users = await userRepository.find();

  return response.json(users);
});

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUsersService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default usersRouter;
