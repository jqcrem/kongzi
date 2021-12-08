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
	return <Grid container
        width='100%'
        height='100%'
        //backgroundColor='primary.dark'
        direction='column'
        justifyContent='left'
        alignItems="top"
        display="flex"
    >
    	{/*<text class="meditationContent medium">*/}
    		{console.log(props.text.split('\\n'))}
    		{props.text.split('\\n').map(item => 
    			<Grid item direction="row" justifyContent="left" >
    				<p align="left">
    					<text class="meditationContent medium">{item}</text>
    				</p>
    			</Grid>
    		)}
    	{/*</text>*/}
    </Grid>
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
