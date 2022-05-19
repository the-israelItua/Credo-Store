import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes";
import Template from "components/Template";
import Products from "routes/Products";
import Orders from "routes/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Template />}>
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
