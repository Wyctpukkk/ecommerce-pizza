import './scss/app.scss';
import React, { createContext, useState } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Pagination } from './components/Pagination/Pagination';

export const SearchPizza = createContext();

function App() {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchPizza.Provider value={{ searchText, setSearchText }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Pagination />
      </div>
    </SearchPizza.Provider>
  );
}

export default App;
