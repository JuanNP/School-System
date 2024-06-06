import React, { useState, useEffect } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { es } from 'date-fns/locale';
import { format, parse, startOfWeek, getDay } from 'date-fns';

dayjs.extend(localizedFormat);
dayjs.locale('es');

const locales = {
  es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface Course {
  id: number;
  title: string;
  description: string;
  calendar: {
    day: string; // 'Lunes', 'Martes', etc.
    time: string; // '08:00', '10:00', etc.
  }[];
}

const dayMap: { [key: string]: number } = {
  'Domingo': 0,
  'Lunes': 1,
  'Martes': 2,
  'Miércoles': 3,
  'Jueves': 4,
  'Viernes': 5,
  'Sábado': 6,
};

const CalendarPage: React.FC = () => {
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

  useEffect(() => {
    const savedCourses = localStorage.getItem('enrolledCourses');
    if (savedCourses) {
      setEnrolledCourses(JSON.parse(savedCourses));
    }
  }, []);

  const events = enrolledCourses.flatMap(course =>
    course.calendar.map(schedule => {
      const [hour, minute] = schedule.time.split(':').map(Number);
      const dayNumber = dayMap[schedule.day];
      const startDate = dayjs().day(dayNumber).hour(hour).minute(minute);
      const endDate = startDate.add(50, 'minute'); // Clases de 50 minutos
      return {
        title: course.title,
        start: startDate.toDate(),
        end: endDate.toDate(),
      };
    })
  );

  const messages = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'No hay eventos en este rango',
    showMore: (total: any) => `+ Ver más (${total})`,
    dayHeaderFormat: (date: string | number | Date | dayjs.Dayjs | null | undefined) => dayjs(date).format('dddd'),
    dayRangeHeaderFormat: ({ start, end }: { start: string, end: string }) =>
      `${dayjs(start).format('DD MMM')} - ${dayjs(end).format('DD MMM')}`,
    timeGutterFormat: (date: string | number | Date | dayjs.Dayjs | null | undefined) => dayjs(date).format('HH:mm'),
    monthHeaderFormat: (date: string | number | Date | dayjs.Dayjs | null | undefined) => dayjs(date).format('MMMM YYYY'),
    dayFormat: (date: string | number | Date | dayjs.Dayjs | null | undefined) => dayjs(date).format('DD'),
    weekdayFormat: (date: string | number | Date | dayjs.Dayjs | null | undefined) => dayjs(date).format('ddd'), // Abreviaturas en español
    dayRangeFormat: ({ start, end }: { start: string, end: string }) =>
      `${dayjs(start).format('DD MMM')} - ${dayjs(end).format('DD MMM')}`,
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Calendario de Clases
      </Heading>
      <Box w='60vw' mt='20' shadow="lg" borderWidth="1px" borderRadius='30px' p='5'>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={messages}
          style={{ height: 500 }}
        />
      </Box>
    </Box>
  );
};

export default CalendarPage;