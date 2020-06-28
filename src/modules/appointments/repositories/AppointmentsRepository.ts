import { EntityRepository, Repository } from 'typeorm';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

interface FindaDateDTO {
  date: Date;
}
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate({ date }: FindaDateDTO): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
