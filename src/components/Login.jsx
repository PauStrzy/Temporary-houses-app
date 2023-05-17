import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

function Login() {
	return (
		<div className='Login'>
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
		</div>
	)
}

export default Login
