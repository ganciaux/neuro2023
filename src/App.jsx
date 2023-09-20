import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Clients } from "./components/Clients";
import { Articles } from "./components/Articles";
import { Navigation } from "./components/Navigation";
import { NoMatch } from "./components/NoMatch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="home" element={<Home />} />
          <Route path="clients" element={<Clients />} />
          <Route path="articles" element={<Articles />} />
          <Route path="*" element={<NoMatch />} />
          {/* Ajoutez d'autres routes ici */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
