import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { useState } from 'react'
import ContactAddModal from './Contacts/ContactAddModal'

const AccountMenu = ({ handleClose, openEl, anchorEl, handleLogin }) => {
	const [open, setOpenModal] = useState(false)
	const handleOpenModal = () => {
		setOpenModal(true)
		handleClose()
	}
	const handleCloseModal = () => setOpenModal(false)
	return (
		<>
			<ContactAddModal handleCloseModal={handleCloseModal} open={open} />
			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={openEl}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiIconButton-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
				<MenuItem onClick={handleClose}>
					<Avatar sx={{ mr: 2 }} /> Profile
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleOpenModal}>
					<ListItemIcon>
						<PersonAdd fontSize='small' />
					</ListItemIcon>
					Add temporary home
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Settings fontSize='small' />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem onClick={handleLogin}>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Log out
				</MenuItem>
			</Menu>
		</>
	)
}
export default AccountMenu
