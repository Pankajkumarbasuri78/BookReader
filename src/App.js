import React from 'react';
import './App.css';
import { AuthorPage } from './Page/AuthorPage/AuthorPage';
import { ContentPage } from './Page/ContentPage/ContentPage';
import { HomePage } from './Page/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    {/* <HomePage />
    <ContentPage />
    <AuthorPage /> */}
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/content' element={<ContentPage />} />
      <Route path='/author' element={<AuthorPage />} />
    </Routes>
    </>
  );
}

export default App;
