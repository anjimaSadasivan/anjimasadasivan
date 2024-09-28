import "./App.css";
import MainContent from "./app/components/MainContent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

export default App;
