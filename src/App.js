import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ArticleList from './components/ArticlesList';
import ArticleDetail from './components/ArticleDetail';
import NavBar from './components/NavBar';
import UserProfile from './components/UserProfile';

function App() {
  const [user, setUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
  });

  const errorMsg = (
    <div className="error">
      <h3>Error</h3>
      Oops, you're accessing the wrong path!
    </div>
  ); 

  return (
    <div className="App">
      <div className="app-container">
        <div className="banner">
          <Header />
          <UserProfile user={user} />
        </div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/topics/:topic_slug/articles" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<ArticleDetail user={user} />} />
          <Route path="*" element={errorMsg} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
