import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import Link from '../src/Link'

const myStyle = {
  color: 'darkslategray',
  backgroundColor: 'lightblue',
  borderRadius: 4,
  '&:hover': { backgroundColor: 'blue', color: 'yellow' },
}

const Test: NextPage = () => {
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
          Test Page
        </Typography>
        <Typography variant="h5" color="purple">
          Testing the typography component
        </Typography>
        <Typography variant="h6" color="secondary">
          Testing the typography component 2
        </Typography>
        <Box maxWidth="sm">
          <Button
            variant="contained"
            component={Link}
            noLinkStyle
            href="/"
            startIcon={<HomeIcon />}
            sx={myStyle}
          >
            Go to the home page
          </Button>
        </Box>
        <div>test component</div>
        <HomeIcon color="error" />
      </Box>
    </Container>
  )
}

export default Test
