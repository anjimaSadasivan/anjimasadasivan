import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Topbar from "./DashBoard";
import AboutMeCard from "./About";
import Project from "./Projects";
import Featured from "./Featured/Featured";
import Sideprofile from "./SideProfile";

const MainContent = () => {
  const location = useLocation();
  const [testFuncStyle, setTestFuncStyle] = useState({});

  useEffect(() => {
    if (
      location.pathname === "/projects" ||
      location.pathname === "/featured"
    ) {
      setTestFuncStyle({ marginTop: "0px", right: 30 });
    } else {
      setTestFuncStyle({ marginTop: "130px" });
    }
  }, [location]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Topbar />
      <div>{/* <Sideprofile style={testFuncStyle} /> */}</div>
      <Routes>
        <Route path="/" element={<AboutMeCard />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
    </div>
  );
};

export default MainContent;
