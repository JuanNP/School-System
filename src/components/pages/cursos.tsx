import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Heading,
    Text,
    SimpleGrid,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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

const CoursesPage: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

    useEffect(() => {
        const savedCourses = localStorage.getItem('enrolledCourses');
        if (savedCourses) {
            setEnrolledCourses(JSON.parse(savedCourses));
        }
    }, []);

    const handleViewDetails = (course: Course) => {
        setSelectedCourse(course);
        onOpen();
    };

    return (
        <Box maxW="5xl" mx="auto" p={4}>
            <Heading as="h1" size="xl" mb={6} textAlign="center">
                Mis Cursos Inscritos
            </Heading>
            {enrolledCourses.length > 0 ? (
                <SimpleGrid columns={[1, null, 3]} spacing={10} shadow="lg" borderWidth="1px" borderRadius='30px' p='10' mt='20'>
                    {enrolledCourses.map(course => (
                        <Box
                            key={course.id}
                            p={5}
                            shadow="md"
                            borderWidth="1px"
                            borderRadius="md"
                        >
                            <Heading fontSize="xl">{course.title}</Heading>
                            <Text mt={4}>{course.description}</Text>
                            <Box display='flex' justifyContent='space-evenly'>
                                <Button
                                    mt={4}
                                    colorScheme="blue"
                                    onClick={() => handleViewDetails(course)}
                                >
                                    Ver Detalles
                                </Button>
                                <Button
                                    mt={4}
                                    colorScheme="red"
                                    onClick={() => {
                                        const updatedEnrolledCourses = enrolledCourses.filter(enrolled => enrolled.id !== course.id);
                                        setEnrolledCourses(updatedEnrolledCourses);
                                        localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolledCourses));
                                    }}
                                >
                                    Eliminar
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            ) : (
                <Text textAlign="center">No estás inscrito en ningún curso.</Text>
            )}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedCourse?.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {selectedCourse?.calendar.map((session, index) => (
                            <Text key={index}>{`${session.day} a las ${session.time}`}</Text>
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default CoursesPage;