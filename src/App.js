import {Route, Routes } from 'react-router-dom'
import About from './About';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import SearchView from './SearchView';
import { useEffect, useState } from 'react';
import MovieView from './MovieView';

function App() {

    const [searchResults,setSearchResults]= useState([]);
    const [searchText,setSearchText] = useState('');

    useEffect(()=>{
      if(searchText){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=1e9f3cead1d2ad3811ef9c6806e1f2ee&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response=>response.json())
      .then(data=>{
        setSearchResults(data.results)
      })


      }
      
    },[searchText])


  return (
    <div className="App">
       <Navbar searchText={searchText} setSearchText={setSearchText} />
      
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route path='/search' element= {<SearchView keyword={searchText} searchResults={searchResults}/>}/>
          <Route exact path='/movie/:id' element={<MovieView/>}/>


      
        </Routes>
      


       

      

    </div>
  );
}

export default App;
