import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	maxWidth: '90vw',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	textAlign: 'center',
	boxShadow: 24,
	p: 4,
}

export default function ContactEditModal({ handleCloseModal, open, editedHome }) {
	return (
		<div>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
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
								<InputLabel htmlFor='component-helper'>Name</InputLabel>
								<Input id='component-helper' defaultValue={editedHome.name} aria-describedby='component-helper-text' />
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='component-helper'>Surname</InputLabel>
								<Input
									id='component-helper'
									defaultValue={editedHome.surname}
									aria-describedby='component-helper-text'
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='component-helper'>Location</InputLabel>
								<Input
									id='component-helper'
									defaultValue={editedHome.location}
									aria-describedby='component-helper-text'
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='component-helper'>Mobile</InputLabel>
								<Input
									id='component-helper'
									defaultValue={editedHome.mobile}
									aria-describedby='component-helper-text'
								/>
							</FormControl>
							<FormControl variant='standard'>
								<InputLabel htmlFor='component-helper'>Email</InputLabel>
								<Input id='component-helper' defaultValue={editedHome.email} aria-describedby='component-helper-text' />
							</FormControl>
						</Box>
						<Button variant='outlined' onClick={handleCloseModal} sx={{ m: 2, width: 100 }}>
							Cancel
						</Button>
						<Button variant='contained' sx={{ m: 2, width: 100 }}>
							Save
						</Button>
					</Box>
				</Fade>
			</Modal>
		</div>
	)
}
