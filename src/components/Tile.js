import React, {Component} from 'react'
import { 
	Box,
	Grid,
	Paper
} from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const ContentsBox = (props) => {
	return <Box
        width='100%'
        height='100%'
        //backgroundColor='primary.dark'
        justifyContent='left'
        alignItems="top"
        display="flex"
    >
    	<text class="meditationContent medium">
    		{props.text}
    	</text>
    </Box>
}

const OptionsBox = (props) => {
	return <Box
		width="flex"
		height="flex"
		backgroundColor='primary.dark'
	>
		<text class="meditationContent small">
		 {props.text}
		</text>
	</Box>
}

const OptionsRow = (props) => {
	return <Grid container justifyContent="center" direction="row" spacing={4}>
		{Object.entries(props.directions).map((element, index) => {
			{/*console.log("item");*/}
			return (
				<Grid item>
					<OptionsBox text={element[1] ? element[1] : ""}/>
				</Grid>
			)
		})}
	</Grid>
}


const Tile = (props) => {
	const directions = {
		'N': props.N,
		'S': props.S,
		'E': props.E,
		'W': props.W
	}

	return <div>
		<ContentsBox text={props.content} />
		<OptionsRow directions={directions}/>

	  </div>

}

export default Tile;

