import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import PostWatch from './Components/Post-watch';
import PostList from './Components/Post-list';
import PostCreate from './Components/Post-create';

function App() {
  return (
      <Routes>
        <Route path='/posts/new'element={<PostCreate/>}/>
        <Route path='/edit/:id'element={<PostWatch/>}/>
        <Route path='/'element={<PostList/>}/>
      </Routes>
  );
}

export default App;
