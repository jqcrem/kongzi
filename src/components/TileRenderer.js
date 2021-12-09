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
	return <IconButton 
		onClick={() => {props.callback(props.dir);}}
		style={{flexDirection:['N','S'].includes(props.dir) ? 'column' : 'row'}}
	> 
		{['E','S'].includes(props.dir) ? <text>{props.label}</text> : <div></div>}
		{iconMap[props.dir]}
		{['W', 'N'].includes(props.dir) ? <text>{props.label}</text> : <div></div>}
	</IconButton>
}


class TileRenderer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTile: "61b02885f5cb70b250f12eb9",
			content: "",
			category: "Kongzi",
			NSEW: [],
			labelmap: {},
			dirmap: {},
			dir: [],
		}
	}

	componentDidMount = () => {
		this.setTile(this.state.currentTile);
		// window.addEventListener('scroll', this.handleScroll, { passive: true })
		document.addEventListener('keyup', event => {
		  if (event.code === 'Space') {
		    console.log('Space pressed')
		    this.directionClick('P');
		  }
		})
	}

	setTile = (idString, category) => {
		console.log(`GETING CATEGORY ${category}`)
		axios.get(`http://localhost:3000/rituals/${idString}`)
			.then(res => {
				console.log(`Content: ${res.data.content} and category: ${res.data.category}`)
				this.setState({
					content: res.data.content,
					category: res.data.category
				});
			});
		var edges = axios.post(`http://localhost:3000/edges/${idString}`, 
				{category: this.state.category})
			.then(res => {
				var NSEW = [];
				var labelmap = {};
				var dirmap = {};
				res.data.forEach((x,i) => {
					console.log(`Current category: ${this.state.category}`)
					console.log(`Edge data: ${x.category} ${i}`)
					NSEW.push(x.direction);
					labelmap[x.direction] = x.label;
					dirmap[x.direction] = {
						'ritual': x.ritualB,
						'category': x.category};
				});
				this.setState({
					NSEW: NSEW,
					labelmap: labelmap,
					dirmap: dirmap,
					dir: res.data,
					category: res.data.category
				});
				console.log(dirmap)
				return res.data;
			});
	}

	directionClick = (dir) => {
		var edge = this.state.dirmap[dir]
		// console.log(`Clicked edge: ${edge}`)
		var ritualID = edge ? edge['ritual'] : null;
		var category = edge ? edge['category'] : null;
		if (ritualID) {
			this.setTile(ritualID, category)
		};
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
			    			label = {this.state.labelmap['W']}
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
		  					<DirectionButton 
		  						dir='N' 
		  						label = {this.state.labelmap['N']}
		  						callback={this.directionClick}/> : <div></div>
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
			  				<DirectionButton 
			  					dir='S' 
			  					label = {this.state.labelmap['S']}
			  					callback={this.directionClick}/> : <div></div>
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
			    			label = {this.state.labelmap['E']}
			    			callback={this.directionClick}/> : <div></div>
			  		}
			  	</Grid>
			</Grid>	
			</Box>
	)

	}
}

export default TileRenderer;