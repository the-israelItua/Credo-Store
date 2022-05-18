import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes";
import Template from "components/Template";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
