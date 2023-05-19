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
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import HomeIcon from '@mui/icons-material/Home'
import { homes } from '../homes'

const ContactsDrawer = () => {
	return (
		<div>
			<Toolbar>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Lista kontaktów
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{homes.map(({ id, name, surname, email, mobile, location }) => {
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
							</ListItem>
							<Divider />
						</div>
					)
				})}
			</List>
		</div>
	)
}
export default ContactsDrawer
