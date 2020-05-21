import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';

interface ExecuteDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute({ provider, date }: ExecuteDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentRepository.findByDate({
      date: appointmentDate,
    });

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked.');
    }

    const appointment = this.appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
