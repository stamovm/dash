import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import Link from '../src/Link'
import TextField from '@mui/material/TextField'

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

        <form>
          <TextField
            id="txtField"
            label="my field"
            // variant="standard"
            // value={'abc'}
            // color="primary"
            fullWidth
            required
            sx={{ my: 5 }}
            // onChange={}
          />
        </form>
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
        <HomeIcon color="secondary" />
      </Box>
    </Container>
  )
}

export default Test
