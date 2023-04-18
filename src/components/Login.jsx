import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

function Login() {
	return (
		<div className='Login'>
			<Container component='main' maxWidth='xs'>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
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
					<Button fullWidth variant='contained' type='submit'>
						Zaloguj
					</Button>
				</Box>
			</Container>
		</div>
	)
}

export default Login
