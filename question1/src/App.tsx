import ContactBook from "./components/Contact_components/ContactBook";
import SearchApp from "./components/GitHub_Search_components/SearchApp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const HomePage = () => {
    return (
      <nav>
        <Link to="/contact-book">Contact Book App</Link>
        <Link to="/github-search">GitHub Search App</Link>
      </nav>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/contact-book" element={<ContactBook />} />
          <Route path="github-search" element={<SearchApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
