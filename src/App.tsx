import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import ShopListPage from "./pages/ShopListPage/ShopListPage";
import ShopListContextProvider from "./context/ShopListContext";

const App = () => {
  return (
    <ShopListContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/shopList" element={<ShopListPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ShopListContextProvider>
  );
};

export default App;
