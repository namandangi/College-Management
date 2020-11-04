import "./App.css";
import "./style.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import TopNav from "./Components/TopNav";
import Library from "./Components/Library";
import Project from "./Components/Project";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const renderLibrary = () => <Library />;
  const renderHome = () => <Home />;
  const renderProject = () => <Project />;

  return (
    <div className="App">
      <Router>
        <TopNav />
        <Route exact path="/" component={renderHome} />
        <Route exact path="/library" component={renderLibrary} />
        <Route exact path="/projects" component={renderProject} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
