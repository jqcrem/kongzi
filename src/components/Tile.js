import React, {Component} from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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
		return <Box
			height='100vh'
			width='100vw'
			justifyContent='center'
			alignItems='center'
			display='flex'
		>
		<ContentsBox text={`Ok what happens if you have  a lot of text  a lot of text  a lot of text
		    			 a lot of text  a lot of text  a lot of text  a lot of text  a lot of text
		    			  a lot of text  a lot of text`}/>
		</Box>
	}

}

export default Tile;