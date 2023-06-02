import './App.css'
import HomesList from './Pages/HomesList'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Login from './Pages/Login'
import StickyFooter from './components/StickyFooter'
import { useState } from 'react'

function App() {
	const [isLogin, setIsLogin] = useState(true)

	const handleLogin = () => {
		setIsLogin(!isLogin)
	}

	return (
		<div className='App'>
			<CssBaseline />
			<Container component='main'>
				<Box>{isLogin ? <HomesList handleLogin={handleLogin} /> : <Login handleLogin={handleLogin} />}</Box>
			</Container>
			{!isLogin && <StickyFooter />}
		</div>
	)
}

export default App
