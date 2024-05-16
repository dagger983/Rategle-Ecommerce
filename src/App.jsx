import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Category from './components/category/Categories';
import SearchResult from './components/searchResult/seacrhResult';
import Filter from './components/filter/Filter';
import Footer from './components/footer/footer';
import RotateError from './components/rotateerror/rotateerror';
import CarouselFlipkart from './components/carousel/carousel';
import BestDealsMobiles from './components/bestdeals(mobiles)/bestdealsmobiles';
import Banners from './components/banners/banners';

function App() {
  const [showError, setShowError] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
    setShowSearchResults(true);
  };

  return (
    <>
      {showError ? (
        <RotateError />
      ) : (
        <div>
          <Navbar onSearch={handleSearch} />
          <Category />
          {showSearchResults ? (
            <>
              <Filter />
              <SearchResult searchValue={searchValue} />
            </>
          ) : (
            <>
              <CarouselFlipkart />
              <BestDealsMobiles />
              <Banners />
            </>
          )}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
