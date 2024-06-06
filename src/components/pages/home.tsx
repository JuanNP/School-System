import '../../App.css'
import { Box, Container, Image, HStack, Heading } from '@chakra-ui/react'

export const Home = () => {
    return (
        <>
            <Container maxW='-webkit-fill-available' p='0' centerContent>
                <Image w='100%' maxH='350px' objectFit='fill' src='./src/assets/banner.png' />
                <Box w='80%' maxH='800px' overflow='hidden' m='8' p='8' color='black' textAlign='left' shadow="lg" borderWidth="1px" borderRadius='30px'>
                    <Heading as='h3'>Bienvenido a tu escuela virtual!!</Heading>
                    <HStack spacing={4}>
                        <Box w='50%' p='4' color='black' display='flex' justifyContent='center'>
                            <Image objectFit='cover' src='./src/assets/feriados.png' />
                        </Box>
                        <Box w='50%' p='4' color='black' display='flex' justifyContent='center'>
                            <iframe
                                src="./src/assets/video.mp4"
                                width='100%'
                                height='486'
                            ></iframe>
                        </Box>
                    </HStack>
                </Box>
            </Container>
        </>
    )
}