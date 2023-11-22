// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Articles from './Pages/Articles';
import ArticleList from './Pages/ArticleList';
import NotFoundPage from './Pages/NotfoundPage';
function App() {
  return (
    <Router>
    <div className="App">
       <NavBar />
      <div>
       
       
          <Routes>
            {/* Use Route component for each route */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:articleId" element={<ArticleList />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        
      </div>
    </div>
    </Router>
  );
}

export default App;
