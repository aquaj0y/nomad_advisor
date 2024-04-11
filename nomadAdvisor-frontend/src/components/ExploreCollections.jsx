import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import beachesBg from '../assets/beaches.jpeg'
import citiesBg from '../assets/cities.jpeg'
import castlesBg from '../assets/castles.jpeg'
import mountainsBg from '../assets/mountains.jpeg'



export default function ExploreCollections() {
  const navigate = useNavigate()
  
  return (
    <div>
      <div className='explore-title-container'>
        <h1 className='page-title'>Discover Something New</h1>
      </div>
      <Box
        className='collection-containter'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          '& > :not(style)': {
            // m: 1,
            width: '80%',
            height: '25vh',
            margin: '1em auto 3em auto'
          },
        }}
      >
        <Paper
          onClick={()=>navigate(`/explore/beaches`)}
          sx={{
            backgroundImage: `url(${beachesBg})`,
            backgroundPosition: 'center',
            padding: '2em',
        }}
        >
          <h2 className='section-title'>Beaches</h2>
          </Paper>

        <Paper
          onClick={()=>navigate(`/explore/cities`)}
          sx={{
            backgroundImage: `url(${citiesBg})`,
            backgroundPosition: 'center',
            padding: '2em'
        }}
        >
        <h2 className='section-title'>Cities</h2>
        </Paper>

        <Paper
          onClick={()=>navigate(`/explore/castles`)}
          sx={{
            backgroundImage: `url(${castlesBg})`,
            backgroundPosition: 'center',
            padding: '2em'
        }}
        >
          <h2 className='section-title'>Castles</h2>
        </Paper>
        <Paper
          onClick={()=>navigate(`/explore/mountains`)}
          sx={{
            backgroundImage: `url(${mountainsBg})`,
            backgroundPosition: 'center',
            padding: '2em'
        }}
        >
          <h2 className='section-title'>Mountains</h2>
        </Paper>
      </Box>
    </div>
  )
}