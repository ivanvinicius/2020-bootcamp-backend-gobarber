import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import DiskStorageProvider from './implementations/DiskStorageProvider';

const storage = {
  disk: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>('StorageProvider', storage.disk);
