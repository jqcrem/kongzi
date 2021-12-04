import React, {Component} from 'react'
import { 
	Box,
	Grid
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
				<Grid item xs={1}>
			    	<DirectionButton dir='W' />
			  	</Grid>
			  	<Grid item xs={10}>
			  		<Tile />
			  	</Grid>
			  	<Grid item xs={1}>
			  		<DirectionButton dir='E'/>
			  	</Grid>
			</Grid>	
			</Box>
	)

	}
}

export default TileRenderer;