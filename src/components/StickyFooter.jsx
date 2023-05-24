import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { CssBaseline } from '@mui/material'

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary'>
			{'Copyright ©'}
			<Link color='inherit' href='#'>
				PawsTemporary
			</Link>{' '}
			{new Date().getFullYear()}
		</Typography>
	)
}

const StickyFooter = () => {
	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', height: '10vh' }}>
			<CssBaseline />

			<Box
				component='footer'
				sx={{
					py: 3,
					px: 2,
					mt: 'auto',
				}}>
				<Container maxWidth='sm'>
					<Copyright />
				</Container>
			</Box>
		</Box>
	)
}

export default StickyFooter
