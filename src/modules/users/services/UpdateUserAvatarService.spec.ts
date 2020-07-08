import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

describe('UpdateUserAvatar', () => {
  it('should be able to update an user avatar', async () => {
    const fakeStorageProvider = new FakeStorageProvider();
    const fakeUsersRepository = new FakeUsersRepository();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    const user = await fakeUsersRepository.create({
      name: 'as',
      email: 'as@a.com',
      password: '123123',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFileName: 'a.jpg',
    });

    expect(user.avatar).toBe('a.jpg');
  });

  it('should not be able to update avatar from a non-existent user ', async () => {
    const fakeStorageProvider = new FakeStorageProvider();
    const fakeUsersRepository = new FakeUsersRepository();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    await expect(
      updateUserAvatar.execute({
        user_id: 'non-existent user',
        avatarFileName: 'a.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to delete an old avatar from a user when this one is updating ', async () => {
    const fakeStorageProvider = new FakeStorageProvider();
    const fakeUsersRepository = new FakeUsersRepository();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );

    const user = await fakeUsersRepository.create({
      name: 'as',
      email: 'as@a.com',
      password: '123123',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFileName: 'a.jpg',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFileName: 'a2.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('a.jpg');
    expect(user.avatar).toBe('a2.jpg');
  });
});
