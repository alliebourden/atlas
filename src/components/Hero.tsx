import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Box,
    Image,
  } from '@chakra-ui/react';
  import heroImage from '../assets/HeroHome.png';
  
  export default function HeroHome() {
    return (
      <Box>
        <Box>
          <Image src={heroImage} alt="Hero Image" w="100%" />
        </Box>

        <Container maxW={'5xl'} py={{ base: 20, md: 28 }}>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Streamlined design{' '}
              <Text as={'span'} color={'pink.500'}>
                for your business
              </Text>
            </Heading>
            <Text color={'gray.500'} maxW={'3xl'}>
              At <strong>Atlas Web Design</strong>, we believe that simplicity is the ultimate sophistication. We craft intuitive websites that capture your brand essence while providing seamless user experiences.
            </Text>
            <Stack spacing={6} direction={'row'}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                bg={'pink.400'}
                _hover={{ bg: 'pink.500' }}>
                About Us
              </Button>
              <Button rounded={'full'} px={6}>
                Our Services
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  }
  