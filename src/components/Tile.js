import React, {Component} from 'react'
import { 
	Box,
	Grid
} from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const ContentsBox = (props) => {
	return <Box
        width='100%'
        height='100%'
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
    	console.log(props.content);
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
{/*			<ContentsBox text={`Ok whattt happens if you have  a lot of text  a lot of text  a lot of text
			    			 a lot of text  a lot of text  a lot of text  a lot of text  a lot of text
			    			  a lot of text  a lot of text a lottttttt of text a lot of text a lot of text a lot of text a lot of text a lot`}/>
*/}
			<ContentsBox text={this.props.content} />
		  </div>
	}

}

export default Tile;