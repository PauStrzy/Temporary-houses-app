import { homes } from '../homes'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import { Grid } from '@mui/material'

const HomesList = () => {
	return (
		<div>
			<Grid container spacing={0.5}>
				<Grid item xs={2}>
					<Box
						sx={{
							width: 300,
							display: 'inline-block',
							fontWeight: 'bold',

							fontSize: 14,
						}}>
						<nav>
							<List>
								<h1>Domy tymczasowe</h1>
								{homes.map(({ id, name, surname, email }) => {
									return (
										<div key={id}>
											<ListItem disablePadding>
												<ListItemButton>
													<ListItemIcon>
														<PersonIcon />
													</ListItemIcon>
													<ListItemText primary={`${name} ${surname} `} secondary={email} />

													<PhoneIcon fontSize='small' />
												</ListItemButton>
											</ListItem>
											<Divider />
										</div>
									)
								})}
							</List>
						</nav>
					</Box>
				</Grid>
				<Grid item xs={10}>
					<Box sx={{ maxWidth: 360, display: 'inline-block', width: 360, height: 1000 }}>
						<h2>hejjj</h2>
					</Box>
				</Grid>
			</Grid>
		</div>
	)
}
export default HomesList
