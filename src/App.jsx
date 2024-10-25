import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/Peer-Review-Assignment-ibm-reactjs/">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
