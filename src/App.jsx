import './App.css'
import HomesList from './Pages/HomesList'
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
			<Box>{isLogin ? <HomesList handleLogin={handleLogin} /> : <Login handleLogin={handleLogin} />}</Box>
			{!isLogin && <StickyFooter />}
		</div>
	)
}

export default App
