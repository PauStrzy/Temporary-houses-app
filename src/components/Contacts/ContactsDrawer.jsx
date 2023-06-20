import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import InfoIcon from '@mui/icons-material/Info'
import PetsIcon from '@mui/icons-material/Pets'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import HomeIcon from '@mui/icons-material/Home'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/Edit'
import { homes } from '../../homes'
import { useState, useEffect } from 'react'
import ContactEditModal from './ContactEditModal'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const ContactsDrawer = ({ handleLoading, isLoading }) => {
	const [open, setOpenModal] = useState(false)
	// const [isLoading, setIsLoading] = useState(true)
	const [editedHome, setEditedHome] = useState({})
	const handleOpenModal = (home) => {
		setOpenModal(true)
		setEditedHome(home)
	}

	// useEffect(() => {
	// 	console.log('homes change')

	// 	setTimeout(() => setIsLoading(false), 1000)
	// }, [isLoading])

	// const handleLoading = () => {
	// 	setIsLoading(true)
	// }

	const handleCloseModal = () => {
		setOpenModal(false)
	}
	return (
		<Box>
			<ContactEditModal
				handleCloseModal={handleCloseModal}
				handleLoading={handleLoading}
				open={open}
				editedHome={editedHome}
				key={editedHome.id}
			/>
			<Toolbar>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Contacts list
				</Typography>
			</Toolbar>
			<Divider />
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<List>
					{homes.map(({ id, name, surname, email, mobile, location, pets, info }) => {
						return (
							<div key={id}>
								<ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
									<ListItemButton>
										<ListItemIcon>
											<PersonIcon fontSize='large' color='info' sx={{ ml: -1 }} />
										</ListItemIcon>
										<ListItemText primary={`${name} ${surname} `} sx={{ m: 0, p: 0, fontWeight: 'bold' }} />
									</ListItemButton>

									<ListItemButton>
										<ListItemIcon>
											<HomeIcon fontSize='small' />
										</ListItemIcon>
										<ListItemText secondary={location} />
									</ListItemButton>
									<ListItemButton>
										<ListItemIcon>
											<PhoneIcon fontSize='small' />
										</ListItemIcon>
										<ListItemText secondary={mobile} sx={{ m: 0, p: 0 }} />
									</ListItemButton>
									<ListItemButton>
										<ListItemIcon>
											<AlternateEmailIcon fontSize='small' />
										</ListItemIcon>
										<ListItemText secondary={email} />
									</ListItemButton>

									<ListItemButton>
										<ListItemIcon>
											<PetsIcon fontSize='small' />
										</ListItemIcon>
										<ListItemText secondary={pets + (pets === 1 ? ' Pet' : ' Pets')} />
									</ListItemButton>
									<ListItemButton>
										<ListItemIcon>
											<InfoIcon fontSize='small' />
										</ListItemIcon>
										<ListItemText secondary={info} />
									</ListItemButton>
									<Button
										variant='text'
										startIcon={<EditIcon />}
										sx={{ alignSelf: 'flex-end' }}
										onClick={() => handleOpenModal({ id, name, surname, email, mobile, location, info, pets })}>
										Edit
									</Button>
								</ListItem>

								<Divider />
							</div>
						)
					})}
				</List>
			)}
		</Box>
	)
}
export default ContactsDrawer
