import { getRepository } from 'typeorm';

import User from '../models/User';

interface ExecuteDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUsersService {
  public async execute({ name, email, password }: ExecuteDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUsersExist = await usersRepository.findOne({
      where: { email },
    });

    if (checkUsersExist) {
      throw new Error('Email adress already used.');
    }

    const user = usersRepository.create({
      name,
      email,
      password,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUsersService;
