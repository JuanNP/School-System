import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Avatar,
    Center,
    Heading,
    useToast,
    HStack,
} from '@chakra-ui/react';

const ProfilePage: React.FC = () => {
    const toast = useToast();

    // State for form fields with default test values
    const [name, setName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [matricula, setMatricula] = useState('123456');
    const [email, setEmail] = useState('john.doe@example.com');
    const [birthdate, setBirthdate] = useState('2000-01-01');
    const [password, setPassword] = useState('password123');
    const [level, setLevel] = useState('Primaria');
    const [address, setAddress] = useState('Calle 123, Ciudad, País');

    // State to handle edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Construct the avatar URL using the name and last name
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}+${encodeURIComponent(lastName)}&background=random`;

    const handleSave = () => {
        // Aquí se podría manejar la lógica de guardar los cambios del perfil
        setIsEditing(false);
        toast({
            title: "Perfil actualizado.",
            description: "Tus cambios han sido guardados.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box w='40rem' p='10' shadow="lg" borderWidth="1px" borderRadius='30px' mt='20'>
            <Stack spacing={4}>
                <Center>
                    <Avatar size="xl" name={`${name} ${lastName}`} src={avatarUrl} />
                </Center>
                <Heading as="h1" textAlign="center" size="lg">
                    Mi Perfil
                </Heading>
                <FormControl id="name" isDisabled={!isEditing}>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        type="text"
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="lastName" isDisabled={!isEditing}>
                    <FormLabel>Apellido</FormLabel>
                    <Input
                        type="text"
                        placeholder="Tu apellido"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="matricula" isDisabled={!isEditing}>
                    <FormLabel>Matrícula</FormLabel>
                    <Input
                        type="text"
                        placeholder="Tu matrícula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                </FormControl>
                <FormControl id="email" isDisabled={!isEditing}>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <Input
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl id="birthdate" isDisabled={!isEditing}>
                    <FormLabel>Fecha de Nacimiento</FormLabel>
                    <Input
                        type="date"
                        placeholder="Tu fecha de nacimiento"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </FormControl>
                <FormControl id="level" isDisabled={!isEditing}>
                    <FormLabel>Nivel</FormLabel>
                    <Input
                        type="text"
                        placeholder="Tu nivel educativo"
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    />
                </FormControl>
                <FormControl id="address" isDisabled={!isEditing}>
                    <FormLabel>Dirección</FormLabel>
                    <Input
                        type="text"
                        placeholder="Tu dirección"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </FormControl>
                <FormControl id="password" isDisabled={!isEditing}>
                    <FormLabel>Nueva Contraseña</FormLabel>
                    <Input
                        type="password"
                        placeholder="Nueva contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormControl>
                <HStack spacing={4}>
                    {isEditing ? (
                        <>
                            <Button colorScheme="blue" onClick={handleSave}>
                                Guardar Cambios
                            </Button>
                            <Button onClick={() => setIsEditing(false)}>
                                Cancelar
                            </Button>
                        </>
                    ) : (
                        <Button onClick={() => setIsEditing(true)}>
                            Editar Perfil
                        </Button>
                    )}
                </HStack>
            </Stack>
        </Box>
    );
};

export default ProfilePage;