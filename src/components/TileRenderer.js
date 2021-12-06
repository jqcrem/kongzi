import React, {Component} from 'react'
import { 
	Box,
	Grid,
	Stack,
	IconButton
} from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../App.css';
import Tile from './Tile';
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as TileDatum from './TileData';
import axios from 'axios';



const DirectionButton = (props) => {
	const iconMap = {
		'E': <i class="bi bi-chevron-compact-right text-warning" style={{fontSize: 70}}></i>,
		'W': <i class="bi bi-chevron-compact-left text-warning" style={{fontSize: 70}}></i>,
		'N': <i class="bi bi-chevron-compact-up text-warning" style={{fontSize: 70}}></i>,
		'S': <i class="bi bi-chevron-compact-down text-warning" style={{fontSize: 70}}></i>
	};
	return <IconButton onClick={() => {
		props.callback(props.dir);
	}}> 
		{iconMap[props.dir]}
	</IconButton>
}


class TileRenderer extends React.Component {
	constructor(props) {
		super(props);
		console.log(TileDatum.Tile1.S['S']);
		this.state = {
			currentTile: "61ae3aff9b0eb350c2df0867",
			content: "",
			N: "",
			S: "",
			E: "",
			W: ""
		}
	}

	setTile = (idString) => {
		axios.get(`http://localhost:3000/rituals/${idString}`)
			.then(res => this.setState({
				content: res.data.content
			}));
	}

	directionClick = (dir) => {
		console.log(this.state.currentTile);
		this.setTile(this.state.currentTile);
		// this.setState({
		// 	currentTile: this.state.currentTile[dir]
		// });
	}

	render() {
		return (
			<Box
				height='100vh'
				qqqwidth='100vw'
				justifyContent='center' 
				alignItems='center'
				display='flex'
			>
			<Grid container alignItems="center" direction="row" justifyContent="space-around">
				<Grid 
					item xs={1}
					textAlign='left'
					//backgroundColor='primary.dark'
				>
			    	<DirectionButton dir='W' callback={this.directionClick}/>
			  	</Grid>
			  	<Grid 
			  		container xs={10} 
			  		//backgroundColor='primary.light'
			  		align='center'
			  		direction='column'
			  		height='100vh'
			  		justifyContent="space-between"
			  	>
			  		<Grid 
			  			item xs={1}
			  			align='top'
			  		>
		  				<DirectionButton dir='N' callback={this.directionClick}/>
			  		</Grid>
			  		<Grid item 
			  			//backgroundColor='orange'
			  		>
				  		<Grid container 
				  			xs={10} 
				  			direction='column'
				  			//backgroundColor='green'
				  			justifyContent='center'
				  			alignItems='center'
				  		>
				  				<Tile content={this.state.content}/>
				  		</Grid>
				  	</Grid>
			  		<Grid 
			  			item xs={1}
			  		>
			  			<DirectionButton dir='S' callback={this.directionClick}/>
			  		</Grid>
			  	</Grid>
			  	<Grid 
			  		item xs={1} 
			  		textAlign='right' 
			  		//backgroundColor='primary.dark'
			  	>
			  		<DirectionButton dir='E' callback={this.directionClick}/>
			  	</Grid>
			</Grid>	
			</Box>
	)

	}
}

export default TileRenderer;