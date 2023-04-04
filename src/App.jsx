import { useEffect, useState } from 'react'
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import DetailView from './pages/DetailView';
import './App.css';
import { Route, Routes } from 'react-router-dom';
 
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [topAvenger, setTopAvenger] = useState(null);
  const [searchList, setSearchList] = useState([]);
  
  const [avengers, setAvengers] = useState([]);
  

  const setTopAvengerFromSearch = (name) => {
    const findSearchedAvenger = avengers.find((avenger) => avenger.name === name)
    setTopAvenger(findSearchedAvenger)
  }

  const handleFilter = (numMovies, numSeries, numComics) => {
    const filteredAvengers = avengers.filter((avenger) => avenger.comics.available < numComics
      && avenger.series.available < numSeries && avenger.stories.available < numMovies)
    setSearchList(filteredAvengers);
  } 

  useEffect(() => {
    const avengerWithMaxMovies = searchList.reduce((acc, curr) => {
      if (curr.stories.available > acc) {
        acc = curr.stories.available
        return acc
      }
      else {
        acc = acc + 0;
        return acc
      }
     }, 0)

    const findmaxAvenger = searchList.find((avenger) => avenger.stories.available === avengerWithMaxMovies)
    setTopAvenger(findmaxAvenger)
  }, [searchList])

  useEffect(() => {
     const avengerWithMaxMovies = avengers.reduce((acc, curr) => {
      if (curr.stories.available > acc) {
        acc = curr.stories.available
        return acc
      }
      else {
        acc = acc + 0;
        return acc
      }
     }, 0)
    const findmaxAvenger = avengers.find((avenger) => avenger.stories.available === avengerWithMaxMovies)
    setTopAvenger(findmaxAvenger)
  }, [avengers])

  useEffect(() => {
    
   const getAllAvengers = async () => {
      const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&apikey=${API_KEY}`);
     const json = await response.json();  
     setAvengers(json.data.results);

    } 
    getAllAvengers().catch(console.error);
  }, [])
  return (
    <div className="whole-page">
      <Routes>
        <Route path="/" element={<Layout  avengers={avengers} setTopAvengerFromSearch={setTopAvengerFromSearch} topAvenger={topAvenger} handleFilter={handleFilter} searchList={searchList} />}>
          <Route index={true} element={<HomePage topAvenger={topAvenger} handleFilter={handleFilter} avengers={avengers} searchList={searchList} />} />
          <Route path="about/:id" element={<DetailView />} />
        </Route>
        
     </Routes>
    </div>
  )
}

export default App
