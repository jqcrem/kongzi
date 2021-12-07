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

const Tile = (props) => {

	return <div>
		<ContentsBox text={props.content} />
	  </div>

}

export default Tile;

/*
Next steps:
-Add updating text and directions per tile
-Format directions next to arrows
-Write up tiles and put in database
-Add escape key information panel
-Add space key to move in same slide
*/
