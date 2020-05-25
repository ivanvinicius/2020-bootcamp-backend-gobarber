import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

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

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUsersService;
