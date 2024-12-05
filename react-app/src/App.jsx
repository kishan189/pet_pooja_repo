import { useState } from 'react';
import TableContainer from './components/TableContainer';
import Header from './Header';
import { Routes,Route } from 'react-router';
import FormContainer from './component2/FormContainer';
function App() {
   

  return (
    <>
      <Header/>
      <Routes>
      <Route path='' element={<TableContainer/>}>Table</Route>
      <Route path='/form' element={<FormContainer/>}>From</Route>
    </Routes>
    </>
  )
}

export default App
