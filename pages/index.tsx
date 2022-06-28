import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '../src/Link'
import Copyright from '../src/Copyright'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          My dashboard Website
        </Typography>
        <Link href="/test" color="secondary">
          Test Page
        </Link>
        <Link href="/about" color="secondary">
          About page
        </Link>
      </Box>
    </Container>
  )
}

export default Home
