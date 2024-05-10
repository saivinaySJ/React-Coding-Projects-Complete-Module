import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormData from "./FormData";
import Home from "./Home";
function Navigate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FormData />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Navigate;
