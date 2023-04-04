
import SearchAppBar from '../components/SearchAppBar'

function AppLogic({toggle, toggleNav, avengers, setTopAvengerFromSearch}) {
  return (
    <div className="whole-page">
      <SearchAppBar toggleNav={toggleNav} avengers={avengers} setTopAvengerFromSearch={setTopAvengerFromSearch} />
    </div>
  )
}

export default AppLogic