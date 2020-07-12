// import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();

    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'p1',
      date: new Date(2020, 3, 12, 16, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'p1',
      date: new Date(2020, 6, 12, 16, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'p1',
      date: new Date(2020, 6, 13, 12, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'p1',
      date: new Date(2020, 6, 13, 15, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'p1',
      month: 7,
      year: 2020,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 11, availability: true },
        { day: 12, availability: false },
        { day: 13, availability: false },
        { day: 14, availability: true },
      ]),
    );
  });
});
