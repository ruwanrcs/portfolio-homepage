import { Container, Box, Heading, Image, useColorModeValue , List, ListItem, ListIcon, Button} from '@chakra-ui/react'
import Section from '../components/section'
import { MoonIcon } from '@chakra-ui/icons'
import DownloadButton from '../components/DownloadFile'
const Page = () => {
	return(
	  <Container>
		<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.100')} p={3} mb={6} align="center">
		Hello, I&apos;m a full stack developer based in SriLanka!
		</Box>
		
		<Box display={{md: 'flex'}}>
		<Box flexGrow={1}>
		<Heading as="h2" variant="page-title">
			Ruwan Satharasinghe
		</Heading>
	<p> Digital Craftzman ( Developer / Automation Engineer / Designer / photographer ) </p>
		</Box>
		<Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
			<Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/ruwan.jpg" alt="Profile Image"/>
		</Box>
		</Box>
		<Section delay={0.1}>
			<Heading as="h3" variant="section-tile" fontSize={20}>About Me</Heading>
			<p>Sedulous character in automation projects with leading 
				responsibility and experiences. Currently intending in utilizing knowledge, 
				experiences, and adaptive skills that have been achieved in Information 
				Technology pathway.
				Destining a professional status to launch a challenging performances to 
				develop innovative capacities for the growth of organization</p> 
		</Section>
		<Section delay={0.1}>
			<Heading as="h3" variant="section-tile" fontSize={20} mb={2}>Works</Heading>
			
			<List spacing={3}>
  <ListItem>
    <ListIcon as={MoonIcon} color='red.500' />
	Working as a Automation Engineer
  </ListItem>
  <ListItem>
    <ListIcon as={MoonIcon} color='green.500' />
    Graphic Designer
  </ListItem>
  <ListItem>
    <ListIcon as={MoonIcon} color='green.500' />
	Photographer
  </ListItem>
  <ListItem>
    <ListIcon as={MoonIcon} color='green.500' />
    Full Stack Developer
  </ListItem>
</List>

		</Section>
		<Box alignItems="center" align="center">
		<DownloadButton ></DownloadButton>
		</Box>
		</Container>
			
	)


}

export default Page
