import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Heading,
    Text,
    useToast,
    SimpleGrid,
} from '@chakra-ui/react';

interface Course {
    id: number;
    title: string;
    description: string;
    calendar: {
        day: string; // 'Monday', 'Tuesday', etc.
        time: string; // '08:00', '10:00', etc.
    }[];
}

const EnrollmentsPage: React.FC = () => {
    const toast = useToast();
    const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

    useEffect(() => {
        const savedCourses = localStorage.getItem('enrolledCourses');
        if (savedCourses) {
            setEnrolledCourses(JSON.parse(savedCourses));
        }
    }, []);

    // Lista de cursos de prueba con horarios detallados
    const courses: Course[] = [
        { id: 1, title: 'Curso de Matemáticas', description: 'Aprende los fundamentos de las matemáticas.', calendar: [{ day: 'Lunes', time: '08:00' }, { day: 'Miércoles', time: '08:00' }] },
        { id: 2, title: 'Curso de Historia', description: 'Explora la historia del mundo desde la antigüedad hasta la era moderna.', calendar: [{ day: 'Martes', time: '10:00' }, { day: 'Jueves', time: '10:00' }] },
        { id: 3, title: 'Curso de Programación', description: 'Introducción a la programación con JavaScript.', calendar: [{ day: 'Viernes', time: '14:00' }] },
        { id: 4, title: 'Curso de Biología', description: 'Entiende los principios básicos de la biología.', calendar: [{ day: 'Sábado', time: '09:00' }] },
        { id: 5, title: 'Curso de Física', description: 'Descubre las leyes fundamentales de la física.', calendar: [{ day: 'Domingo', time: '15:00' }] },
        { id: 6, title: 'Curso de Química', description: 'Aprende sobre reacciones químicas y más.', calendar: [{ day: 'Lunes', time: '18:00' }, { day: 'Miércoles', time: '18:00' }] },
        { id: 7, title: 'Curso de Literatura', description: 'Explora la literatura clásica y contemporánea.', calendar: [{ day: 'Martes', time: '14:00' }, { day: 'Jueves', time: '14:00' }] },
        { id: 8, title: 'Curso de Arte', description: 'Descubre el mundo del arte y sus movimientos.', calendar: [{ day: 'Viernes', time: '10:00' }] },
        { id: 9, title: 'Curso de Música', description: 'Introducción a la teoría musical y la historia de la música.', calendar: [{ day: 'Sábado', time: '16:00' }] },
        { id: 10, title: 'Curso de Idiomas', description: 'Aprende un nuevo idioma: inglés, francés, alemán, etc.', calendar: [{ day: 'Domingo', time: '10:00' }] },
      ];      

    const handleEnroll = (course: Course) => {
        const updatedEnrolledCourses = [...enrolledCourses, course];
        setEnrolledCourses(updatedEnrolledCourses);
        localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolledCourses));
        toast({
            title: 'Inscripción exitosa.',
            description: `Te has inscrito en el curso de ${course.title}.`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box maxW="5xl" mx="auto" p={4}>
            <Heading as="h1" size="xl" mb={6} textAlign="center">
                Inscripciones
            </Heading>
            <SimpleGrid columns={[1, null, 3]} spacing={10} shadow="lg" borderWidth="1px" borderRadius='30px' p='10' mt='20'>
                {courses.map(course => (
                    <Box key={course.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                        <Heading fontSize="xl">{course.title}</Heading>
                        <Text mt={4}>{course.description}</Text>
                        <Text fontSize="sm" color="gray.500">Horario:</Text>
                        {course.calendar.map((session, index) => (
                            <Text key={index}>{`${session.day} a las ${session.time}`}</Text>
                        ))}
                        <Button
                            mt={4}
                            colorScheme="blue"
                            onClick={() => handleEnroll(course)}
                            isDisabled={enrolledCourses.some(enrolled => enrolled.id === course.id)}
                        >
                            {enrolledCourses.some(enrolled => enrolled.id === course.id) ? 'Inscrito' : 'Inscribirse'}
                        </Button>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default EnrollmentsPage;
