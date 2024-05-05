
import './App.css';
import Header  from './components/Header';
import SearchBar  from './components/searchbar';
import SelectMenu  from './components/selectMenu';
import CountriesList from './components/CountriesList';
import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {ThemeContext} from './components/context'
import CountryDetail from './components/CountryDetail';





function App() {
  const [query, setQuery] = useState('');
  const a = useContext(ThemeContext)
  console.log(a)
  return (
    <div className="App">
      <Header/>
     <div className='search-filter-container'>
  
     <SearchBar setQuery={setQuery} />
     
      <SelectMenu setQuery={setQuery}/>
      
     </div>
     <CountriesList query={query} />
     {/* {query === 'unmount' ? '' : <CountriesList query={query} />} */}
    
   <Routes>
    <Route path='/home' element ={<CountryDetail/>}></Route>
    
   </Routes>
 
    </div>
  );
}

export default App;
