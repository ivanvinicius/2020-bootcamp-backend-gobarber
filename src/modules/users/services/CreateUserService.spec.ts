import AppError from '@shared/errors/AppError';
import FakeHahsProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHahsProvider();

    const createUsers = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const users = await createUsers.execute({
      name: 'John Doe',
      email: 'john@client.com',
      password: '123123',
    });

    expect(users).toHaveProperty('id');
  });

  it('should not be able to create a new user with the same email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHahsProvider();

    const createUsers = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    await createUsers.execute({
      name: 'John Doe',
      email: 'john@client.com',
      password: '123123',
    });

    await expect(
      createUsers.execute({
        name: 'John Doe',
        email: 'john@client.com',
        password: '123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
