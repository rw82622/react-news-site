import './App.css';
import { useState } from "react"
// data
import News from './data/news.json';
import navItemsData from './data/navItems.json';
// components
import AppNav from './components/AppNav';
import Homepage from './Pages/Homepage';
import Articlepage from './Pages/Articlepage';
import {HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  // states
  const [showButton, setShowButton] = useState(true)
  const [navItems, setNavItems] = useState(navItemsData)
  const [articles, setArticle] = useState(
    News.map((item, index) => {
      return {
        id: index,
        title: item.title,
        abstract: item.abstract,
        byline: item.byline,
        image: item.multimedia.length ? item.multimedia[0] : null,
        created_date: item.created_date
      }
    }))

  const handleNavClick = (clickedItem) => { console.log(clickedItem) }

  const getArticleById = (articleID) => {
    return articles[articleID]
  }

  // renders
  return (
    <div className='container'>
      <AppNav 
        navItems={navItems} 
        handleNavClick={handleNavClick} 
      />
      <Router>
        <Routes>
          <Route 
            path='/' 
            element={<Homepage articles={articles} /> } />
          <Route 
            path='/articles/:articleID' 
            element={<Articlepage getArticleById={getArticleById}/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
