import React from 'react'
import Home from './components/Home/Home';
import WorkOnYourself from './components/WorkOnYourself/WorkOnYourself';
import { Route, Routes } from 'react-router-dom';
import RelationshipConfusion from './components/RelationshipConfusion/RelationshipConfusion';
import RedFlags from './components/RedFlags/RedFlags';
import MBTI from './components/MBTIAnalysis/MBTI';

const App = () => {
  return (
   
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/self-introspection' element={<WorkOnYourself />}/>
      <Route path='/relationship-confusion' element={<RelationshipConfusion />}/>
      <Route path='/red-flags' element={<RedFlags />}/>
      <Route path='/mbti-analysis' element={<MBTI />}/>
    </Routes>
  
  )
}

export default App;