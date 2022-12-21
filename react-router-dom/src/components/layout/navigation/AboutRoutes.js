// import './AboutRoutes.css';
import { Route, Routes } from "react-router-dom";
import AboutWrappers from "../../wrappers/AboutWrappers";
import About from "../../../views/About";
import NewAbout from "../../../views/NewAbout";
import NotFound from "../../../views/NotFound";

function AboutRoutes() {
  return (
    <Routes>
      <Route element={<AboutWrappers />}>
        <Route index element={<About />} />
        <Route path="id" element={<About />} />
        <Route path="new" element={<NewAbout />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AboutRoutes;
