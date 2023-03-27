import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import { Box, Container, Grid } from '@mui/material'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Box>
      <Nav />
      <Container>
        <Grid
          container
          spacing={10}
          pt={10}>
          <Grid item xs={3} sx={{display: {xs: "none", md: "block"}}}>
            <Sidebar />
          </Grid>
          <Grid item md={6} xs={12}>
            <Content />
          </Grid>
          <Grid item xs={3} sx={{display: {xs: "none", md: "block"}}}>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default App
