import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Container component='main'>
			<Box
				sx={{
					width: '100%',
				}}>
				<App />
			</Box>
		</Container>
	</React.StrictMode>
)
