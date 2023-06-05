import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import noSsr from '../no-ssr.js'
import NavBar from '../navbar.js'
import VoxelDog from '../voxel-god.js'
import NoSsr from '../no-ssr.js'
const Main = ({ children, router}) => {

	return(
		<Box as="main" pb={8}>
		<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<title>Ruwan Satharasinghe - Homepage</title>

		</Head>
		<NavBar path={router.asPath} />
		<Container maxW="container.md" pt={14}>
		<NoSsr>
		<VoxelDog/>
		</NoSsr>
		{children}
		</Container>
		

		</Box>
	)


}

export default Main
