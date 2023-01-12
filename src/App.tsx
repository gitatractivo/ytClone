import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from "@mui/material";
import {Navbar,Feed,SearchFeed,VideoDetail,ChannelDetail} from './components';

type Props = {}

const App = (props: Props) => {
  return (
    <BrowserRouter >
      <Box
        sx={{backgroundColor: '#444'}}
      >
          <Navbar />
        <Routes>
          <Route path='/'  element={<Feed />} />
          <Route path='/video/:id'  element={<VideoDetail />} />
          <Route path='/channel/:id'  element={<ChannelDetail />} />
          <Route path='/search/:searchItem'  element={<SearchFeed />} />

        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App