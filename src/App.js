import "./App.css";
import Bag from "./components/Bag";
import Address from "./components/Address";
import Home from "./components/Home";
import ItemPage from "./components/itempage";
import PaymentForm from "./components/payment";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* <SideBar /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/bag" element={<Bag />} />
          <Route path="/address" element={<Address />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/checkout" element={<PaymentForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
