import './App.css'
import HomesList from './Pages/HomesList'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './Pages/Login'

function App() {
	return (
		<div className='App'>
			<CssBaseline />
			<Container component='main'>
				<Box>
					<HomesList />
					{/* <Login /> */}
				</Box>
			</Container>
		</div>
	)
}

export default App
