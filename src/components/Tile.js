import React, {Component} from 'react'
import {Box, IconButton }from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import {
// 	ArrowForward,
// 	ArrowBack
// } from '@mui/icons-material';
import '../App.css';

const ContentsBox = (props) => {
	return <Box
        width='50%'
        height='50%'
        backgroundColor='primary.dark'
        justifyContent='left'
        alignItems="top"
        display="flex"
    >
    	<text class="meditationContent medium">
    		{props.text}
    	</text>
    </Box>
}

const DirectionButton = (props) => {
	const iconMap = {
		'E': <ArrowForward />,
		'W': <ArrowBack />,
		'N': <ArrowBack />,
		'S': <ArrowForward />
	};
	return <IconButton>
		{/*<ArrowBackIosIcon />*/}
		{iconMap[props.dir]}
	</IconButton>

}

class Tile extends React.Component {
	constructor(props) {
    	super(props);
	    this.state = {
	    	contents: props.content,
	    	directions: {
	    		'N': props.N,
	    		'S': props.S,
	    		'E': props.E,
	    		'W': props.W
	    	}
	    };
	}

	render() {
		return <div>
		{/*<DirectionButton dir='W'/>*/}
		<Box
			height='100vh'
			width='100vw'
			justifyContent='center' 
			alignItems='center'
			display='flex'
		>
		<ContentsBox text={`Ok what happens if you have  a lot of text  a lot of text  a lot of text
		    			 a lot of text  a lot of text  a lot of text  a lot of text  a lot of text
		    			  a lot of text  a lot of text`}/>
		</Box></div>
	}

}

export default Tile;