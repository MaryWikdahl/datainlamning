
import './App.css';
import Blog from './views/Blog';
import CreatePosts from './views/CreatePosts';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import { useEffect } from 'react';









function App() {
  useEffect(()=> {
    fetch('https://localhost:7161/api/Values/Test')
    .then(res => {return res.json()})
    .then(data => {console.log(data)})
    .catch(err => {console.log(err)})
  },[]
  
  )

  return (
    
    
  <BrowserRouter>
  <Header/>
      <Switch>
        <Route path="/" exact component={Blog}/> 
        <Route path="/CreatePosts" exact component={CreatePosts}/>
      </Switch>
  </BrowserRouter>
  );
}

export default App;
