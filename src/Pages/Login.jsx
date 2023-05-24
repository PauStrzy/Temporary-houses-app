import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Avatar from '@mui/material/Avatar'
import PetsIcon from '@mui/icons-material/Pets'
import { Box } from '@mui/material'
Box

function Login() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '90vh',
				maxWidth: 350,
				mx: 'auto',
			}}>
			<Avatar>
				<PetsIcon />
			</Avatar>
			<Typography component='h1' variant='h5'>
				Sign in
			</Typography>

			<TextField
				required
				fullWidth
				margin='normal'
				id='email'
				label='E-mail'
				name='email'
				variant='outlined'
				autoComplete='email'
				autoFocus
			/>
			<TextField
				required
				fullWidth
				margin='normal'
				id='password'
				label='Password'
				name='password'
				type='password'
				variant='outlined'
				autoComplete='current-password'
			/>
			<FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
			<Button fullWidth variant='contained' type='submit' sx={{ fontSize: 18 }}>
				Sign in
			</Button>
		</Box>
	)
}

export default Login
