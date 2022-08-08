import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route> */}
    </Routes>
  );
}

export default App;
