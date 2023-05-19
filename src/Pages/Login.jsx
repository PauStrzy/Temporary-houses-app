import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
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
				height: '100vh',
				maxWidth: 300,
				mx: 'auto',
			}}>
			<Typography component='h1' variant='h5'>
				Zaloguj się
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
				label='Hasło'
				name='password'
				type='password'
				variant='outlined'
				autoComplete='current-password'
			/>
			<FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Zapamiętaj mnie' />
			<Button fullWidth variant='contained' type='submit' sx={{ fontSize: 18 }}>
				Zaloguj się
			</Button>
		</Box>
	)
}

export default Login
