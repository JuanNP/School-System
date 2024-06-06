import '../../App.css';
import { useState } from 'react';
import { Box, Heading, Container, FormControl, FormLabel, Input, Button, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (user === 'admin' && pass === 'admin') {
            navigate('/');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <>
            <Center className='login'>
                <Container w='100%'>
                    <Box bg='white'  p={5} shadow="md" borderWidth="1px" display="grid" gap="30px" borderRadius="md">
                        <Heading as="h3" size="lg" textAlign="center">Login</Heading>
                        <form onSubmit={handleSubmit}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Usuario</FormLabel>
                                <Input
                                    type="text"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    placeholder="Nombre de usuario"
                                />
                            </FormControl>
                            <FormControl id="password" isRequired mt={4}>
                                <FormLabel>Contraseña</FormLabel>
                                <Input
                                    type="password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    placeholder="Contraseña"
                                />
                            </FormControl>
                            <Button className="loginButton" type="submit" mt={4}>Iniciar Sesión</Button>
                        </form>
                    </Box>
                </Container>
            </Center>
        </>
    );
};
