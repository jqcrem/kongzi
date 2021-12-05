import React, {Component} from 'react'
import { 
	Box,
	Grid,
	Stack
} from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../App.css';
import Tile from './Tile';
import 'bootstrap-icons/font/bootstrap-icons.css';



const DirectionButton = (props) => {
	const iconMap = {
		'E': <i class="bi bi-chevron-compact-right text-warning" style={{fontSize: 70}}></i>,
		'W': <i class="bi bi-chevron-compact-left text-warning" style={{fontSize: 70}}></i>,
		'N': <i class="bi bi-chevron-compact-up text-warning" style={{fontSize: 70}}></i>,
		'S': <i class="bi bi-chevron-compact-down text-warning" style={{fontSize: 70}}></i>
	};
	return iconMap[props.dir]
}


class TileRenderer extends React.Component {

	render() {
		return (
			<Box
				height='100vh'
				width='100vw'
				justifyContent='center' 
				alignItems='center'
				display='flex'
			>
			<Grid container alignItems="center" direction="row" justifyContent="space-around">
				<Grid 
					item xs={1}
					textAlign='left'
					backgroundColor='primary.dark'
				>
			    	<DirectionButton dir='W' />
			  	</Grid>
			  	<Grid 
			  		container xs={10} 
			  		backgroundColor='primary.light'
			  		align='center'
			  		direction='column'
			  		height='100vh'
			  		justifyContent="space-between"
			  	>
			  		<Grid 
			  			item xs={1}
			  			align='top'
			  		>
			  			<DirectionButton dir='N'/>
			  		</Grid>
			  		<Grid item backgroundColor='orange'>
				  		<Grid container 
				  			xs={10} 
				  			direction='column'
				  			backgroundColor='green'
				  			justifyContent='center'
				  			alignItems='center'
				  		>
				  				<Tile />
				  		</Grid>
				  	</Grid>
			  		<Grid 
			  			item xs={1}
			  			backgroundColor='red' 
			  		>
			  			<DirectionButton dir='S'/>
			  		</Grid>
			  	</Grid>
			  	<Grid 
			  		item xs={1} 
			  		textAlign='right' 
			  		backgroundColor='primary.dark'
			  	>
			  		<DirectionButton dir='E' />
			  	</Grid>
			</Grid>	
			</Box>
	)

	}
}

export default TileRenderer;