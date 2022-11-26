
import './App.css';
import Blog from './views/Blog';
import CreatePosts from './views/CreatePosts';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';









function App() {
  return (    
  <BrowserRouter>
  <Header/>
      <Routes>
        <Route path="/" element={<Blog/>}/> 
        <Route path="/CreatePosts" element={<CreatePosts/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
