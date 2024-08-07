import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Home from './pages/Home'
import Today from './pages/Today'
import Special from './pages/Special'
import Video from './pages/Video'
import Not from './pages/Not'

import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
  return (   
    <>
      <BrowserRouter>
        <Header></Header>
        <Main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/today' element={<Today />} />
              <Route path='/special' element={<Special />}/>
              <Route path='/video/:videoID' element={<Video />}/>
              <Route path='/*' element={<Not />}/>
            </Routes>
        </Main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;