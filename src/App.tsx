import { Route, Routes } from "react-router-dom";
import Home from "./components/templates/Home";
import Login from "./components/templates/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
