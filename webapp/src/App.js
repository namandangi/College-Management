import "./App.css";
import "./style.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import TopNav from "./Components/TopNav";
import Library from "./Components/Library";
import Project from "./Components/Project";
import Department from "./Components/Department";
import Committee from "./Components/Committee";
import Contact from "./Components/Contact";
import SingleDepartment from "./Components/SingleDepartment";

import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const renderLibrary = () => <Library />;
  const renderHome = () => <Home />;
  const renderProject = () => <Project />;
  const renderDepartment = () => <Department />;
  const renderCommittee = () => <Committee />;
  const renderContact = () => <Contact />;
  const renderSingleDepartment = () => <SingleDepartment />;

  return (
    <div className="App">
      <Router>
        <TopNav />
        <Route exact path="/" component={renderHome} />
        <Route exact path="/library" component={renderLibrary} />
        <Route exact path="/projects" component={renderProject} />
        <Route exact path="/departments" component={renderDepartment} />
        <Route exact path="/committees" component={renderCommittee} />
        <Route exact path="/contact" component={renderContact} />
        <Route
          exact
          path="/department/:dname"
          component={renderSingleDepartment}
        />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
