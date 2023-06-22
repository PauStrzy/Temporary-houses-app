import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react'
import ContactsDrawer from '../components/Contacts/ContactsDrawer'
import PetsIcon from '@mui/icons-material/Pets'
import Tooltip from '@mui/material/Tooltip'
import AccountMenu from '../components/AccountMenu'
import StickyFooter from '../components/StickyFooter'

import Map from '../components/Map/Map'

const drawerWidth = 360

const HomesList = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const openEl = Boolean(anchorEl)
	const [mobileOpen, setMobileOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		console.log('homes change')

		setTimeout(() => setIsLoading(false), 1000)
	}, [isLoading])

	const handleLoading = () => {
		setIsLoading(true)
	}

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position='fixed' sx={{ maxHeight: '10vh' }}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
						aria-controls={openEl ? 'account-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={openEl ? 'true' : undefined}>
						<PeopleAltIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div' sx={{ textAlign: 'right', width: '100%' }}>
						PawsTemporary
					</Typography>
					<Tooltip title='Account'>
						<IconButton color='inherit' edge='end' sx={{ border: 1, borderRadius: 50, ml: 1 }} onClick={handleClick}>
							<PetsIcon />
						</IconButton>
					</Tooltip>
					<AccountMenu handleClose={handleClose} openEl={openEl} anchorEl={anchorEl} handleLoading={handleLoading} />
				</Toolbar>
			</AppBar>

			<Drawer
				variant='temporary'
				anchor='left'
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{ keepMounted: true }}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& . MuiDrawer-paper': { boxSizing: 'border-box' },
				}}>
				<ContactsDrawer handleLoading={handleLoading} isLoading={isLoading} />
			</Drawer>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					display: { xs: 'none', sm: 'block' },
					'& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
				}}
				variant='permanent'
				anchor='left'>
				<ContactsDrawer handleLoading={handleLoading} isLoading={isLoading} />
			</Drawer>
			<Box component='main' sx={{ flexGrow: 1 }}>
				<Toolbar />
				<Map></Map>
				<StickyFooter />
			</Box>
		</Box>
	)
}

export default HomesList
