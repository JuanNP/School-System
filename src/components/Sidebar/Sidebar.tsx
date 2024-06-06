import { Container, Heading, Divider, Image, Center, VStack, Link, Box } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import '../../App.css'

function Sidebar() {
    const navigate = useNavigate();

    return (
        <Container as='aside' bg='#333' w='12.5rem' h='100vh' p='0' float='left' position='fixed'>
            <Link onClick={() => navigate('/')}>
                <Center alignItems='center' p='5'>
                    <Image
                        align='center'
                        borderRadius='full'
                        boxSize='60px'
                        src='../src/assets/logo.png'
                        alt='Logo'
                    />
                    <Heading as='h2' color='white' fontSize='20px'>Sistema Escolar</Heading>
                </Center>
            </Link>
            <Divider />
            <VStack gap='0' fontSize='16' align='start' color='white'>
                <Link className='MenuItems' onClick={() => navigate('/perfil')} display='flex' alignItems='center'>
                    <Box as='span' mr='2' display='none' className='arrow-icon'><ArrowForwardIcon /></Box>
                    Mi perfil
                </Link>
                <Link className='MenuItems' onClick={() => navigate('/inscripciones')} display='flex' alignItems='center'>
                    <Box as='span' mr='2' display='none' className='arrow-icon'><ArrowForwardIcon /></Box>
                    Inscripciones
                </Link>
                <Link className='MenuItems' onClick={() => navigate('/cursos')} display='flex' alignItems='center'>
                    <Box as='span' mr='2' display='none' className='arrow-icon'><ArrowForwardIcon /></Box>
                    Cursos
                </Link>
                <Link className='MenuItems' onClick={() => navigate('/calificaciones')} display='flex' alignItems='center'>
                    <Box as='span' mr='2' display='none' className='arrow-icon'><ArrowForwardIcon /></Box>
                    Calificaciones
                </Link>
                <Link className='MenuItems' onClick={() => navigate('/calendario')} display='flex' alignItems='center'>
                    <Box as='span' mr='2' display='none' className='arrow-icon'><ArrowForwardIcon /></Box>
                    Calendario
                </Link>
                <Link className='MenuItems' onClick={() => navigate('/login')} display='flex' alignItems='center'>
                    <Box as='span' mr='2' display='none' className='arrow-icon'><ArrowForwardIcon /></Box>
                    Cerrar Sesion
                </Link>
            </VStack>
            <Box as='footer' position='absolute' bottom='0' w='100%' p='5' color='white' textAlign='center' fontSize='14px'>
                <p>© 2024 Escuela Virtual</p>
                <p>Todos los derechos reservados</p>
            </Box>
        </Container>
    )
}

export default Sidebar