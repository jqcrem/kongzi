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
		{props.dir == 'E' ? <text>{props.label}</text> : <div></div>}
		{iconMap[props.dir]}
		{props.dir == 'W' ? <text>{props.label}</text> : <div></div>}
	</IconButton>
}


class TileRenderer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTile: "61afa24a8855006fbb8ea0fd",
			content: "",
			NSEW: [],
			dirmap: [],
			dir: [],
		}
	}

	componentDidMount = () => {
		this.setTile(this.state.currentTile);
	}

	setTile = (idString) => {
		axios.get(`http://localhost:3000/rituals/${idString}`)
			.then(res => {
				console.log(res.data)
				this.setState({
					content: res.data.content,
				});
			});
		var edges = axios.get(`http://localhost:3000/edges/${idString}`)
			.then(res => {
				var NSEW = []
				var dirmap = {}
				res.data.forEach((x,i) => {
					NSEW.push(x.direction);
					dirmap[x.direction] = x.label;
				});
				this.setState({
					NSEW: NSEW,
					dirmap: dirmap,
					dir: res.data
				});
				console.log(dirmap)
				return res.data;
			});
	}

	directionClick = (dir) => {
		// console.log(this.state.currentTile);
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
			    	{this.state.NSEW.includes('W') ? 
			    		<DirectionButton 
			    			dir='W' 
			    			label = {this.state.dirmap['W']}
			    			callback={this.directionClick}/> : <div></div>
			    	}
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
		  				{this.state.NSEW.includes('N') ? 
		  					<DirectionButton dir='N' callback={this.directionClick}/> : <div></div>
		  				}
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
				  				<Tile 
				  					content={this.state.content}
				  				/>
				  		</Grid>
				  	</Grid>
			  		<Grid 
			  			item xs={1}
			  		>
			  			{this.state.NSEW.includes('S') ? 
			  				<DirectionButton dir='S' callback={this.directionClick}/> : <div></div>
			  			}
			  		</Grid>
			  	</Grid>
			  	<Grid 
			  		item xs={1} 
			  		textAlign='right' 
			  		//backgroundColor='primary.dark'
			  	>
			  		{this.state.NSEW.includes('E') ? 
			    		<DirectionButton 
			    			dir='E' 
			    			label = {this.state.dirmap['E']}
			    			callback={this.directionClick}/> : <div></div>
			  		}
			  	</Grid>
			</Grid>	
			</Box>
	)

	}
}

export default TileRenderer;