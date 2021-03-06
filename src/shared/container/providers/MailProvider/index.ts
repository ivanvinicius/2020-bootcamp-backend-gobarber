import { container } from 'tsyringe';

import mailConfig from '@config/mail';

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';

const mailProvider = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  mailProvider[mailConfig.driver],
);
