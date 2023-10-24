import "./App.css";
import Bag from "./components/Bag";
import Address from "./components/Address";
import Home from "./components/Home";
import ItemPage from "./components/itempage";
import PaymentForm from "./components/payment";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <SideBar /> */}
        {/* <Home /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/bag" element={<Bag />} />
            <Route path="/address" element={<Address />} />
            <Route path="/items/:id" element={<ItemPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
