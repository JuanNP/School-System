import React, { useState, useEffect } from 'react';
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react';
import '../../App.css';

interface Course {
    id: number;
    title: string;
    description: string;
    details: string;
}

interface Grade {
    courseId: number;
    grade: string;
}

const GradesPage: React.FC = () => {
    const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
    const [grades, setGrades] = useState<Grade[]>([]);

    useEffect(() => {
        const savedCourses = localStorage.getItem('enrolledCourses');
        if (savedCourses) {
            setEnrolledCourses(JSON.parse(savedCourses));
            // Generar calificaciones de prueba
            const courses = JSON.parse(savedCourses) as Course[];
            const generatedGrades = courses.map(course => ({
                courseId: course.id,
                grade: Math.floor(Math.random() * 31 + 70).toString(),
            }));
            setGrades(generatedGrades);
        }
    }, []);

    return (
        <Box mx="auto" p={4}>
            <Heading as="h1" size="xl" mb={6} textAlign="center">
                Mis Calificaciones
            </Heading>
            <Box w='60vw' mt='20' shadow="lg" borderWidth="1px" borderRadius='30px' p='5'>
                <Table variant="simple">
                    <TableCaption>Calificaciones de los cursos en los que estás inscrito</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Curso</Th>
                            <Th>Descripción</Th>
                            <Th isNumeric>Calificación</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {enrolledCourses.map(course => {
                            const grade = grades.find(g => g.courseId === course.id)?.grade || 'N/A';
                            return (
                                <Tr key={course.id}>
                                    <Td>{course.title}</Td>
                                    <Td>{course.description}</Td>
                                    <Td isNumeric>{grade}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default GradesPage;
