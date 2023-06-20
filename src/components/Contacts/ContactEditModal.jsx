import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import { homes } from '../../homes'
import { useState } from 'react'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	maxWidth: '90vw',
	bgcolor: 'background.paper',
	border: '1px solid rgb(2, 136, 209)',
	textAlign: 'center',
	boxShadow: 10,
	p: 4,
}

export default function ContactEditModal({ handleCloseModal, open, editedHome, handleLoading }) {
	const [newHome, setNewHome] = useState({})
	function saveEditedHome() {
		homes.find((home) => {
			if (home.id === editedHome.id) {
				home.name = newHome.name ?? home.name
				home.surname = newHome.surname ?? home.surname
				home.address = newHome.address ?? home.address
				home.mobile = newHome.mobile ?? home.mobile
				home.location = newHome.location ?? home.location
				home.email = newHome.email ?? home.email
				home.pets = newHome.pets ?? home.pets
				home.info = newHome.info ?? home.info
			}
		})
		handleCloseModal()
		handleLoading()
	}
	const handleChange = (event) => {
		const { name, value } = event.target
		setNewHome((prevState) => ({ ...prevState, [name]: value }))
	}

	return (
		<div>
			<Modal
				open={open}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<Typography id='transition-modal-title' variant='h6' component='h2'>
							Edit temporary home
						</Typography>

						<Box
							component='form'
							sx={{
								'& > :not(style)': { m: 1 },
							}}
							noValidate
							autoComplete='off'>
							<FormControl variant='standard'>
								<InputLabel htmlFor='editedHomeName'>Name</InputLabel>
								<Input
									type='text'
									id='editedHomeName'
									defaultValue={editedHome.name}
									name='name'
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='editedHomeSurname'>Surname</InputLabel>
								<Input
									type='text'
									id='editedHomeSurname'
									defaultValue={editedHome.surname}
									name='surname'
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='editedHomeLocation'>Location</InputLabel>
								<Input
									type='text'
									id='editedHomeLocation'
									defaultValue={editedHome.location}
									name='location'
									onChange={handleChange}
									aria-describedby='editedHomeLocation'
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='editedHomeMobile'>Mobile</InputLabel>
								<Input
									type='tel'
									id='editedHomeMobile'
									defaultValue={editedHome.mobile}
									name='mobile'
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='editedHomeEmail'>E-mail</InputLabel>
								<Input
									type='email'
									id='editedHomeEmail'
									name='email'
									defaultValue={editedHome.email}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='editedHomePets'>Pets</InputLabel>
								<Input
									type='number'
									id='editedHomePets'
									name='pets'
									defaultValue={editedHome.pets}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='editedHomeInfo'>Additional information</InputLabel>
								<Input
									type='text'
									id='editedHomeInfo'
									name='info'
									defaultValue={editedHome.info}
									onChange={handleChange}
								/>
							</FormControl>
						</Box>
						<Button variant='outlined' onClick={handleCloseModal} sx={{ m: 2, width: 100 }}>
							Cancel
						</Button>
						<Button variant='contained' sx={{ m: 2, width: 100 }} onClick={saveEditedHome}>
							Save
						</Button>
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}
