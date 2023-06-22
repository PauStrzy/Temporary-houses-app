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
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				textAlign: 'center',
			}}>
			<CssBaseline />

			<Box component='footer'>
				<Container maxWidth='sm' sx={{ py: 0.5 }}>
					<Copyright />
				</Container>
			</Box>
		</Box>
	)
}

export default StickyFooter
