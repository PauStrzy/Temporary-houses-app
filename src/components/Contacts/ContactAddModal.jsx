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

export default function ContactAddModal({ handleCloseModal, open, handleLoading }) {
	const [newHome, setNewHome] = useState({})
	function saveNewHome() {
		let newID = homes.length
		homes.push({
			id: newID,
			name: newHome.name,
			surname: newHome.surname,
			address: newHome.address,
			mobile: newHome.mobile,
			coordinates: newHome.coordinates,
			pets: newHome.pets || 0,
			location: newHome.location,
			email: newHome.email,
			info: newHome.info,
		})

		handleCloseModal()
		setNewHome({})
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
							New temporary home
						</Typography>

						<Box
							component='form'
							sx={{
								'& > :not(style)': { m: 1 },
							}}
							noValidate
							autoComplete='off'>
							<FormControl variant='standard'>
								<InputLabel htmlFor='newHomeName'>Name</InputLabel>
								<Input type='text' id='newHomeName' defaultValue={newHome.name} name='name' onChange={handleChange} />
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='newHomeSurname'>Surname</InputLabel>
								<Input
									type='text'
									id='newHomeSurname'
									defaultValue={newHome.surname}
									name='surname'
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='newHomeLocation'>Location</InputLabel>
								<Input
									type='text'
									id='newHomeLocation'
									defaultValue={newHome.location}
									name='location'
									onChange={handleChange}
									aria-describedby='newHomeLocation'
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='newHomeMobile'>Mobile</InputLabel>
								<Input
									type='tel'
									id='newHomeMobile'
									defaultValue={newHome.mobile}
									name='mobile'
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='newHomeEmail'>E-mail</InputLabel>
								<Input
									type='email'
									id='newHomeEmail'
									name='email'
									defaultValue={newHome.email}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='newHomePets'>Number of pets</InputLabel>
								<Input type='number' id='newHomePets' name='pets' defaultValue={newHome.pets} onChange={handleChange} />
							</FormControl>

							<FormControl variant='standard'>
								<InputLabel htmlFor='newHomeInfo'>Additional information</InputLabel>
								<Input type='text' id='newHomeInfo' name='info' defaultValue={newHome.info} onChange={handleChange} />
							</FormControl>
						</Box>
						<Button variant='outlined' onClick={handleCloseModal} sx={{ m: 2, width: 100 }}>
							Cancel
						</Button>
						<Button variant='contained' sx={{ m: 2, width: 100 }} onClick={saveNewHome}>
							Save
						</Button>
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}
